import api from "@/lib/api";
import type { LoginUserInput, RegisterUserInput } from "../schemas/auth.schema";

export const authService = {
  register: async (data: RegisterUserInput) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },

  login: async (data: LoginUserInput) => {
    const response = await api.post("/auth/login", data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  },
};
