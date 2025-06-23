import React, { type ReactNode } from "react";

interface ButtonProps {
  label: string;
  endIcon?: ReactNode;
  onClick: () => void;
}

export const ButtonNew = ({ label, endIcon, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-700 text-white mx-2 px-2 py-2 text-sm flex flex-row gap-1 items-center rounded-md cursor-pointer"
      onClick={onClick}
    >
      {label} {endIcon}
    </button>
  );
};
