import useSidebar from "@/features/layout/hooks/useSidebar";
import { Outlet } from "react-router-dom";
import ActivityBar from "./ActivityBar";
import SidePanel from "./SidePanel";

const AppShell = () => {
  const { activePanel, isOpen, handleIconClick, allItems } = useSidebar();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0D1117]">
      {/* Icon strip */}
      <ActivityBar
        activePanel={activePanel}
        isOpen={isOpen}
        items={allItems}
        onIconClick={handleIconClick}
      />

      {/* Dynamic side panel */}
      <SidePanel activePanel={activePanel} isOpen={isOpen} />

      {/* Main content area */}
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default AppShell;
