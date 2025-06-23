import React, { useState, useEffect, useRef, type ReactNode } from "react";

export interface ButtonOptions {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
}

interface ButtonProps<T> {
  label: string;
  endIcon?: ReactNode;
  item: T;
  buttons: (item: T) => ButtonOptions[];
}

export const ButtonMenu = <T,>({
  label,
  endIcon,
  item,
  buttons,
}: ButtonProps<T>) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleOptionClick = (onClick: () => void) => {
    onClick();
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        className="bg-blue-700 text-white mx-2 px-2 py-2 text-sm flex flex-row gap-1 items-center rounded-md cursor-pointer"
        onClick={toggleMenu}
      >
        {label} {endIcon}
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-32 bg-white rounded-md shadow-lg border right-0">
          {buttons(item).map((btn) => (
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
