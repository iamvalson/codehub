import type { Role } from "@/types";

type Props = {
  role: Role;
  onRoleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
};

const LoginForm = ({ role, onRoleChange, onSubmit }: Props) => (
  <div className="w-full max-w-lg py-6 px-4 sm:p-8 bg-codehub-panel border border-slate-800 shadow-2xl">
    <form onSubmit={onSubmit}>
      <h2 className="text-white text-xl sm:text-2xl font-semibold">Sign In</h2>

      <div className="w-full p-1 bg-slate-900 rounded-lg flex mt-6">
        <label className="flex-1 cursor-pointer group">
          <input
            checked={role === "student"}
            onChange={onRoleChange}
            className="hidden peer"
            name="role"
            type="radio"
            value="student"
          />
          <div className="py-1 md:py-2 text-center rounded text-sm font-medium transition-all peer-checked:bg-primary peer-checked:text-background-dark text-slate-400 group-hover:text-slate-200">
            Student
          </div>
        </label>
        <label className="flex-1 cursor-pointer group">
          <input
            checked={role === "lecturer"}
            onChange={onRoleChange}
            className="hidden peer"
            name="role"
            type="radio"
            value="lecturer"
          />
          <div className="py-1 md:py-2 text-center rounded text-sm font-medium transition-all peer-checked:bg-primary peer-checked:text-background-dark text-slate-400 group-hover:text-slate-200">
            Lecturer
          </div>
        </label>
      </div>
      <div className="mt-4 flex flex-col gap-3 md:gap-4">
        <div>
          <label htmlFor="email" className="text-white max-md:text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full py-2 md:py-3 px-3 md:px-4 mt-1 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-primary max-md:text-sm"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-white max-md:text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full py-2 md:py-3 px-3 md:px-4 mt-1 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-primary max-md:text-sm"
            placeholder="Enter your password"
            required
          />
        </div>

        <button className="bg-codehub-green py-2 md:py-3 px-6 rounded text-white font-semibold cursor-pointer transition-colors flex flex-row items-center justify-center gap-1 mt-4 group hover:bg-green-600">
          Sign In
          <span className="max-md:hidden material-symbols-outlined group-hover:translate-x-2 transition duration-200">
            arrow_right_alt
          </span>
        </button>
      </div>
    </form>
    <hr />
    <p className="text-center text-sm text-slate-400 mt-4">
      Don't have an account?{" "}
      <a href="/signup" className="text-primary hover:underline">
        Sign Up
      </a>
    </p>
  </div>
);

export default LoginForm;
