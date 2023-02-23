import React, { useState } from "react";
import Button from "../Button/Button";
import logoblack from "../../assets/logoblack.svg";
import Input from "../Form/input";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification"; // import the Notification component

function LoginForm() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const toggleNotification = () => {
    setIsNotificationVisible(
      (prevIsNotificationVisible) => !prevIsNotificationVisible
    );
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData.email);
    fetch("http://localhost:3000/signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: loginFormData.email,
        password: loginFormData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "user");
        if (!data.error) {
          setIsLoggedIn(true);
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/movies");
          window.location.reload(true);
        } else {
          setIsNotificationVisible(true);
          setErrorMessage(data.error);
        }
      });
  };

  return (
    <section className="p-4">
      <div className="bg-amber-50 rounded-xl w-full p-4 flex flex-col justify-center">
        <img src={logoblack} alt="ivie logo" className="w-1/4 mx-auto my-2" />
        <div className="form-container">
          <form onSubmit={handleSubmit}>
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
                type="submit"
                clickHandler={() => console.log(loginFormData)}
              />
            </div>
          </form>
        </div>
      </div>

      <Notification
        title="Error"
        isOpen={isNotificationVisible}
        toggleNotification={toggleNotification}
      >
        {errorMessage}
      </Notification>
    </section>
  );
}

export default LoginForm;
