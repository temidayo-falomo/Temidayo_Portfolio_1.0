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
        <h1 style={{fontSize: '1.5rem', color: '#7a73f7'}}>Available For Hire!</h1>
        <img src="./assets/undraw_remotely_-2-j6y.svg" alt="" />
      </div>
    </div>
  );
}

export default ContactLanding;
