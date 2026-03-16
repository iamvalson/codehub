import { useState } from "react";
import { runnerService } from "../services/runner.service";
import { type Language, type TerminalOutput } from "../types/editor.types";

export const useCodeRunner = () => {
  const [output, setOutput] = useState<TerminalOutput[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const clearOutput = () => setOutput([]);

  const addOutput = (type: TerminalOutput["type"], content: string) => {
    setOutput((prev) => [...prev, { type, content }]);
  };

  const runCode = async (code: string, language: Language) => {
    setIsRunning(true);
    clearOutput();

    addOutput("info", `Running ${language.label}...`);

    try {
      const result = await runnerService.execute(language.id, code);

      if (result.stdout) {
        addOutput("stdout", result.stdout);
      }

      if (result.stderr) {
        addOutput("stderr", result.stderr);
      }

      if (!result.stdout && !result.stderr) {
        addOutput("info", "Program exited with no output");
      }

      if (result.exitCode !== 0) {
        addOutput("error", `Process exited with code ${result.exitCode}`);
      }
    } catch (error: any) {
      if (error.message === "RATE_LIMITED") {
        addOutput(
          "error",
          "Too many requests. Please wait a moment and try again.",
        );
      } else if (error.message === "UNAUTHORIZED") {
        addOutput(
          "error",
          "Execution service unavailable. Please try again later.",
        );
      } else {
        addOutput("error", "Failed to connect to execution service.");
      }
    } finally {
      setIsRunning(false);
    }
  };

  return { output, isRunning, runCode, clearOutput };
};
