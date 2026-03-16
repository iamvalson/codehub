type IconProps = {
  name: string;
  size?: number;
  fill?: 0 | 1;
  className?: string;
};

const Icon = ({ name, size, fill = 0, className = "" }: IconProps) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontVariationSettings: `'FILL' ${fill}, 'wght' 300, 'GRAD' 0, 'opsz' ${size || 20}`,
    }}
  >
    {name}
  </span>
);

export default Icon;
