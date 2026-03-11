import type { Request, Response } from "express";
import AuthService from "../services/authService.js";

class AuthController {
  static registerUser = async (req: Request, res: Response) => {
    try {
      const user = await AuthService.registerUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      if (error.message === "EMAIL_ALREADY_EXISTS") {
        res.status(409).json({
          success: false,
          errors: [
            {
              field: "email",
              message: "An account with this email already exists",
            },
          ],
        });
      }
    }
  };

  static loginUser = async (req: Request, res: Response) => {
    try {
      const user = await AuthService.loginUser(req.body);
      res.status(200).json(user);
    } catch (error: any) {
      if (error.message === "USER_NOT_FOUND") {
        res.status(404).json({
          success: false,
          errors: [
            {
              field: "email",
              message: "Invalid email",
            },
          ],
        });
      } else if (error.message === "INVALID_PASSWORD") {
        res.status(401).json({
          success: false,
          errors: [
            {
              field: "password",
              message: "Invalid password",
            },
          ],
        });
      } else if (error.message === "ROLE CONFLICT") {
        res.status(403).json({
          success: false,
          errors: [
            {
              field: "role",
              message: "You don't have permission to access this resource",
            },
          ],
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again.",
        });
      }
    }
  };
}

export default AuthController;
