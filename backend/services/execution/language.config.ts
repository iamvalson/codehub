import { LanguageConfig } from "./execution.types.js";

export const languageConfigs: Record<string, LanguageConfig> = {
  python: {
    image: "python:3.11-alpine",
    filename: "solution.py",
    cmd: (filename) => ["python", filename], // workdir is /code so just filename
  },
  javascript: {
    image: "node:18-alpine",
    filename: "solution.js",
    cmd: (filename) => ["node", filename],
  },
  java: {
    image: "openjdk:17-alpine",
    filename: "Main.java",
    cmd: (filename) => ["sh", "-c", `javac ${filename} && java Main`],
  },
  cpp: {
    image: "gcc:latest",
    filename: "solution.cpp",
    cmd: (filename) => [
      "sh",
      "-c",
      `g++ ${filename} -o solution && ./solution`,
    ],
  },
  typescript: {
    image: "node:18-alpine",
    filename: "solution.ts",
    cmd: (filename) => ["sh", "-c", `npx ts-node ${filename}`],
  },
};
