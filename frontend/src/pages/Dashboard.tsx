import Sidebar from "@/components/custom-ui/Sidebar";
import type { NavTab } from "@/components/Header";
import Header from "@/components/Header";

const dashboardHeaderTabs: NavTab[] = [
  { name: "Overview", href: "#", current: false },
  { name: "Repositories", href: "#", current: true },
  { name: "Projects", href: "#", current: false },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-background-dark">
      <Header navMenu={dashboardHeaderTabs} />
      <div className="flex-1 overflow-hidden">
        <Sidebar />
      </div>
    </div>
  );
};
export default Dashboard;
