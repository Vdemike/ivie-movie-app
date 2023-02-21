import React from "react";

function Button(props) {
  return (
    <button
      id={props.id}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.disabled}
      hidden={props.hide}
      className={props.class}
    >
      {props.value}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  id: "btn",
  disabled: false,
  hide: false,
  class:
    "bg-[#9975B6] m-1 hover:bg-transparent text-[#F4E3D7] font-semibold hover:text-[#9975B6] py-2 px-6 border border-transparent hover:border-[#9975B6] rounded",
};

export default Button;
