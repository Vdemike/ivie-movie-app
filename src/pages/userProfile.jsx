import React, { useState } from "react";
import ProfilePic from "../Component/Profile/ProfilePic";
import ChangePictureBtn from "../Component/Profile/ChangePictureBtn";
import avatar1 from "../assets/avatar1.svg";
import ProfileInfo from "../Component/Profile/ProfileInfo";
function UserProfile() {
  const [profilePicture, setProfilePicture] = useState(avatar1);

  return (
    <>
      <ProfilePic
        profilePicture={profilePicture}
        handlePictureClick={setProfilePicture}
      />
      <ChangePictureBtn setProfilePicture={setProfilePicture} />
      <ProfileInfo title="My account" />
      <ProfileInfo title="Payment" />
    </>
  );
}

export default UserProfile;
