import type { PanelId } from "@/types/layout.types";
import Icon from "./custom-ui/Icon";
import Assignments from "./panels/Assignments";
import FilesPanel from "./panels/FilesPanel";
import HomePanel from "./panels/HomePanel";
import Submissions from "./panels/Submissions";

type Props = {
  activePanel: PanelId | null;
  isOpen: boolean;
};

const panels: Record<PanelId, React.ReactNode> = {
  home: <HomePanel />,
  assessment: <Assignments />,
  submissions: <Submissions />,
  codespace: <FilesPanel />,
  settings: <div>Settings</div>,
};

const panelTitles: Record<PanelId, string> = {
  home: "Home",
  assessment: "Assessments",
  submissions: "Submissions",
  codespace: "File Explorer",
  settings: "Settings",
};

const SidePanel = ({ activePanel, isOpen }: Props) => {
  if (!isOpen || !activePanel) return null;

  return (
    <aside className="py-4 w-60 h-full bg-sidebar-details-background border-r border-slate-800 flex flex-col overflow-hidden">
      {/* Panel header */}
      <div className="px-4 py-2 flex flex-row items-center justify-between">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {panelTitles[activePanel]}
        </h2>
        <Icon name="more_horiz" className="text-slate-400 cursor-pointer" />
      </div>

      {/* Panel content */}
      <div className="flex-1 overflow-y-auto">{panels[activePanel]}</div>
    </aside>
  );
};
export default SidePanel;
