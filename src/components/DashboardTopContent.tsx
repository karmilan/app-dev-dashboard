import { FaArrowUp } from "react-icons/fa";
import Card from "./ui/Card";

const DashboardTopContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card
        title="Total Sales"
        value="$12,450"
        icon={<FaArrowUp />}
        description="+8% from last week"
      />
      <Card
        title="Total Users"
        value="1,250"
        icon={<FaArrowUp />}
        description="+5% from last week"
      />
      <Card
        title="Total Revenue"
        value="$5,000"
        icon={<FaArrowUp />}
        description="+10% from last week"
      />
      <Card
        title="Total Orders"
        value="300"
        icon={<FaArrowUp />}
        description="+12% from last week"
      />
    </div>
  );
};

export default DashboardTopContent;
