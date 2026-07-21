import React from "react";

function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">Are you sure to delete ${}</h2>
      <div className="flex justify-between items-center gap-x-16"></div>
      <button
        className="btn btn-primary flex-1"
        onClick={onClose}
        disabled={disabled}
      >
        Cancel
      </button>
      <button
        className="btn btn-danger flex-1 py-3"
        onClick={onConfirm}
        disabled={disabled}
      >
        Verify
      </button>
    </div>
  );
}

export default ConfirmDelete;
