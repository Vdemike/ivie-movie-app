import React, { useState } from "react";
import Button from "../Button/Button";
import logo from "../../assets/logo.svg";
import Input from "../Form/input";

function LoginForm() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="bg-amber-50 rounded-xl w-full p-2 md:w-1/3  flex flex-col justify-center">
      <img src={logo} alt="ivie logo" className="w-1/4 mx-auto my-2" />
      <div className="form-container">
        <Input
          type="text"
          name="email"
          label={"Email"}
          value={loginFormData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label={"Password"}
          value={loginFormData.password}
          onChange={handleInputChange}
        />
        <div className="flex justify-center">
          <Button
            value="Login"
            clickHandler={() => {
              console.log(loginFormData);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
