import Button from "../Button/Button";
import cinema from "../../assets/cinema.jpg";
import logo from "../../assets/logo.svg";
import avatar1 from "../../assets/avatar1.svg";
import avatar2 from "../../assets/avatar2.svg";
import avatar3 from "../../assets/avatar3.svg";
import avatar4 from "../../assets/avatar4.svg";
import avatar5 from "../../assets/avatar5.svg";
import avatar6 from "../../assets/avatar6.svg";
import avatar7 from "../../assets/avatar7.svg";
import avatar8 from "../../assets/avatar8.svg";
import avatar9 from "../../assets/avatar9.svg";
import avatar10 from "../../assets/avatar10.svg";
import React, { useState } from "react";

function ChangePictureBtn(props) {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  const handlePictureClick = (picture) => {
    props.setProfilePicture(picture);
    setShowDiv(false);

    // Make a request to your backend API to update the user's profile picture
    fetch('http://localhost:3000/profile-picture', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ picture })
    })

    .then(data => console.log(data))
    .catch(error => console.error(error))};

  return (
    <>
      <div className="flex justify-center m-4">
        <Button clickHandler={handleButtonClick} value="Change Picture" />
      </div>
      {showDiv && (
        <>
          <button
            className="absolute my-4 right-6 md:right-[27%]"
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
              className="w-8 h-8 md:h-10 md:w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="bg-gray-200 rounded-xl p-8 flex flex-wrap justify-center md:w-1/2 md:m-auto mb-4 md:mb-4">
            <img
              src={avatar1}
              className="w-[100px] h-[100px] m-2 rounded-full"
              onClick={() => {
                handlePictureClick(avatar1);
              }}
            />
            <img
              src={avatar2}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar2);
              }}
            />
            <img
              src={avatar3}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar3);
              }}
            />
            <img
              src={avatar4}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar4);
              }}
            />
            <img
              src={avatar5}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar5);
              }}
            />
            <img
              src={avatar6}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar6);
              }}
            />
            <img
              src={avatar7}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar7);
              }}
            />
            <img
              src={avatar8}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar8);
              }}
            />
            <img
              src={avatar9}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar9);
              }}
            />
            <img
              src={avatar10}
              className=" m-2 w-[100px] h-[100px] rounded-full"
              onClick={() => {
                handlePictureClick(avatar10);
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default ChangePictureBtn;
