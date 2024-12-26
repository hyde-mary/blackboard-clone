import { Search } from "lucide-react";
import React from "react";

const SearchUtility = ({ placeholder = "Search Your Courses" }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="bg-[#ffffff] p-2 pl-10 border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition rounded-sm"
      />
    </div>
  );
};

export default SearchUtility;
