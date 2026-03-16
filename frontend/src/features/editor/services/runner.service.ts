import api from "@/lib/api";
import type { RunResult } from "../types/editor.types";

export const runnerService = {
  execute: async (
    language: string,
    code: string,
    stdin?: string,
  ): Promise<RunResult> => {
    console.log("Sending to backend:", { language, code });
    try {
      const response = await api.post("/execution/execute", {
        language,
        code,
        stdin,
      });

      return response.data.data;
    } catch (error: any) {
      if (error.response?.status === 408) {
        throw new Error("EXECUTION_TIMEOUT");
      }
      if (error.response?.status === 400) {
        throw new Error("UNSUPPORTED_LANGUAGE");
      }
      throw new Error("EXECUTION_FAILED");
    }
  },
};
