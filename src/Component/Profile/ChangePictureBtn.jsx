import Button from "../Button/Button";
import cinema from "../../assets/cinema.jpg";
import logo from "../../assets/logo.svg";
import React, { useState } from "react";
//Il faudras change la profile picture dans la db
function ChangePictureBtn(props) {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  const handlePictureClick = (picture) => {
    props.setProfilePicture(picture);
    setShowDiv(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <Button clickHandler={handleButtonClick} value="Change Picture" />
      </div>
      {showDiv && (
        <div className="bg-gray-200 rounded p-4 m-4 flex justify-center md:w-1/2 md:m-auto">
          <button
            className="fixed right-6 md:right-[27%]"
            onClick={() => {
              setShowDiv(false);
            }}
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
          <img
            src={logo}
            className="w-[100px] h-[100px] rounded-full"
            onClick={() => {
              handlePictureClick(logo);
            }}
          />
          <img
            src={cinema}
            className="w-[100px] h-[100px] rounded-full"
            onClick={() => {
              handlePictureClick(cinema);
            }}
          />
        </div>
      )}
    </>
  );
}

export default ChangePictureBtn;
