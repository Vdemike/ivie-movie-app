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
              <li className="inline pb-2">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 inline"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 inline"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clip-rule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 inline"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 inline"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
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
