import React, { useState } from "react";
import ProfilePic from "../Profile/ProfilePic";
import ChangePictureBtn from "../Profile/ChangePictureBtn";
import avatar1 from "../../assets/avatar1.svg";
import ProfileInfo from "../Profile/ProfileInfo";
function Profile() {
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

export default Profile;
