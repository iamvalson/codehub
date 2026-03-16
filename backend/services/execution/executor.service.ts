import Docker from "dockerode";
import fs from "fs";
import os from "os";
import path from "path";
import type { ExecutionResult } from "./execution.types.js";
import { languageConfigs } from "./language.config.js";

const docker =
  process.platform === "win32"
    ? new Docker({ socketPath: "//./pipe/docker_engine" })
    : new Docker({ socketPath: "/var/run/docker.sock" });

const EXECUTION_TIMEOUT = 10000;
const MEMORY_LIMIT = 128 * 1024 * 1024;

export const executorService = {
  run: async (
    language: string,
    code: string,
    stdin?: string,
  ): Promise<ExecutionResult> => {
    const config = languageConfigs[language];

    if (!config) throw new Error("UNSUPPORTED_LANGUAGE");

    const startTime = Date.now();

    // 1. Write code to a real temp file on your machine
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "codehub-"));
    const filePath = path.join(tmpDir, config.filename);
    fs.writeFileSync(filePath, code, "utf8");

    await pullImageIfNeeded(config.image);

    const container = await docker.createContainer({
      Image: config.image,
      Cmd: config.cmd(config.filename),
      AttachStdout: true,
      AttachStderr: true,
      Tty: false,
      WorkingDir: "/code",
      // Mount the temp folder into the container
      HostConfig: {
        Binds: [`${tmpDir}:/code`], // ← mount folder, not env var
        Memory: MEMORY_LIMIT,
        CpuPeriod: 100000,
        CpuQuota: 50000,
        NetworkMode: "none",
        AutoRemove: true,
      },
    });

    try {
      const stream = await container.attach({
        stream: true,
        stdout: true,
        stderr: true,
      });

      await container.start();

      const { stdout, stderr } = await collectOutput(stream);
      const exitCode = await waitWithTimeout(container, EXECUTION_TIMEOUT);
      const executionTime = Date.now() - startTime;

      return { stdout, stderr, exitCode, executionTime };
    } catch (error: any) {
      try {
        await container.remove({ force: true });
      } catch {}
      if (error.message === "TIMEOUT") throw new Error("EXECUTION_TIMEOUT");
      throw error;
    } finally {
      // Always clean up temp files
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  },
};

const pullImageIfNeeded = async (image: string): Promise<void> => {
  try {
    await docker.getImage(image).inspect();
  } catch {
    await new Promise<void>((resolve, reject) => {
      docker.pull(image, (err: any, stream: any) => {
        if (err) return reject(err);
        docker.modem.followProgress(stream, (err: any) => {
          if (err) return reject(err);
          resolve();
        });
      });
    });
  }
};

const collectOutput = (
  stream: any,
): Promise<{ stdout: string; stderr: string }> => {
  return new Promise((resolve) => {
    let stdout = "";
    let stderr = "";

    stream.on("data", (chunk: Buffer) => {
      const streamType = chunk[0];
      const content = chunk.slice(8).toString("utf8");
      if (streamType === 1) stdout += content;
      else if (streamType === 2) stderr += content;
    });

    stream.on("end", () => resolve({ stdout, stderr }));
  });
};

const waitWithTimeout = (container: any, timeout: number): Promise<number> => {
  return Promise.race([
    container.wait().then((result: any) => result.StatusCode),
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("TIMEOUT")), timeout),
    ),
  ]);
};
