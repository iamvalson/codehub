import type { Role } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

type RegisterFormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
};

type LoginFormState = {
  email: string;
  password: string;
  role: Role;
};

type FieldError = {
  field: string;
  message: string;
};

export const useRegister = () => {
  const navigate = useNavigate();
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [signupErrors, setSignupErrors] = useState<FieldError[]>([]);
  const [signupServerError, setSignupServerError] = useState<string | null>(
    null,
  );

  const handleRegister = async (formData: RegisterFormState) => {
    setIsSignupLoading(true);
    setSignupErrors([]);
    setSignupServerError(null);

    try {
      const response = await authService.register(formData);

      // Store token in localStorage
      localStorage.setItem("token", response.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error: any) {
      const data = error.response?.data;

      if (data?.errors) {
        setSignupErrors(data.errors);
      } else {
        setSignupServerError(data.message || "An unexpected error occurred.");
      }
    } finally {
      setIsSignupLoading(false);
    }
  };

  // Helper — get error message for a specific field
  const getSignupFieldError = (field: string): string | undefined => {
    return signupErrors.find((error) => error.field === field)?.message;
  };

  return {
    handleRegister,
    isSignupLoading,
    getSignupFieldError,
    signupServerError,
  };
};

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [errors, setLoginErrors] = useState<FieldError[]>([]);
  const [loginServerError, setLoginServerError] = useState<string | null>(null);

  const handleLogin = async (formData: LoginFormState) => {
    setIsLoginLoading(true);
    setLoginErrors([]);
    setLoginServerError(null);

    try {
      const response = await authService.login(formData);

      // Store token in localStorage
      localStorage.setItem("token", response.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error: any) {
      const data = error.response?.data;

      if (data?.errors) {
        setLoginErrors(data.errors);
      } else {
        setLoginServerError(data.message || "An unexpected error occurred.");
      }
    } finally {
      setIsLoginLoading(false);
    }
  };

  // Helper — get error message for a specific field
  const getLoginFieldError = (field: string): string | undefined => {
    return errors.find((error) => error.field === field)?.message;
  };

  return { handleLogin, isLoginLoading, getLoginFieldError, loginServerError };
};
