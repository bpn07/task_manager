"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  return (
    <div className="fixed flex flex-col justify-between h-full shadow-xl transition-all duration-300 z-40 overflow-y-auto bg-white">
      <div className="flex h-full w-full flex-col justify-start">
        {/* Sidebar Logo */}
        {/* <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3">
          <p className="text-xl font-bold tesxt-gray-800">TaskBP</p>
        </div> */}

        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 mt-3">
          <p className="text-xl font-bold tracking-wide text-gray-600">TaskBP</p>
        </div>
        {/* Navlinks */}
        
      </div>
    </div>
  );
};

export default Sidebar;
