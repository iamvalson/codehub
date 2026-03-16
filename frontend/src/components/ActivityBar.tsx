import type { ActivityItem, PanelId } from "@/types/layout.types";
import Icon from "./custom-ui/Icon";

type ActivityProps = {
  activePanel: PanelId | null;
  isOpen: boolean;
  items: ActivityItem[];
  onIconClick: (id: ActivityItem) => void;
};

const topItems: ActivityItem[] = [
  { id: "home", icon: "home", label: "Home", position: "top" },
  {
    id: "assessment",
    icon: "assignment",
    label: "Assignment",
    position: "top",
  },
  {
    id: "codespace",
    icon: "code",
    label: "Codespace",
    position: "top",
    route: "/codespace",
  },
  {
    id: "submissions",
    icon: "upload_file",
    label: "Submissions",
    position: "top",
  },
];

const bottomItems: ActivityItem[] = [
  { id: "settings", icon: "settings", label: "Setting", position: "bottom" },
];

const ActivityBar = ({ activePanel, isOpen, onIconClick }: ActivityProps) => {
  return (
    <aside className="py-4 w-14 flex flex-col items-center justify-between bg-sidebar-dark h-full max-h-full">
      <div className="flex flex-col gap-8.5">
        {topItems.map((item) => (
          <ActivityBarIcon
            key={item.id}
            item={item}
            isActive={activePanel === item.id && isOpen}
            onClick={() => onIconClick(item)}
          />
        ))}
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-1">
        {bottomItems.map((item) => (
          <ActivityBarIcon
            key={item.id}
            item={item}
            isActive={activePanel === item.id && isOpen}
            onClick={() => onIconClick(item)}
          />
        ))}
      </div>
    </aside>
  );
};

type IconProps = {
  item: ActivityItem;
  isActive: boolean;
  onClick: () => void;
};

const ActivityBarIcon = ({ item, isActive, onClick }: IconProps) => {
  return (
    <button
      onClick={onClick}
      title={item.label}
      className={`relative w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-colors group ${
        isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
      }`}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-codehub-primary rounded-r"></span>
      )}
      <Icon name={item.icon} size={24} className="text-gray-400" />
    </button>
  );
};

export default ActivityBar;
