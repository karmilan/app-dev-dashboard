"use client";
import RecentActivity from "./RecentActivity";
import Card from "./ui/Card";
import { Chart } from "./ui/Chart";

const AnalyticsOverview = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className=" md:col-span-2">
          <Card>
            <Chart />
          </Card>
        </div>
        <Card>
          <RecentActivity />
        </Card>
      </div>
    </>
  );
};

export default AnalyticsOverview;
