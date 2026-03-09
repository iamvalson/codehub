import type { Role } from "@/types";

type Props = {
  role: Role;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const roles: Role[] = ["student", "lecturer"];

const RoleToggle = ({ role, onchange }: Props) => (
  <div className="w-full p-1 bg-slate-900 rounded-lg flex mt-6">
    {roles.map((r) => (
      <label key={r} className="flex-1 cursor-pointer group">
        <input
          checked={role === r}
          onChange={onchange}
          className="hidden peer"
          name="role"
          type="radio"
          value={r}
        />
        <div className="py-1 md:py-2 text-center rounded text-sm font-medium transition-all peer-checked:bg-primary peer-checked:text-background-dark text-slate-400 group-hover:text-slate-200 capitalize">
          {r}
        </div>
      </label>
    ))}
  </div>
);

export default RoleToggle;
