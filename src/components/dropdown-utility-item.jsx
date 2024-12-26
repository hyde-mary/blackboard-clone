import React from "react";

const DropdownUtilityItem = ({ label, isActive = false, onClick }) => {
  return (
    <li
      className={`text-md pt-2 pl-2 pb-2 
    ${
      isActive
        ? "bg-[#262626] text-[#ffffff]"
        : "hover:bg-gray-200 text-gray-700"
    } transition`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default DropdownUtilityItem;
