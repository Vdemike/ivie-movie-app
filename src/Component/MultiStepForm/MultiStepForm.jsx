import React, { useState, useEffect } from "react";
import SignUpInfo from "./SignUpInfo";
import Button from "../Button/Button";
import Success from "./Success";
import PaymentInfo from "./PaymentInfo";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import logoblack from "../../assets/logoblack.svg";
import DataService from "../../services/services";
import Password from "./Password";
import Notification from "../Notification/Notification";

function MultiStepForm() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const toggleNotification = () => {
    setIsNotificationVisible(
      (prevIsNotificationVisible) => !prevIsNotificationVisible
    );
  };
  const [isNotificationVisible2, setIsNotificationVisible2] = useState(false);

  const toggleNotification2 = () => {
    setIsNotificationVisible2(
      (prevIsNotificationVisible2) => !prevIsNotificationVisible2
    );
  };
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    pseudo: "",
    birthDate: "",
    subscriptions: "",
    cardOwner: "",
    cardType: "",
    cardNumber: "",
    generalConditions: false,
    dataUse: false,
    picture: "../../assets/avatar1.svg",
  });
  const [submitted, setsubmitted] = useState(false);

  const FormTitles = [
    "Sign up",
    "Private info",
    "General terms of sale",
    "Payment details",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Password formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PrivacyPolicy formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <PaymentInfo formData={formData} setFormData={setFormData} />;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      pseudo,
      birthDate,
      subscriptions,
      cardOwner,
      cardType,
      cardNumber,
      picture,
    } = formData;
    if (
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword === password &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      pseudo.length > 0 &&
      birthDate.length > 0 &&
      subscriptions.length > 0 &&
      cardOwner.length > 0 &&
      cardType.length > 0 &&
      cardNumber.length > 0
    ) {
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
          firstName,
          lastName,
          pseudo,
          birthDate,
          subscriptions,
          cardOwner,
          cardType,
          cardNumber,
          picture,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          setsubmitted(true);
        })
        .catch((error) => {
          console.error(error);
          alert(
            "An error occurred while submitting the form. Please try again later."
          );
        });
    } else {
      if (page === 3) {
        setIsNotificationVisible(true);
      }
    }
  };

  return (
    <section>
      {submitted ? (
        <Success />
      ) : (
        <div className="bg-amber-50 m-auto rounded-xl w-full p-4 h-full">
          <img src={logoblack} alt="ivie logo" className="w-1/4 mx-auto my-2" />
          <div className="w-full text-center">
            {page === 0 ? "1/4" : page == 1 ? "2/4" : page == 2 ? "3/4" : "4/4"}
          </div>
          <form onSubmit={handleSubmit} method="POST">
            <div className="text-center">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div>{PageDisplay()}</div>
            <div className="flex justify-center">
              <Button
                disabled={page === 0 ? true : false}
                value={"Prev"}
                clickHandler={() => {
                  setPage((currPage) => currPage - 1);
                }}
              />
              <Button
                value={page === 3 ? "Submit" : "Next"}
                type={page === 3 ? "submit" : "button"}
                clickHandler={() => {
                  if (page === 3) {
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              />
            </div>
          </form>
        </div>
      )}
      <Notification
        title="Error"
        isOpen={isNotificationVisible}
        toggleNotification={toggleNotification}
      >
        <p>You must correctly fill all the fields.</p>
      </Notification>
      <Notification
        title="Error"
        isOpen={isNotificationVisible2}
        toggleNotification={toggleNotification2}
      >
        <p>
          An error occurred while submitting the form. Please try again later.
        </p>
      </Notification>
    </section>
  );
}

export default MultiStepForm;
