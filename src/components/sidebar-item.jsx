import React from "react";

const SidebarItem = ({ Icon, label }) => {
  return (
    <li className="w-full p-2 flex items-center mt-4">
      {Icon && <Icon className="w-5 h-5 mr-3 text-[#f8f8f8]" />}
      <span className="text-sm text-[#f8f8f8] truncate">{label}</span>
    </li>
  );
};

export default SidebarItem;
