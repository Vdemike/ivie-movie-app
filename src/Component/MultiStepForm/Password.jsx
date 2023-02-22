import React from "react";
import Input from "../Form/Input";

function Password({ formData, setFormData }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {

    console.log(email, password, confirmPassword);
    fetch("http://localhost:3000/api/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
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
    <>
    <form onSubmit={handleSubmit} method="POST">
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
      </form>
    </>
  );}

  
export default Password;
