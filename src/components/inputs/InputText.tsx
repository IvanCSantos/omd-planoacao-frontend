import React from "react";

interface InputProps {
  id?: string;
  name: string;
  label?: string;
  value: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
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
      <input
        type="text"
        className="border-2 rounded-md border-[#E5E7EB] px-2 py-1 text-[#111827]"
        id={id || name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
