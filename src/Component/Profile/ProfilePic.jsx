import avatar1 from "../../assets/avatar1.svg";
import React from "react";

function ProfilePic(props) {
  return (
    <section className={props.class1}>
      <img
        className={props.class2}
        src={props.profilePicture}
        alt="profile picture"
        onClick={() => {
          props.handlePictureClick(avatar1);
        }}
        id="profile-pic"
      />
    </section>
  );
}

ProfilePic.defaultProps = {
  profilePicture: localStorage.getItem("pic")
    ? localStorage.getItem("pic")
    : avatar1,
  class1: "flex justify-center items-center m-4 pt-6",
  class2: "w-[100px] h-[100px] rounded-full",
};

export default ProfilePic;
