import React from "react";
import { Outlet } from "react-router-dom";

function AppLauout() {
  return (
    <div className="grid h-screen grid-rows-[auto-1fr] grid-cols-[15rem_1fr]">
      <div className="bg-red-100 col-span-2">app header</div>
      <div className="bg-red-200">app sidebar</div>
      <div className="bg-red-300">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLauout;
