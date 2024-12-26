import React from "react";
import SidebarHeader from "./sidebar-header";
import SidebarItem from "./sidebar-item";
import {
  BookMinus,
  Calendar,
  Globe,
  Landmark,
  LibraryBig,
  LogOut,
  Mail,
  NotebookPen,
  SquarePen,
  UserRound,
  Users,
} from "lucide-react";

const Sidebar = () => {
  const items = [
    { icon: Landmark, label: "Institution Page" },
    { icon: UserRound, label: "ANDREI BENCH MALLARI" },
    { icon: Globe, label: "Activity" },
    { icon: BookMinus, label: "Courses" },
    { icon: Users, label: "Organizations" },
    { icon: Calendar, label: "Calendar" },
    { icon: Mail, label: "Messages" },
    { icon: NotebookPen, label: "Grades" },
    { icon: LibraryBig, label: "Catalog" },
    { icon: SquarePen, label: "Tools" },
    { icon: LogOut, label: "Sign Out" },
  ];

  return (
    <div className="bg-[#262626] w-56 h-screen flex flex-col justify-between">
      <SidebarHeader />

      {/* sidebar items */}
      <ul className="flex-1 flex-col mt-4 mb-4 overflow-y-auto">
        {items.map((item, index) => (
          <SidebarItem key={index} Icon={item.icon} label={item.label} />
        ))}
      </ul>
      <ul className="flex flex-col p-2">
        <li className="ml-2 cursor-pointer">Privacy</li>
        <li className="ml-2 cursor-pointer">Terms</li>
        <li className="ml-2 cursor-pointer">Accessibility</li>
      </ul>
    </div>
  );
};

export default Sidebar;
