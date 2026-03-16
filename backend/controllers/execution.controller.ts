// src/controllers/execution.controller.ts
import type { Request, Response } from "express";
import { executorService } from "../services/execution/executor.service.js";

export const executeCode = async (req: Request, res: Response) => {
  try {
    const { language, code, stdin } = req.body;
    const result = await executorService.run(language, code, stdin);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    console.error("=== EXECUTION ERROR ===");
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
    console.error("Full error:", JSON.stringify(error, null, 2));

    // return the actual error to frontend temporarily for debugging
    res.status(500).json({
      success: false,
      message: error.message, // ← show real error
      stack: error.stack,
    });
  }
};
