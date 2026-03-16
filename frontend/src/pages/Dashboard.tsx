import DashboardContent from "@/components/DashboardContent";
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
      <DashboardContent />
    </div>
  );
};
export default Dashboard;
