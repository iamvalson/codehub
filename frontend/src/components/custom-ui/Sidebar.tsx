import Icon from "./Icon";

type SidebarMenuProps = {
  iconName: string;
  size?: number;
  current: boolean;
};

const sidebarMenu: SidebarMenuProps[] = [
  {
    iconName: "home",
    current: true,
  },
  {
    iconName: "assignment",
    current: false,
  },
  {
    iconName: "code",
    current: false,
  },
  {
    iconName: "upload_file",
    current: false,
  },
  {
    iconName: "bar_chart",
    current: false,
  },
];

const Sidebar = () => {
  return (
    <aside className="py-4 w-14 flex flex-col items-center justify-between bg-sidebar-dark h-full max-h-full">
      <div className="flex flex-col gap-8.5">
        {sidebarMenu.map((menu) => (
          <Icon
            name={menu.iconName}
            size={menu.size || 24}
            className={`${menu.current ? "text-codehub-primary" : "text-gray-400"} cursor-pointer hover:text-codehub-primary`}
          />
        ))}
      </div>
      <Icon
        name="settings"
        size={24}
        className="text-gray-400 cursor-pointer hover:text-codehub-primary"
      />
    </aside>
  );
};
export default Sidebar;
