import { Router } from "express";
import AuthController from "../controllers/authController.js";
import { validateRequest } from "../middleware/validate.middleware.js";
import { registerUserSchema } from "../schemas/auth.schema.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateRequest(registerUserSchema),
  AuthController.registerUser,
);

export default authRouter;
