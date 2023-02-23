import React from "react";
import { Link } from "react-router-dom";

function RedirectButtonNew(props) {
  const { linkTo, buttonText, className, spanClassName } = props;

  return (
    <Link to={linkTo}>
      <p className={`text-xl relative w-max three ${className}`}>
        <span className={`px-1`}>{buttonText}</span>
        <span
          className={`absolute left-0 -bottom-1 w-full h-1 transition-all   ${spanClassName}`}
        ></span>
      </p>
    </Link>
  );
}

export default RedirectButtonNew;
