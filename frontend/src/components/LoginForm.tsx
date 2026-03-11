import { useRegister } from "@/features/auth/hooks/useAuth";
import type { Role } from "@/types";
import { useState } from "react";

type Props = {
  signup?: boolean;
};

const LoginForm = ({ signup }: Props) => {
  const { handleRegister, isLoading, getFieldError, serverError } =
    useRegister();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "STUDENT" as Role,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRegister(formData);
  };

  return (
    <div className="w-full max-w-lg py-6 px-4 sm:p-8 bg-codehub-panel border border-slate-800 shadow-2xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-white text-xl sm:text-2xl font-semibold">
          {signup ? "Create Account" : "Sign In"}
        </h2>

        {/* Global server error */}
        {serverError && (
          <div className="mt-4 bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded text-sm">
            {serverError}
          </div>
        )}

        <div className="w-full p-1 bg-slate-900 rounded-lg flex mt-6">
          {(["STUDENT", "INSTRUCTOR"] as const).map((r) => (
            <label key={r} className="flex-1 cursor-pointer group">
              <input
                type="radio"
                name="role"
                className="hidden peer"
                checked={formData.role === r}
                value={r}
                onChange={handleChange}
              />
              <div className="py-1 md:py-2 text-center rounded text-sm font-medium transition-all peer-checked:bg-primary peer-checked:text-background-dark text-slate-400 group-hover:text-slate-200">
                {r === "STUDENT" ? "Student" : "Instructor"}
              </div>
            </label>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 md:gap-4">
          <div className={`${!signup && "hidden"}`}>
            <label htmlFor="name" className="text-white max-md:text-sm">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full py-2 md:py-3 px-3 md:px-4 mt-1 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 max-md:text-sm transition
                ${getFieldError("name") ? "ring-2 ring-red-500" : "focus:ring-primary"}`}
            />
            {getFieldError("name") && (
              <p className="text-red-400 text-xs mt-1">
                {getFieldError("name")}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-white max-md:text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full py-2 md:py-3 px-3 md:px-4 mt-1 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 max-md:text-sm transition
                ${getFieldError("email") ? "ring-2 ring-red-500" : "focus:ring-primary"}`}
            />
            {getFieldError("email") && (
              <p className="text-red-400 text-xs mt-1">
                {getFieldError("email")}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="text-white max-md:text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full py-2 md:py-3 px-3 md:px-4 mt-1 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 max-md:text-sm transition
                ${getFieldError("password") ? "ring-2 ring-red-500" : "focus:ring-primary"}`}
            />
            {getFieldError("password") && (
              <p className="text-red-400 text-xs mt-1">
                {getFieldError("password")}
              </p>
            )}
          </div>
          <div className={`${!signup && "hidden"}`}>
            <label
              htmlFor="confirmPassword"
              className="text-white max-md:text-sm"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full py-2 md:py-3 px-3 md:px-4 mt-1 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 max-md:text-sm transition
                ${getFieldError("confirmPassword") ? "ring-2 ring-red-500" : "focus:ring-primary"}`}
            />
            {getFieldError("confirmPassword") && (
              <p className="text-red-400 text-xs mt-1">
                {getFieldError("confirmPassword")}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-codehub-green py-2 md:py-3 px-6 rounded text-white font-semibold cursor-pointer transition-colors flex flex-row items-center justify-center gap-1 mt-4 group hover:bg-green-600"
          >
            {signup
              ? isLoading
                ? "Creating account..."
                : "Create Account"
              : "Sign In"}
            <span className="max-md:hidden material-symbols-outlined group-hover:translate-x-2 transition duration-200">
              arrow_right_alt
            </span>
          </button>
        </div>
      </form>
      <hr />
      <p className="text-center text-sm text-slate-400 mt-4">
        {signup ? "Already have an account?" : "Don't have an account?"}{" "}
        <a
          href={signup ? "/login" : "/signup"}
          className="text-primary hover:underline"
        >
          {signup ? "Log In" : "Create account"}
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
