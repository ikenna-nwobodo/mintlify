import React from "react";

function Tab({ id, title, icon, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex gap-1 md:gap-2 items-center cursor-pointer px-4 py-1 rounded-lg ${
        activeTab === id ? "active" : ""
      }`}
    >
      <span class="material-symbols-rounded text-lg">{icon}</span>
      <p
        className={`text-secondaryx text-xs md:text-sm hover:text-primary ${
          activeTab === id ? "active-text" : ""
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default Tab;
