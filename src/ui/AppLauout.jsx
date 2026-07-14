import React from "react";
import { Outlet } from "react-router-dom";

function AppLauout() {
  return (
    <div className="grid h-screen grid-rows-[auto-1fr] grid-cols-[15rem_1fr]">
      <div className="bg-secondary-0 py-4 px-8">app header</div>
      <div className="bg-secondary-0 row-start-1 row-span-2">app sidebar</div>
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md bg-red-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLauout;
