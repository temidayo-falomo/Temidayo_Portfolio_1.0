import React from "react";
import "./ContactLanding.css";
import ReUseCon from "./ReUseCon";
import ContactForm from "./contactForm/ContactForm";
import ReUseFind from "./ReUseFind";

function ContactLanding() {
  return (
    <div className="contact-landing">
      <div className="contact-left">
        <ReUseCon />
        <ReUseFind />
      </div>
      <div className="contact-middle">
        <ContactForm />
      </div>
      <div className="contact-right">
        <h1>Available For Hire!</h1>
        <img src="./assets/undraw_remotely_-2-j6y.svg" alt="" />
      </div>
    </div>
  );
}

export default ContactLanding;
