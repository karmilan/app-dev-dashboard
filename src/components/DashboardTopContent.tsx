import { FaArrowUp } from "react-icons/fa";
import TopContentCard from "./ui/TopContentCard";

const DashboardTopContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <TopContentCard
        title="Total Sales"
        value="$12,450"
        icon={<FaArrowUp />}
        description="+8% from last week"
      />
      <TopContentCard
        title="Total Users"
        value="1,250"
        icon={<FaArrowUp />}
        description="+5% from last week"
      />
      <TopContentCard
        title="Total Revenue"
        value="$5,000"
        icon={<FaArrowUp />}
        description="+10% from last week"
      />
      <TopContentCard
        title="Total Orders"
        value="300"
        icon={<FaArrowUp />}
        description="+12% from last week"
      />
    </div>
  );
};

export default DashboardTopContent;
