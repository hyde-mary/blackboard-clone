import React from "react";

const SidebarItem = ({ Icon, label }) => {
  return (
    <li className="w-full p-2 flex items-center mt-4">
      {Icon && <Icon className="w-6 h-6 ml-2 mr-3 text-[#f8f8f8]" />}
      <span className="text-md text-[#f8f8f8] truncate">{label}</span>
    </li>
  );
};

export default SidebarItem;
