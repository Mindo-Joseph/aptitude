import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ href, children }) => {
  return (
    <a
      href={href}
      className="flex items-center px-2 py-2 text-sm font-medium text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
    >
      {children}
    </a>
  );
};

export default SidebarItem;
