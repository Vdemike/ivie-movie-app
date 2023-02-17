import cinema from "../../assets/cinema.jpg";
import React from "react";

function ProfilePic(props) {
  return (
    <section className="flex justify-center items-center m-4 ">
      <img
        className="w-[100px] h-[100px] rounded-full"
        src={props.profilePicture}
        alt="profile picture"
        onClick={() => {
          props.handlePictureClick(cinema);
        }}
      />
    </section>
  );
}

ProfilePic.defaultProps = {
  profilePicture: cinema,
};

export default ProfilePic;
