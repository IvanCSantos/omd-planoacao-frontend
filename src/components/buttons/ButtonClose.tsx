import React, { type ReactNode } from "react";

interface ButtonProps {
  label: string;
  endIcon?: ReactNode;
  onClick: () => void;
}

export const ButtonClose = ({ label, endIcon, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-white text-blue-500 border-1 border-blue-500 px-4 py-2 text-sm flex flex-row gap-1 items-center rounded-md cursor-pointer"
      onClick={onClick}
    >
      {label} {endIcon}
    </button>
  );
};
