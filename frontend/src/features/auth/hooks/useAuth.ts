import type { Role } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
};

type FieldError = {
  field: string;
  message: string;
};

export const useRegister = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FieldError[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleRegister = async (formData: FormState) => {
    setIsLoading(true);
    setErrors([]);
    setServerError(null);

    try {
      const response = await authService.register(formData);

      // Store token in localStorage
      localStorage.setItem("token", response.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error: any) {
      const data = error.response?.data;

      if (data?.errors) {
        setErrors(data.errors);
      } else {
        setServerError(data.message || "An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Helper — get error message for a specific field
  const getFieldError = (field: string): string | undefined => {
    return errors.find((error) => error.field === field)?.message;
  };

  return { handleRegister, isLoading, getFieldError, serverError };
};
