import type { NavTab } from "./Header";
import Icon from "./custom-ui/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export type TopbarProps = {
  navMenu: NavTab[];
};

const Topbar = ({ navMenu }: TopbarProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="font-mono font-bold text-white">CodeHub</span>
        <nav className="ml-6 flex space-x-5">
          {navMenu.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={`
              text-sm font-medium py-3 font-mono
              ${
                tab.current
                  ? "text-codehub-primary border-b-2 border-codehub-primary"
                  : "text-gray-400 hover:text-codehub-primary"
              } `}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="bg-codehub-primary/10 flex flex-row items-center gap-2 py-1 px-2 rounded-md border border-codehub-primary/20 ring-1 focus-within:ring-codehub-primary">
          <Icon name="search" className="w-5 h-5 text-codehub-primary" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none text-white text-sm placeholder:text-gray-400 "
          />
        </div>
        <Icon
          name="notifications"
          size={22}
          className="w-5 h-5 text-gray-400 hover:scale-105 transition cursor-pointer"
        />
        <div className="cursor-pointer group/profile relative overflow-hidden rounded-full">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 -translate-x-full group-hover/profile:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </div>
      </div>
    </div>
  );
};
export default Topbar;
