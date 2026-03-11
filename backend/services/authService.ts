import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.js";

type RegisterParams = {
  name: string;
  email: string;
  password: string;
  role: Role;
};
type LoginParams = {
  email: string;
  password: string;
  role: Role;
};

class AuthService {
  static registerUser = async ({
    name,
    email,
    password,
    role,
  }: RegisterParams) => {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("EMAIL_ALREADY_EXISTS");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    return user;
  };

  static loginUser = async ({ email, password, role }: LoginParams) => {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("INVALID_PASSWORD");
    }

    if (user.role != role) {
      throw new Error("ROLE CONFLICT");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "10m" },
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  };
}

export default AuthService;
