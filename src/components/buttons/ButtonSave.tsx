import React from "react";

export const ButtonSave = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
