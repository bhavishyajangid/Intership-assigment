import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  options = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ],
  required = false,
}) => {
  return (
    <div className="relative w-full">
      {type !== "radio" ? (
        // show text input
        <div className="relative">
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
            required={required}
          />
          <span className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
            {label} {required && <span className="text-red-500">*</span>}
          </span>
        </div>
      ) : (
        // show radio input
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>

          <div className="flex items-center gap-6 cursor-pointer">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value} // ✅ fully controlled
                  onChange={onChange}
                  className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500 cursor-pointer"
                  required={required}
                />
                <span className="text-gray-700 text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
