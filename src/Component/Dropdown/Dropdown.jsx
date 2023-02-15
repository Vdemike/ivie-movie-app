import React, { useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-left p-2">
      <button
        type="button"
        className="text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
      >
        {props.title}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="z-20 origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdownDefaultButton"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <p className="h-32 overflow-y-scroll block px-4 py-2 text-sm">
              {props.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
