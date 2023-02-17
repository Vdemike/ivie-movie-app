import { React, useEffect } from "react";

function Modal({ isOpen, toggleModal, children, title }) {
  if (!isOpen) {
    document.body.classList.remove("modal-open");
    return null;
  }
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  return (
    <div className="bg-gray-800 fixed top-0 left-0 right-0 z-50 p-8 m-4 rounded-xl shadow-lg scrollbar-hide overflow-x-hidden md:inset-0 h-full overflow-y-scroll md:w-3/4 lg:w-1/2 md:m-auto md:h-3/4 max-h-[95%]">
      <button
        className="fixed top-5 right-5  md:top-[15%] md:right-[15%] lg:right-[28%] p-2"
        onClick={toggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:h-10 md:w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div className="text-left relative m-auto w-full h-full max-w-md md:mx-auto">
        <h3 className="py-2 font-title text-xl">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default Modal;
