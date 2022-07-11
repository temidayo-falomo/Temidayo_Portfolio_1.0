import React from "react";
import "./ContactLanding.css";
import ReUseCon from "./ReUseCon";
import { ContactUs } from "./contactForm/ContactUs";
import ReUseFind from "./ReUseFind";

function ContactLanding() {
  return (
    <div className="contact-landing">
      <div className="contact-left">
        <ReUseCon />
        <ReUseFind />
      </div>
      <div className="contact-middle">
        <ContactUs />
      </div>
      <div className="contact-right">
        <h1 style={{ fontSize: "1.5rem", color: "#6B63FF" }}>
          Available For Hire!
        </h1>
        <img src="./assets/marketing-strategy 1.png" alt="" />
      </div>
    </div>
  );
}

export default ContactLanding;
