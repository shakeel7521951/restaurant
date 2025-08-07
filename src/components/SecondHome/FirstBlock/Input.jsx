import React, { useRef, useState } from "react";
import Select from "../Svgs/Select";
import Search from "../Svgs/Search";
import { HiChevronDown } from "react-icons/hi";

const categories = [
  "BreakFast",
  "Burger",
  "Chinese",
  "Dinner",
  "FastFood",
  "Lunch",
  "Pasta",
  "Pizza",
  "Rice",
];

function Input() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const timeoutId = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) {
      timeoutId.current = setTimeout(() => setIsOpen(true), 200);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId.current);
    setIsOpen(false);
  };

  const handleClickToggle = () => {
    // Only allow toggle click on mobile
    if (window.innerWidth < 640) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleSelect = (value) => {
    setSelectedCategory(value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center w-full sm:w-[627px] h-auto sm:h-[55px] border border-black rounded-md gap-2 sm:gap-9 px-3 py-2 sm:py-3">
      
      {/* Custom Dropdown */}
      <div
        className="relative group w-8 sm:w-[180px] h-10 flex-shrink-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickToggle} // <-- click on mobile
      >
        <div className="flex items-center border border-none rounded px-2 h-full cursor-pointer bg-white">
          <Select className="w-4 h-4 opacity-50" />
          <span
            className={`ml-2 text-sm hidden sm:block ${
              selectedCategory ? "text-black" : "text-gray-400"
            }`}
          >
            {selectedCategory || "Select Category"}
          </span>
          <HiChevronDown className="text-gray-400 w-4 h-4 hidden sm:block ml-auto transition-transform duration-300 transform group-hover:-rotate-90" />
        </div>

        {/* Dropdown Options - shown on mobile (click) and desktop (hover) */}
        <ul
          className={`absolute left-0 mt-1 w-32 sm:w-full bg-white rounded shadow-md z-10 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {categories.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:text-[#E9004B] cursor-pointer text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider - only on desktop */}
      <span className="text-gray-300 select-none hidden sm:inline">|</span>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Type Your Products..."
        className="flex-1 h-10 bg-transparent outline-none placeholder:text-gray-400 text-sm"
      />

      {/* Button */}
      <button className="w-10 sm:w-auto bg-[#E9004B] text-white h-10 sm:h-11 px-0 sm:px-5 rounded-md sm:rounded-tr-[5px] sm:rounded-br-[5px] hover:bg-black duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
        <span className="sm:hidden">
          <Search className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline-flex items-center gap-2">
          <Search />
          Find Food
        </span>
      </button>
    </div>
  );
}

export default Input;
