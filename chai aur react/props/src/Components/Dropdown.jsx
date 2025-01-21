import React, { useState } from "react";

const Dropdown = ({ label, placeholder, onChange, list, disabled, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container relative">
      {label && <label className="dropdown-label">{label}</label>}
      <div
        className="w-[22rem] h-[2.31rem] border-2 border-solid border-[#303486] cursor-pointer"
        onClick={handleToggle}
      >
        {value || placeholder}
      </div>
      {isOpen && (
        <div className="absolute w-[22rem] border-2 border-solid border-[#303486] bg-white z-10">
          {" "}
          {/* Overall border for the list */}
          {list.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200" // Removed individual item border
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
