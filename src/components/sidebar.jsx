import React from "react";
import SidebarHeader from "./sidebar-header";
import SidebarItem from "./sidebar-item";
import { UserRound } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-[#262626] w-48 h-screen">
      <SidebarHeader />

      {/* sidebar items */}
      <ul>
        <SidebarItem Icon={UserRound} label={"ANDREI BENCH MALLARI"} />
      </ul>
    </div>
  );
};

export default Sidebar;
