import React from "react";
import DropdownUtilityItem from "./dropdown-utility-item";
import { ChevronDown } from "lucide-react";

const DropdownUtility = ({ placeholder, items }) => {
  return (
    <div className="dropdown w-full bg-[#ffffff] relative">
      <div
        tabIndex={0}
        role="button"
        className="p-2 border border-gray-400 rounded-md cursor-pointer flex items-center justify-between"
      >
        {placeholder}
        <ChevronDown className="w-4 h-4 text-gray-600 ml-2" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-[#ffffff] border-2 border-gray-200 z-10 w-full p-2 shadow-md absolute top-full left-0 mt-2"
      >
        {items.map((item, index) => (
          <DropdownUtilityItem key={index} label={item.label} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownUtility;
