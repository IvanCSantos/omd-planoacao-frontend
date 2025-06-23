import React, { useState, type ReactNode } from "react";

export interface ButtonOptions {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
}

interface ButtonProps {
  label: string;
  endIcon?: ReactNode;
  buttons: ButtonOptions[];
}

export const ButtonMenu = ({ label, endIcon, buttons }: ButtonProps) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleOptionClick = (onClick: () => void) => {
    onClick();
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-blue-700 text-white mx-2 px-2 py-2 text-sm flex flex-row gap-1 items-center rounded-md cursor-pointer"
        onClick={toggleMenu}
      >
        {label} {endIcon}
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-32 bg-white rounded-md shadow-lg border right-0">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleOptionClick(btn.onClick)}
              className="w-full px-4 py-2 text-right text-sm hover:bg-gray-100 flex items-center justify-end gap-2 cursor-pointer"
            >
              {btn.label}
              {btn.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
