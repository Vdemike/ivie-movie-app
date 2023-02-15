import React from "react";
import Button from "../Button/Button";

function Success({ formData, setFormData }) {
  return (
    <div className="text-center">
      <h1>The form has been submitted !</h1>
      <Button
        value="Discover Our Catalog"
        clickHandler={() => {
          window.location.href = "/";
        }}
      />
    </div>
  );
}

export default Success;
