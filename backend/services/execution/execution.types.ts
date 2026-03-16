export type ExecutionResult = {
  stdout: string;
  stderr: string;
  exitCode: number;
  executionTime: number; // in milliseconds
};

export type LanguageConfig = {
  image: string;
  cmd: (filename: string) => string[];
  filename: string;
};
