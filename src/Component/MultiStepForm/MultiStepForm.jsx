import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import Button from "../Button/Button";
import Success from "./Success";
import PaymentInfo from "./PaymentInfo";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import logoblack from "../../assets/logoblack.svg";

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
    cardOwner: "",
    cardType: "",
    cardNumber: "",
    generalConditions: false,
    dataUse: false,
  });

  const FormTitles = [
    "Sign up",
    "General terms of sale",
    "Payment details",
    "Succes",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PrivacyPolicy formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PaymentInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Success />;
    }
  };

  return (
    <div className="bg-amber-50 m-4 rounded-xl w-full p-4 md:w-1/3 ">
      <img
        src={logoblack}
        alt="ivie logo"
        className="w-1/4 flex justify-center mx-auto my-2"
      />
      <div className="w-full text-center">
        {page === 0 ? "1/4" : page == 1 ? "2/4" : page == 2 ? "3/4" : "4/4"}
      </div>
      <div className="form-container">
        <div className="text-center">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="flex justify-center">
          <Button
            hide={page === 3 ? true : false}
            disabled={page === 0 ? true : false}
            value={"Prev"}
            clickHandler={() => {
              setPage((currPage) => currPage - 1);
            }}
          />
          <Button
            value={page === FormTitles.length - 2 ? "Submit" : "Next"}
            hide={page === 3 ? true : false}
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
  );
}

export default MultiStepForm;
