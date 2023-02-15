import React from "react";
import Input from "../Form/Input";

function SignUpInfo({ formData, setFormData }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="sign-up-container">
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
      {/* <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      /> */}
    </div>
  );
}

export default SignUpInfo;
