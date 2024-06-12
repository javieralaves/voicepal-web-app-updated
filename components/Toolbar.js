"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Copy } from "@phosphor-icons/react";

const Toolbar = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between py-4 px-5">
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft size={24} color="#79858C" />
        </button>
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <ArrowRight size={24} color="#79858C" />
        </button>
      </div>
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <Copy size={24} color="#79858C" />
      </button>
    </div>
  );
};

export default Toolbar;
