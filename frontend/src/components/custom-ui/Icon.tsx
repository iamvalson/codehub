type IconProps = {
  name: string;
  size?: number;
  fill?: 0 | 1;
  className?: string;
};

const Icon = ({ name, size = 20, fill = 0, className = "" }: IconProps) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontSize: size,
      fontVariationSettings: `'FILL' ${fill}, 'wght' 300, 'GRAD' 0, 'opsz' ${size}`,
    }}
  >
    {name}
  </span>
);

export default Icon;
