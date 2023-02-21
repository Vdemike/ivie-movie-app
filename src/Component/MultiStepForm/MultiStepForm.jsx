import React, { useState, useEffect } from "react";
import SignUpInfo from "./SignUpInfo";
import Button from "../Button/Button";
import Success from "./Success";
import PaymentInfo from "./PaymentInfo";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import logoblack from "../../assets/logoblack.svg";
import DataService from "../../services/services";
import axios from "axios";
import Password from "./Password";

function MultiStepForm() {
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
  });

  useEffect(() => {
    axios
      .get("/signUp")
      .then((response) => setFormData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const FormTitles = [
    "Sign up",
    "Private info",
    "General terms of sale",
    "Payment details",
    "Success",
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
    } else {
      return <Success />;
    }
  };

  return (
    <section>
      <div className="bg-amber-50 m-auto rounded-xl w-full p-4 h-full">
        <img src={logoblack} alt="ivie logo" className="w-1/4 mx-auto my-2" />
        <div className="w-full text-center">
          {page === 0
            ? "1/4"
            : page == 1
            ? "2/4"
            : page == 2
            ? "3/4"
            : page == 3
            ? "4/4"
            : ""}
        </div>
        <div className="container">
          <div className="text-center">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div>{PageDisplay()}</div>
          <div className="flex justify-center">
            <Button
              hide={page === 4 ? true : false}
              disabled={page === 0 ? true : false}
              value={"Prev"}
              clickHandler={() => {
                setPage((currPage) => currPage - 1);
              }}
            />
            <Button
              value={page === FormTitles.length - 2 ? "Submit" : "Next"}
              hide={page === 4 ? true : false}
              clickHandler={() => {
                if (page === FormTitles.length - 2) {
                  setPage((currPage) => currPage + 1);
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MultiStepForm;
