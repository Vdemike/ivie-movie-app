import React from "react";
import Input from "../Form/Input";

function SignUpInfo({ formData, setFormData }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="sign-up-container">
      <Input
        type="text"
        name="firstName"
        label={"Name"}
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="lastName"
        label={"Last name"}
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="pseudo"
        label={"Pseudo"}
        value={formData.pseudo}
        onChange={handleInputChange}
      />
      <Input
        type="date"
        name="birthDate"
        label={"Date of birth"}
        value={formData.birthDate}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SignUpInfo;
