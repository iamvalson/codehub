import api from "@/lib/api";
import type { RegisterUserInput } from "../schemas/auth.schema";

export const authService = {
  register: async (data: RegisterUserInput) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  },
};
