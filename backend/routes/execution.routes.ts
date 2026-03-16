// src/routes/execution.routes.ts
import { Router } from "express";
import { executeCode } from "../controllers/execution.controller.js";

const router = Router();

// Protected — only logged in users can run code
router.post("/execute", executeCode);

export default router;
