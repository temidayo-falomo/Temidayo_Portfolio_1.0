import React from "react";
import ContactLanding from "../../components/contactLanding/ContactLanding";
import Footer from "../../components/footer/Footer";
import InfoBar from "../../components/infoBar/InfoBar";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-top">
        <Navbar />
        <InfoBar />
      </div>
      <ContactLanding />
      <Footer />
    </div>
  );
}

export default Contact;
