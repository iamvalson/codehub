import { bottomItems, topItems } from "@/features/layout/config/activityItem";
import type { ActivityItem, PanelId } from "@/types/layout.types";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const routeToPanelMap: Record<string, PanelId> = {
  "/codespace": "codespace",
};

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activePanel, setActivePanel] = useState<PanelId | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const allItems: ActivityItem[] = [...topItems, ...bottomItems];

  const handleIconClick = (item: ActivityItem) => {
    if (item.route) {
      if (location.pathname === item.route) {
        // Same route — just toggle panel
        setIsOpen((prev) => !prev);
      } else {
        // Navigate and set panel from map
        navigate(item.route);
        setActivePanel(routeToPanelMap[item.route] ?? item.id);
        setIsOpen(true);
      }
    } else {
      // No route — just switch panel
      if (activePanel === item.id) {
        setIsOpen((prev) => !prev);
      } else {
        // ← navigate away from route-based pages back to dashboard
        if (routeToPanelMap[location.pathname]) {
          navigate("/dashboard");
        }
        setActivePanel(item.id);
        setIsOpen(true);
      }
    }
  };

  return { handleIconClick, activePanel, isOpen, allItems };
};

export default useSidebar;
