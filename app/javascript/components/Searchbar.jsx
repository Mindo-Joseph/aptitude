import React from "react";
export const SearchBar = ({ placeholder, onSearch, className }) => (
  <div className={`relative ${className}`}>
    <input
      type="search"
      placeholder={placeholder}
      className="text-base py-2 pl-10 pr-4 w-full border border-gray-300 rounded-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      onKeyPress={(event) =>
        event.key === "Enter" && onSearch(event.target.value)
      }
    />
    <span className="absolute left-0 top-0 mt-2 ml-3 text-gray-400">
      <i className="fas fa-search"></i>
    </span>
  </div>
);

export default SearchBar;
