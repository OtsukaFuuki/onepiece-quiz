import React from "react";

interface DropdownListProps {
  label: string;
  options: Array<string | number>;
  value: string | number;
  onChange: (value: string | number) => void;
}

const DropdownList: React.FC<DropdownListProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block mb-2 font-semibold">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option === "all" ? "全て" : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
