import { Router } from "express";
import AuthController from "../controllers/authController";
import { validateRequest } from "../middleware/validate.middleware";
import { registerUserSchema } from "../schemas/auth.schema";

const authRouter = Router();

authRouter.post(
  "/register",
  validateRequest(registerUserSchema),
  AuthController.registerUser,
);

export default authRouter;
