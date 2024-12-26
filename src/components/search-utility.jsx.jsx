import React from "react";

const SearchUtility = ({ placeholder = "Search Your Courses" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[#ffffff] p-2 border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition rounded-sm"
    />
  );
};

export default SearchUtility;
