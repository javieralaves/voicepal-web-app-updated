"use client";

import React, { useState } from "react";

const Sidebar = () => {
  return (
    <div className="self-stretch w-[332px] bg-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start border-r-[1px] border-solid border-whitesmoke">
      <div className="self-stretch flex flex-row items-center justify-between py-4 px-5">
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
          alt=""
          src="VoicepalLogo.png"
        />
        <div className="rounded-9980xl bg-offwhite h-8 overflow-hidden flex flex-row items-center justify-start py-1.5 px-3 box-border">
          <div className="relative tracking-[-0.04em] leading-[120%] font-semibold">
            Log out
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start p-4 gap-[16px]">
        <Tabs />
        <ListPages />
      </div>
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Early");

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
      <Tab
        label="Early"
        active={activeTab === "Early"}
        onClick={() => setActiveTab("Early")}
      />
      <Tab
        label="Elaborated"
        active={activeTab === "Elaborated"}
        onClick={() => setActiveTab("Elaborated")}
      />
      <Tab
        label="Drafts"
        active={activeTab === "Drafts"}
        onClick={() => setActiveTab("Drafts")}
      />
    </div>
  );
};

const Tab = ({ label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-1 rounded-9980xl bg-gray h-8 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 box-border cursor-pointer ${
        active ? "" : "opacity-[0.5]"
      }`}
    >
      <div className="relative tracking-[-0.04em] leading-[120%] font-semibold">
        {label}
      </div>
    </div>
  );
};

const ListPages = () => {
  const [activeItem, setActiveItem] = useState(
    "Benefits of gradual product development"
  );

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left">
      <ListItem
        icon="EarlyThoughtIcon.svg"
        label="Benefits of gradual product development"
        active={activeItem === "Benefits of gradual product development"}
        onClick={() => setActiveItem("Benefits of gradual product development")}
      />
      <ListItem
        icon="EarlyThoughtIcon.svg"
        label="The role of intuition in product development"
        active={activeItem === "The role of intuition in product development"}
        onClick={() =>
          setActiveItem("The role of intuition in product development")
        }
      />
    </div>
  );
};

const ListItem = ({ icon, label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start p-2 gap-[8px] cursor-pointer ${
        active ? "bg-offwhite" : "bg-white"
      }`}
    >
      <img className="w-6 relative rounded-md h-6" alt="" src={icon} />
      <div className="flex-1 relative tracking-[-0.04em] leading-[120%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

export default Sidebar;
