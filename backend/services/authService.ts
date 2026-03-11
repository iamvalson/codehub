import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";

class AuthService {
  static registerUser = async (
    name: string,
    email: string,
    password: string,
  ) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return user;
  };
}

export default AuthService;
