import React from "react";

export const ButtonCancel = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="px-4 py-2 cursor-pointer bg-white hover:bg-[#F2F2F2] border-1 border-gray-400 text-black rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
