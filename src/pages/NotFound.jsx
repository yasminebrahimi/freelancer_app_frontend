import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="sm:max-w-sm flex justify-center pt-10">
      <div>
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          The page is not found!
        </h1>
        <button onClick={handleBack} className="flex items-center gap-x-2">
          <HiArrowLeft className="w-6 h-6 text-primary-900" />
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
