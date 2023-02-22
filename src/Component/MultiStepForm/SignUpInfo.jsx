import React, { Component, useState } from "react";
import Input from "../Form/Input";

function SignUpInfo({ formData, setFormData }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {

      console.log(firstName, lastName, pseudo, birthDate);
      fetch("http://localhost:3000/api/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          firstName,
          pseudo,
          lastName,
          birthDate,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    
  };
  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default SignUpInfo;
