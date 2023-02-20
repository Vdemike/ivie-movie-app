import React, { useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="container">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-start justify-between w-[200px] xs:w-[300px] p-2 font-medium text-left text-gray-500 rounded-t-xl"
          onClick={toggleDropdown}
        >
          <span>{props.title}</span>
          <svg
            data-accordion-icon
            className="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div
          id="accordion-collapse-body-1"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-2 w-[200px] xs:w-[300px]">
            <p className="mb-2 p-2 h-40 overflow-y-scroll scrollbar-hide">
              {props.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
