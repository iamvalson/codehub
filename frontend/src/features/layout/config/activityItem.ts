import type { ActivityItem } from "@/types/layout.types";

export const topItems: ActivityItem[] = [
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

export const bottomItems: ActivityItem[] = [
  {
    id: "settings",
    icon: "settings",
    label: "Settings",
    position: "bottom",
    route: "/settings",
  },
];
