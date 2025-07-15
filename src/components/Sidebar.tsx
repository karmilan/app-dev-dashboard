import Link from "next/link";
import {
  LuChartBar,
  LuSettings,
  LuTrendingUp,
  LuUser,
  LuUsers,
  LuX,
} from "react-icons/lu";

const Sidebar = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => {
  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: LuUser },
    { name: "Analytics", href: "/settings", icon: LuChartBar },
    { name: "Users", href: "/profile", icon: LuUsers },
    { name: "Performance", href: "/profile", icon: LuTrendingUp },
    { name: "Settings", href: "/profile", icon: LuSettings },
  ];
  console.log("menu open", menuOpen);
  return (
    <div
      className={` ${
        menuOpen ? "flex" : "hidden"
      } md:flex flex-col md:w-50 border-r border-gray-300`}
    >
      <div className="flex items-center justify-between p-5 ">
        <h1 className="font-semibold text-md">Dashboard</h1>
        <button onClick={toggleMenu} className="md:hidden">
          <LuX />
        </button>
      </div>

      <nav className="flex flex-col justify-center p-4 space-y-3">
        {menu.map((item) => (
          <Link href={item.href} key={item.name} className="flex items-center">
            <item.icon className="mr-6 h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
