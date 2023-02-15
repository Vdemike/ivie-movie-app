import React from "react";
import Dropdown from "../Dropdown/Dropdown";

function PrivacyPolicy({ formData, setFormData }) {
  return (
    <div className="p-4">
      <Dropdown
        title="Privacy policy"
        text="Acceptance of Terms: Explain that by using the iVie website or app, users agree to the terms and conditions, and that the agreement constitutes a binding contract between the user and the company.

              User Conduct: Outline the prohibited uses of the service, including but not limited to copyright infringement, hacking, harassment, and fraud.

              Payment and Billing: Explain the fees and billing policies for the service, including any free trial periods and automatic renewals. Include information on how users can cancel their subscription and obtain refunds.

              Content Licensing and Intellectual Property: Explain that the content provided on iVie is licensed, and not owned by the user. Include information on how the content may be used, and any restrictions on copying or sharing content.Disclaimers: Explain that the iVie service is provided 'as is' and that the company makes no guarantees as to the quality or availability of the service. Include any disclaimers or limitations of liability that are required by law.

              Privacy and Data Use: Explain how user data is collected, used, and shared by iVie. Include information on how users can access, update, or delete their data.

              Governing Law and Dispute Resolution: Explain which jurisdiction's laws govern the agreement, and how disputes will be resolved between users and iVie."
      />
      <Dropdown
        title="Data use policy"
        text="Data Collection: We may collect certain personal information from users, including but not limited to their name, email address, and payment information. We may also collect non-personal information such as device type, IP address, and browsing history.
              Data Use: We use this information to provide our services to users, including but not limited to processing payments, recommending content, and personalizing the user experience. We may also use this information for research and analytics purposes.
              Data Sharing: We do not sell or rent user data to third parties. We may share user data with our trusted partners and service providers to help us provide our services. We may also share user data in response to a legal request or to protect our rights or the rights of others.
              Data Storage: User data is stored on secure servers and is protected using industry-standard encryption and security protocols."
      />
      <div>
        <input
          id="generalConditions"
          type="checkbox"
          value={formData.generalConditions}
          onChange={(e) => {
            setFormData({ ...formData, generalConditions: e.target.checked });
          }}
        />
        <label htmlFor="generalConditions">
          {" "}
          I agree to the general conditions
        </label>
      </div>
      <div>
        <input
          id="dataUse"
          type="checkbox"
          value={formData.dataUse}
          onChange={(e) => {
            setFormData({ ...formData, dataUse: e.target.checked });
          }}
        />
        <label htmlFor="dataUse"> I agree to the data policy</label>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
