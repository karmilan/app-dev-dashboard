import Link from "next/link";
import { LuUser } from "react-icons/lu";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: LuUser },
    { name: "Overview", href: "/settings", icon: LuUser },
    { name: "Training", href: "/profile", icon: LuUser },
    { name: "Phishing", href: "/profile", icon: LuUser },
  ];
  return (
    <div className="flex flex-col w-50 border-r border-gray-300">
      <div className="flex items-center p-5 ">
        <h1 className="font-semibold text-md">Dashboard</h1>
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
