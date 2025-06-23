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
      className="px-4 py-2 cursor-pointer bg-[#2563EB] hover:bg-[#1E4FDB] text-white rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
