import Courses from "./dashboardComponents/Courses";
import Header from "./dashboardComponents/Header";

const DashboardContent = () => {
  return (
    <div className="p-8 flex flex-col gap-6">
      <Header />
      <Courses />
    </div>
  );
};
export default DashboardContent;
