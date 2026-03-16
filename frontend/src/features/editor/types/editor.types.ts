export type Language = {
  id: string;
  label: string;
  monacoId: string;
  version: string;
  defaultCode: string;
};

export type TerminalOutput = {
  type: "stdout" | "stderr" | "info" | "error";
  content: string;
};

export type RunResult = {
  stdout: string | null;
  stderr: string | null;
  exitCode: number;
};
