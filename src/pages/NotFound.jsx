import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveback = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="sm:max-w-sm flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            The page is not found!
          </h1>
          <button onClick={moveback} className="flex items-center gap-x-2">
            <HiArrowLeft className="w-6 h-6 text-primary-900" />
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
