import React from "react";

interface InputProps {
  id?: string;
  name: string;
  label?: string;
  value: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputTextArea = ({
  id,
  name,
  label,
  value,
  required,
  onChange,
}: InputProps) => {
  return (
    <div className="py-2 flex flex-col">
      <label htmlFor={name} className="text-md font-light text-[#111827]">
        {label ? label : name.toUpperCase()}
      </label>
      <textarea
        className="border-2 rounded-md border-[#E5E7EB] px-2 py-1 text-[#111827] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-32 overflow-auto"
        id={id || name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
