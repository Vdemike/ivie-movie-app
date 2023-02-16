import React from "react";

function Button(props) {
  return (
    <button
      id={props.id}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.disabled}
      hidden={props.hide}
      className="bg-purple-400 m-1 hover:bg-transparent text-white font-semibold hover:text-purple-400 py-2 px-6 border border-transparent hover:border-purple-400 rounded"
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
};

export default Button;
