import { Grid, List } from "lucide-react";
import React, { useState } from "react";

const ToggleUtility = () => {
  const [activeToggle, setActiveToggle] = useState("grid");

  const handleToggle = (toggleType) => {
    setActiveToggle(toggleType);
  };

  return (
    <div className="flex">
      <div
        className={`flex items-center justify-center w-8 h-8 ${
          activeToggle === "list"
            ? "bg-[#262626] text-[#ffffff]"
            : "bg-[#ffffff] text-[#262626]"
        } cursor-pointer border rounded-sm`}
        onClick={() => handleToggle("list")}
      >
        <List className="w-4 h-4" />
      </div>

      <div
        className={`flex items-center justify-center w-8 h-8 ${
          activeToggle === "grid"
            ? "bg-[#262626] text-[#ffffff]"
            : "bg-[#ffffff] text-[#262626]"
        } cursor-pointer border rounded-sm`}
        onClick={() => handleToggle("grid")}
      >
        <Grid className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ToggleUtility;
