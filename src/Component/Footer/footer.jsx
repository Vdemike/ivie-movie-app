import { React, useState } from "react";
import logo from "../../assets/logo.svg";
import Modal from "../Modal/Modal";

function Footer() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const toggleModal2 = () => {
    setIsModal2Visible((prevIsModal2Visible) => !prevIsModal2Visible);
  };
  const [isModal3Visible, setIsModal3Visible] = useState(false);

  const toggleModal3 = () => {
    setIsModal3Visible((prevIsModal3Visible) => !prevIsModal3Visible);
  };
  return (
    <div className="main-footer mr-0 bg-black w-full text-white">
      <div className="w-full py-8">
        <div className="grid grid-cols-1 mr-0 sm:grid-cols-3 gap-8 text-center">
          {/* Column1 */}
          <div>
            <h4> </h4>
            <ul className="list-none text-sm">
              <li className="pb-2" onClick={toggleModal}>
                Legal mention
              </li>
              <li className="pb-2" onClick={toggleModal2}>
                Privacy Policy
              </li>
              <li className="pb-2" onClick={toggleModal3}>
                Terms of Use
              </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="text-center">
            <h4>
              <img
                src={logo}
                className="inline h-6  pb-3 sm:h-9"
                alt="ivie Logo"
              />
            </h4>
            <ul className=" list-none text-sm">
              <li className="pb-2">Discovering new worlds</li>
              <li className="inline pb-2 place-content-center">
                <div className="flex flex-cols-4 gap-4 place-content-center">
                  <div>
                    <svg
                      class="w-5 h-5 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>

                  <div>
                    <svg
                      class="h-6 w-6 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      class="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      class="w-5 h-5 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div>
            <h4> </h4>
            <ul className="list-none text-sm">
              <li className="pb-2">Press</li>
              <li className="pb-2">Jobs</li>
              <li className="pb-2">Contact</li>
            </ul>
          </div>
        </div>
        <Modal
          isOpen={isModalVisible}
          toggleModal={toggleModal}
          title="Legal terms"
        >
          <br />
          Welcome to iVie, an online streaming platform located in Brussels,
          Belgium.
          <br />
          <br />
          Please read these terms and conditions carefully before using our
          services. By accessing or using our services, you agree to be bound by
          the following terms and conditions. <br />
          <br />
          Intellectual Property: All content available on iVie, including but
          not limited to, text, graphics, logos, images, audio, and video clips,
          are the property of iVie or its affiliates and are protected by
          applicable intellectual property laws. <br />
          <br />
          You may not use, copy, reproduce, modify, distribute, or display any
          of the content without the prior written consent of iVie. <br />
          <br /> User Conduct: You agree to use our services for lawful purposes
          and in a manner that does not infringe the rights of any third party.
          You may not upload or distribute any content that is defamatory,
          obscene, or otherwise objectionable. You may not use our services to
          transmit any viruses, worms, or other harmful software. <br />
          <br />
          Disclaimer of Warranties: Our services are provided on an "as is" and
          "as available" basis without any warranty of any kind, either express
          or implied. iVie does not warrant that our services will be
          uninterrupted or error-free. We do not make any representations or
          warranties as to the accuracy, reliability, or completeness of any
          content available on iVie. <br />
          <br />
          Limitation of Liability: iVie will not be liable for any damages
          arising out of or in connection with the use of our services,
          including but not limited to, any direct, indirect, incidental,
          consequential, or punitive damages. You agree to indemnify and hold
          iVie harmless from any claims, damages, or expenses arising from your
          use of our services. <br />
          <br />
          Privacy Policy: We are committed to protecting your privacy. Please
          refer to our Privacy Policy for more information on how we collect,
          use, and share your personal information. <br />
          <br />
          Governing Law and Jurisdiction: These terms and conditions shall be
          governed by and construed in accordance with the laws of Belgium. Any
          disputes arising out of or in connection with these terms and
          conditions shall be subject to the exclusive jurisdiction of the
          courts of Brussels.
          <br />
          <br /> By using iVie, you agree to be bound by these terms and
          conditions. If you do not agree to these terms and conditions, please
          do not use our services.
        </Modal>
        <Modal
          isOpen={isModal2Visible}
          toggleModal={toggleModal2}
          title="Privacy policy"
        >
          <br />
          This privacy policy governs the manner in which iVie collects, uses,
          maintains, and discloses information collected from users (each, a
          "User") of the iVie website (the "Site"). This privacy policy applies
          to the Site and all products and services offered by iVie.
          <br />
          <br />
          <h4 className="text-lg font-title">
            Personal identification information
          </h4>
          <br /> We may collect personal identification information from Users
          in a variety of ways, including, but not limited to, when Users visit
          our site, register on the site, place an order, fill out a form, and
          in connection with other activities, services, features, or resources
          we make available on our Site. Users may be asked for, as appropriate,
          name, email address, mailing address, phone number, credit card
          information. Users may, however, visit our Site anonymously. We will
          collect personal identification information from Users only if they
          voluntarily submit such information to us. Users can always refuse to
          supply personal identification information, except that it may prevent
          them from engaging in certain Site-related activities.
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
          providers utilized and other similar information. Web browser cookies
          Our Site may use "cookies" to enhance User experience. Users' web
          browsers place cookies on their hard drive for record-keeping purposes
          and sometimes to track information about them. Users may choose to set
          their web browser to refuse cookies or to alert them when cookies are
          being sent. If they do so, note that some parts of the Site may not
          function properly. <br />
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
              about themselves when placing an order only to provide service to
              that order. We do not share this information with outside parties
              except to the extent necessary to provide the service.
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
              To improve our Site: We may use feedback Users provide to improve
              our products and services.
            </li>
            <br />
            <li>
              To send periodic emails: We may use the email address to send User
              information and updates pertaining to their order. It may also be
              used to respond to their inquiries, questions, and/or other
              requests. If User decides to opt-in to our mailing list, they will
              receive emails that may include company news, updates, related
              product or service information, etc. If at any time the User would
              like to unsubscribe from receiving future emails, we include
              detailed unsubscribe instructions at the bottom of each email.
            </li>
            <br />
          </ul>
          <h4 className="text-lg font-title">
            How we protect your information
          </h4>
          <br />
          We adopt appropriate data collection, storage, and processing
          practices and security measures to protect against unauthorized
          access, alteration, disclosure, or destruction of your personal
          information, username, password, transaction information, and data
          stored on our Site. Sharing your personal information <br />
          <br />
          We do not sell, trade, or rent Users' personal identification
          information to others. We may share generic aggregated demographic
          information not linked to individual identification information
          regarding visitors and users with our business partners, trusted
          affiliates, and advertisers for the purposes outlined above. <br />
          <br />
          We may use third-party service providers to help us operate our
          business and the Site or administer activities on our behalf, such as
          sending out newsletters or surveys. We may share your information with
          these third parties for those limited purposes, provided that you have
          given us your permission. In accordance with the GDPR, you have the
          right to access, correct, or delete any personal information we hold
          about you. You can also request that we restrict the processing of
          your personal information or object to its use altogether. <br />
          <br />
          To exercise any of these rights, please contact us using the contact
          details provided below. <br />
          <br />
          Finally, please note that this privacy policy may be updated from time
          to time to reflect changes in our business practices or legal
          requirements. We encourage you to check back periodically for the
          latest version. <br />
          <br />
          If you have any questions or concerns about our privacy policy or how
          we handle your personal information, please don't hesitate to contact
          us at privacy@iVie.com.
        </Modal>
        <Modal
          isOpen={isModal3Visible}
          toggleModal={toggleModal3}
          title="Terms of use"
        >
          <br />
          <ol className="list-decimal">
            <li>
              Introduction
              <br /> Welcome to iVie, the streaming service offered by iVie,
              based in Brussels, Belgium. These Terms of Use (the "Agreement")
              govern your use of the iVie service and website (collectively, the
              "Service"). By accessing or using the Service, you agree to be
              bound by this Agreement and to the collection and use of your
              information as set forth in our Privacy Policy.
            </li>
            <br />
            <li>
              Use of Service <br />
              <ul className="list-disc">
                <li>
                  2.1 Age Restriction: <br />
                  You must be at least 18 years of age to use the Service. If
                  you are under 18, you may use the Service only with the
                  involvement of a parent or legal guardian.{" "}
                </li>
                <li>
                  2.2 Non-commercial Use: <br />
                  The Service is for your personal and non-commercial use only.
                  You may not use the Service for any commercial purpose.
                </li>
                <li>
                  {" "}
                  2.3 Prohibited Activities: <br /> You may not use the Service
                  to violate any law, regulation, or intellectual property
                  right, or to distribute or promote any content that is
                  illegal, harmful, or offensive. You may not use the Service to
                  transmit any viruses or harmful code, or to interfere with the
                  operation of the Service or its servers.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Intellectual Property <br />
              <ul className="list-disc">
                <li>
                  3.1 Ownership: <br />
                  The Service and its content, including all intellectual
                  property rights, are owned by iVie or its licensors. You may
                  not use or reproduce any of the Service's content without our
                  express written permission.
                </li>
                <li>
                  3.2 Trademarks: <br />
                  iVie and other iVie trademarks, service marks, logos, and
                  trade names used on the Service are the property of iVie. You
                  may not use any of these trademarks without our express
                  written permission.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Subscriptions{" "}
              <ul className="list-disc">
                <li>
                  4.1 Free and Paid Subscriptions: <br />
                  We offer both free and paid subscriptions to the Service. If
                  you purchase a paid subscription, you agree to pay the
                  applicable fees and taxes, and authorize us to charge your
                  payment method for the subscription period.{" "}
                </li>
                <li>
                  4.2 Automatic Renewal: <br />
                  Paid subscriptions will automatically renew unless you cancel
                  them before the end of the current subscription period.{" "}
                </li>
                <li>
                  4.3 Cancellation and Refunds: <br />
                  You may cancel your subscription at any time, but we do not
                  provide refunds or credits for any partially used subscription
                  periods.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Disclaimers and Limitations of Liability{" "}
              <ul className="list-disc">
                <li>
                  5.1 No Warranties: <br />
                  The Service is provided "as is" and without warranty of any
                  kind. We do not guarantee that the Service will be error-free,
                  uninterrupted, or secure.{" "}
                </li>
                <li>
                  5.2 Limitations of Liability: <br />
                  To the extent permitted by law, we are not liable for any
                  indirect, incidental, special, or consequential damages
                  arising out of or in connection with the use of the Service.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Governing Law and Dispute Resolution
              <br />{" "}
              <ul className="list-disc">
                <li>
                  {" "}
                  6.1 Governing Law: <br />
                  This Agreement is governed by the laws of Belgium.{" "}
                  <li>
                    6.2 Dispute Resolution: <br />
                    Any disputes arising from or relating to this Agreement
                    shall be resolved through arbitration in Brussels, in
                    accordance with the rules of the Belgian Centre for
                    Arbitration and Mediation.{" "}
                  </li>
                </li>
              </ul>
              <br />
              <li>
                Modifications <br />
                We reserve the right to modify this Agreement at any time. We
                will provide notice of any material changes to the Agreement by
                posting the updated Agreement on our website. Your continued use
                of the Service following any such modifications constitutes your
                acceptance of the revised Agreement.
              </li>
              <br />
              <li>
                {" "}
                Contact Us <br />
                If you have any questions or concerns about this Agreement or
                the Service, please contact us at contact@iVie.com.
              </li>
            </li>
          </ol>
          <br />
          By using the iVie streaming service, you agree to the terms and
          conditions outlined in this Agreement.
          <br /> If you do not agree with any of the terms or conditions, please
          do not use the Service.
        </Modal>
        <div className="text-center pt-8 text-gray-400 text-sm">
          <span>© 2023 iVie. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
