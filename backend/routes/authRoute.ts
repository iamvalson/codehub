import { Router } from "express";
import AuthController from "../controllers/authController.js";
import { validateRequest } from "../middleware/validate.middleware.js";
import { loginUserSchema, registerUserSchema } from "../schemas/auth.schema.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateRequest(registerUserSchema),
  AuthController.registerUser,
);

authRouter.post(
  "/login",
  validateRequest(loginUserSchema),
  AuthController.loginUser,
);

export default authRouter;
