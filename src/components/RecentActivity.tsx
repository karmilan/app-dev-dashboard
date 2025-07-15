import { recentActivities } from "@/utils/data";

const RecentActivity = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">Recent Activity</h1>
      {recentActivities.map((data) => (
        <div className="grid grid-cols-5 gap-4 mt-4" key={data.id}>
          <div className="col-span-3">
            <p className="text-sm">{data.user}</p>
            <p className="text-sm text-gray-500">{data.activity}</p>
          </div>
          <div className="col-span-2">
            <div className="flex justify-end ">
              <p
                className={`text-xs ${
                  (data.action === "Create" &&
                    "bg-green-300 dark:bg-green-800") ||
                  (data.action === "Update" &&
                    "bg-amber-300 dark:bg-amber-800") ||
                  "bg-red-300 dark:bg-red-800"
                } rounded-2xl py-1.5 px-3`}
              >
                {data.action}
              </p>
            </div>
            <p className="text-sm text-gray-500 text-right">{data.time}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentActivity;
