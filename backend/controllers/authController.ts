import type { Request, Response } from "express";
import AuthService from "../services/authService.js";

class AuthController {
  static registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user = await AuthService.registerUser(name, email, password);
    res.status(201).json(user);
  };
}

export default AuthController;
