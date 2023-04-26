import { useState } from "react";

export const Tabs = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={className}>
      <ul className="flex items-center border-b-2 mb-4">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`px-4 py-2 text-sm font-medium cursor-pointer ${
              index === activeTab
                ? "text-indigo-600 border-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
