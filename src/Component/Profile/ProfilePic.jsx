import avatar1 from "../../assets/avatar1.svg";
import React from "react";

function ProfilePic(props) {
  return (
    <section className="flex justify-center items-center m-4 ">
      <img
        className="w-[100px] h-[100px] rounded-full"
        src={props.profilePicture}
        alt="profile picture"
        onClick={() => {
          props.handlePictureClick(avatar1);
        }}
      />
    </section>
  );
}

ProfilePic.defaultProps = {
  profilePicture: avatar1,
};

export default ProfilePic;
