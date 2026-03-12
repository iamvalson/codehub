import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "ghost";
};

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  const base =
    "py-2 md:py-3 px-6 rounded font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer";
  const variants = {
    primary: "bg-codehub-green text-white hover:bg-green-600",
    ghost:
      "bg-transparent border border-slate-600 text-slate-300 hover:border-slate-400",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
