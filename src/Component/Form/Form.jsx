import { useState } from "react";

function Form(props) {
  const { children } = props;

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

  return <form className="Form">{children}</form>;
}

export default Form;
