import React, { useState } from "react";
import ProfilePic from "../Component/Profile/ProfilePic";
import ChangePictureBtn from "../Component/Profile/ChangePictureBtn";
import cinema from "../assets/cinema.jpg";
import ProfileInfo from "../Component/Profile/ProfileInfo";
function UserProfile() {
  const [profilePicture, setProfilePicture] = useState(cinema);

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
