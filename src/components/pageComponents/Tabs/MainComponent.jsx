import React, { useState } from "react";

const Tab = ({ title, icon: Icon, active, onClick }) => (
  <button
    className={`flex   items-center gap-2 px-4 py-4 border-b-2 transition-all mx-1 ${
      active
        ? "border-[#cd1f27] text-[#cd1f27] bg-[#E0DEDA]"
        : "border-transparent text-black hover:text-red-500 hover:border-[#cd1f27]"
    }`}
    onClick={onClick}
  >
    {/* {Icon && <Icon className="text-lg" />} */}
    <span>{title}</span>
  </button>
);

const Tabs = ({ tabs, activeTab, onTabChange }) => (
  <div>
    <div className="flex flex-col lg:flex-row md:flex-row justify-center  bg-[#EFEEEC] text-black border-spacing-2 border-gray-500 mb-4">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          active={activeTab === index}
          onClick={() => onTabChange(index)}
        />
      ))}
    </div>
    <div className="p-4  rounded bg-transparent text-black ">
      {tabs[activeTab]?.content}
    </div>
  </div>
);

const Capabilities = () => (
  <div className="px-4 sm:px-6 lg:px-32">
    <p>
      This is{" "}
      <span className="font-medium">Capabilities tab's associated content</span>.
    </p>
  </div>
);
const Excellence = () => (
  <div className="px-4 sm:px-6 lg:px-32">
  <p>
    This is{" "}
    <span className="font-medium">Excellence tab's associated content</span>.
  </p>
  </div>
);
const Manufacturing = () => (
  <div className="px-4 sm:px-6 lg:px-32">
  <p>
    This is{" "}
    <span className="font-medium">Manufacturing tab's associated content</span>.
  </p>
  </div>
);
const GlobalCustomer = () => (
  <div className="px-4 sm:px-6 lg:px-32">
  <p>
    This is{" "}
    <span className="font-medium">GlobalCustomer tab's associated content</span>.
  </p>
  </div>
);

export const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export function MainComponent() {
  const tabs = [
    {
      title: "R&D Capabilities",
      content: <Capabilities />,
    },
    {
      title: "Regulatory Excellence",
      content: <Excellence />,
    },
    {
      title: "World-class Manufacturing",
      content: <Manufacturing />,
    },
    {
      title: "Global Customer Base",
      content: <GlobalCustomer />,
    },
  ];

  return <CustomTabs tabs={tabs} />;
}
