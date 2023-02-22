import React from "react";
import Input from "../Form/Input";

function PaymentInfo({ formData, setFormData }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <label for="subscription-select" className="block text-left mt-4">
        Choose a subscription:
      </label>

      <select
        name="subscriptions"
        id="subscription-select"
        className="text-left my-4"
        onChange={(e) => {
          setFormData({ ...formData, subscriptions: e.target.value });
        }}
      >
        <option value="">Please choose an option </option>
        <option value="basic">basic - 7,99€/mois</option>
        <option value="family">family - 11,99€/mois</option>
        <option value="generous">generous - 15,99€/mois</option>
      </select>
      <Input
        type="text"
        name="cardOwner"
        label={"Card's owner"}
        value={formData.cardOwner}
        onChange={handleInputChange}
      />

      <p>Type of payment</p>
      <div className="flex flex-col justify-center items-start p-2 md:flex-row">
        <div className="p-2">
          <input
            type="radio"
            id="credit"
            name="cardType"
            value="credit"
            onChange={(e) => {
              setFormData({ ...formData, cardType: e.target.value });
            }}
          />
          <label htmlFor="credit" className="p-2">
            Credit Card
          </label>
        </div>
        <div className="p-2">
          <input
            type="radio"
            id="debit"
            name="cardType"
            value="debit"
            onChange={(e) => {
              setFormData({ ...formData, cardType: e.target.value });
            }}
          />
          <label htmlFor="debit" className="p-2">
            Debit Card
          </label>
        </div>
        <div className="p-2">
          <input
            type="radio"
            id="payPal"
            name="cardType"
            value="paypal"
            onChange={(e) => {
              setFormData({ ...formData, cardType: e.target.value });
            }}
          />
          <label htmlFor="payPal" className="p-2">
            Paypal
          </label>
        </div>
      </div>
      <Input
        type="number"
        name="cardNumber"
        label={"Card's number"}
        value={formData.cardNumber}
        onChange={handleInputChange}
      />
    </>
  );
}

export default PaymentInfo;
