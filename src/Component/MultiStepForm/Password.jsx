import React from "react";
import Input from "../Form/Input";

function Password({ formData, setFormData }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <>
      <Input
        type="text"
        name="email"
        label={"Email"}
        value={formData.email}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        label={"Password"}
        value={formData.password}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        label={"Confirm your password"}
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />
    </>
  );
}
export default Password;
