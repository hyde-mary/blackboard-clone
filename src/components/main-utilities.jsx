import React, { useState } from "react";
import ToggleUtility from "./toggle-utility";
import SearchUtility from "./search-utility.jsx";
import DropdownUtility from "./dropdown-utility.jsx";

const MainUtilities = () => {
  const terms = [
    { label: "All Terms" },
    { label: "2T2425" },
    { label: "1T2425" },
    { label: "4Q2324" },
    { label: "3Q2324" },
    { label: "2Q2324" },
    { label: "1Q2324" },
    { label: "4Q2223" },
    { label: "3Q2223" },
    { label: "2Q2223" },
    { label: "1Q2223" },
  ];
  const courses = [
    { label: "All Courses" },
    { label: "Courses I am taking" },
    { label: "Open courses" },
    { label: "Completed courses" },
  ];
  const pages = [{ label: "25" }, { label: "50" }, { label: "100" }];

  return (
    <div className="flex items-center pl-8 w-full h-24 space-x-4 pr-8">
      <div className="flex-none">
        <ToggleUtility />
      </div>

      <div className="flex-1">
        <SearchUtility />
      </div>

      <div className="flex-1">
        <DropdownUtility
          title={"Terms"}
          placeholder={"All Terms"}
          items={terms}
        />
      </div>

      <div className="flex-1">
        <DropdownUtility
          title={"Filters"}
          placeholder={"All Courses"}
          items={courses}
        />
      </div>

      <div className="w-48 flex items-center justify-center">
        <div className="mr-2">
          <DropdownUtility placeholder={"25"} items={pages} />
        </div>
        <div>
          <p className="text-sm text-gray-800">Items per page</p>
        </div>
      </div>
    </div>
  );
};

export default MainUtilities;
