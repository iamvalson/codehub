import type { Role } from "@/types";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [role, setRole] = useState<Role>(() => {
    try {
      return (localStorage.getItem("role") as Role) || "student";
    } catch {
      return "student";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("role", role);
    } catch {
      // ignore write errors
    }
  }, [role]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value as Role);
  };

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Signing in as", role);
    // add real submit logic here
  };

  return { role, handleRoleChange, handleSubmit };
};
