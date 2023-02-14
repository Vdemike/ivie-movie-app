import React from "react";
import Input from "../Form/input";
import { useState } from "react";

function SignUpForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    // Assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value,
    };

    console.log("Form changed: ", updatedForm);

    // Update state
    setForm(updatedForm);
  };

  return (
    <form className="flex justify-center items-center flex-col">
      <Input
        label="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={handleFormChange}
      />
      <Input
        label="Email Address"
        type="email"
        name="emailAddress"
        value={form.emailAddress}
        onChange={handleFormChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleFormChange}
      />
    </form>
  );
}
export default SignUpForm;
