import { React, useEffect } from "react";

function Notification({ isOpen, toggleNotification, children, title }) {
  if (!isOpen) {
    document.body.classList.remove("notif-open");
    return null;
  }
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("notif-open");
    }
    return () => {
      document.body.classList.remove("notif-open");
    };
  }, [isOpen]);
  return (
    <div className="bg-white text-black fixed top-0 right-0 z-50 m-4 rounded-xl shadow-lg md:w-1/2 lg:w-1/4">
      <button className="fixed top-5 right-5  p-2" onClick={toggleNotification}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 md:h-10 md:w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div className="text-left p-4 w-full h-full md:mx-auto">
        <h3 className=" font-title text-xl">{title}</h3>
        {children}
      </div>
    </div>
  );
}
export default Notification;
