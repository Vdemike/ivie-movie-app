import React from "react";
import Button from "../Button/Button";
import RedirectButton from "../Button/RedirectButton";

function Success({ formData, setFormData }) {
  return (
    <div className="text-center">
      <h1 className="m-4">The form has been submitted !</h1>
      <div className="p-4">
        <RedirectButton name="Discover Our Catalog !" redirect="/" />
      </div>
    </div>
  );
}

export default Success;
