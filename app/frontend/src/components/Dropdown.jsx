import React, { useState } from "react";

export const Dropdown = ({ buttonContent, children, className }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        onClick={toggleVisible}
        className="bg-indigo-600 text-white text-base py-2 px-4 rounded"
      >
        {buttonContent}
      </button>
      {visible && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
