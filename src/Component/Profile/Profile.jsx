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
      <main className="pb-10">
        <ProfileInfo
          title="My account"
          property="lastName"
          property1="firstName"
          property2="pseudo"
          property3="email"
          nameproperty="Last name"
          nameproperty1="First name"
          nameproperty2="Pseudo"
          nameproperty3="E-mail"
        />
        <ProfileInfo
          title="Payment"
          property="cardOwner"
          property1="cardNumber"
          property2="cardType"
          property3="subscriptions"
          nameproperty="Card owner"
          nameproperty1="Card number"
          nameproperty2="Card type"
          nameproperty3="Subscription"
        />
      </main>
    </>
  );
}

export default Profile;
