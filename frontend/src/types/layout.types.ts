export type PanelId =
  | "home"
  | "assessment"
  | "codespace"
  | "submissions"
  | "settings";

export type ActivityItem = {
  id: PanelId;
  icon: string;
  label: string;
  position: "top" | "bottom";
  route?: string;
};
