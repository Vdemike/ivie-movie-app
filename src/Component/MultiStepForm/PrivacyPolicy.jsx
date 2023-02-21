import React from "react";
import Dropdown from "../Dropdown/Dropdown";

function PrivacyPolicy({ formData, setFormData }) {
  return (
    <div className="p-4">
      <Dropdown
        title="Privacy policy"
        text={
          <div>
            {" "}
            <br />
            This privacy policy governs the manner in which iVie collects, uses,
            maintains, and discloses information collected from users (each, a
            "User") of the iVie website (the "Site"). This privacy policy
            applies to the Site and all products and services offered by iVie.
            <br />
            <br />
            <h4 className="text-lg font-title">
              Personal identification information
            </h4>
            <br /> We may collect personal identification information from Users
            in a variety of ways, including, but not limited to, when Users
            visit our site, register on the site, place an order, fill out a
            form, and in connection with other activities, services, features,
            or resources we make available on our Site. Users may be asked for,
            as appropriate, name, email address, mailing address, phone number,
            credit card information. Users may, however, visit our Site
            anonymously. We will collect personal identification information
            from Users only if they voluntarily submit such information to us.
            Users can always refuse to supply personal identification
            information, except that it may prevent them from engaging in
            certain Site-related activities.
            <br />
            <br />
            <h4 className="text-lg font-title">
              Non-personal identification information
            </h4>
            <br /> We may collect non-personal identification information about
            Users whenever they interact with our Site. Non-personal
            identification information may include the browser name, the type of
            computer, and technical information about Users' means of connection
            to our Site, such as the operating system and the Internet service
            providers utilized and other similar information. Web browser
            cookies Our Site may use "cookies" to enhance User experience.
            Users' web browsers place cookies on their hard drive for
            record-keeping purposes and sometimes to track information about
            them. Users may choose to set their web browser to refuse cookies or
            to alert them when cookies are being sent. If they do so, note that
            some parts of the Site may not function properly. <br />
            <br />
            <h4 className="text-lg font-title">
              How we use collected information
            </h4>
            <br /> iVie may collect and use Users' personal identification
            information for the following purposes:
            <br />
            <br />
            <ul className="list-disc">
              <li>
                To process payments: We may use the information Users provide
                about themselves when placing an order only to provide service
                to that order. We do not share this information with outside
                parties except to the extent necessary to provide the service.
              </li>
              <br />
              <li>
                To improve customer service: Information Users provide helps us
                respond to customer service requests and support needs more
                efficiently. To personalize user experience: We may use
                information in the aggregate to understand how our Users as a
                group use the services and resources provided on our Site.
              </li>
              <br />
              <li>
                To improve our Site: We may use feedback Users provide to
                improve our products and services.
              </li>
              <br />
              <li>
                To send periodic emails: We may use the email address to send
                User information and updates pertaining to their order. It may
                also be used to respond to their inquiries, questions, and/or
                other requests. If User decides to opt-in to our mailing list,
                they will receive emails that may include company news, updates,
                related product or service information, etc. If at any time the
                User would like to unsubscribe from receiving future emails, we
                include detailed unsubscribe instructions at the bottom of each
                email.
              </li>
            </ul>
            <br />
          </div>
        }
      />
      <Dropdown
        title="Data use policy"
        text={
          <>
            <h4 className="text-lg font-title">Data Collection:</h4>
            <br />
            <p>
              We may collect certain personal information from users, including
              but not limited to their name, email address, and payment
              information.
            </p>
            <p>
              We may also collect non-personal information such as device type,
              IP address, and browsing history.
            </p>
            <br />
            <h4 className="text-lg font-title">Data Use:</h4>
            <br />
            <p>
              We use this information to provide our services to users,
              including but not limited to processing payments, recommending
              content, and personalizing the user experience.
            </p>
            <p>
              We may also use this information for research and analytics
              purposes.
            </p>
            <br />
            <h4 className="text-lg font-title">Data Sharing: </h4>
            <br />
            <p>
              We do not sell or rent user data to third parties. We may share
              user data with our trusted partners and service providers to help
              us provide our services.
            </p>
            <p>
              We may also share user data in response to a legal request or to
              protect our rights or the rights of others.
            </p>
            <br />
            <h4 className="text-lg font-title">Data Storage:</h4>
            <br />
            <p>
              User data is stored on secure servers and is protected using
              industry-standard encryption and security protocols.
            </p>
          </>
        }
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
