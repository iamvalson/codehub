type InputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
}: InputProps) => (
  <div>
    <label htmlFor={id} className="text-white max-md:text-sm">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full py-2 md:py-3 px-3 md:px-4 mt-1 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-primary max-md:text-sm"
    />
  </div>
);

export default Input;
