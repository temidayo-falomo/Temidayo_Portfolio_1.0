import React from "react";
import "./About.css";
import Navbar from "../../components/navbar/Navbar";
import InfoBar from "../../components/infoBar/InfoBar";
import AboutLanding from "../../components/aboutLanding/AboutLanding";
import Footer from "../../components/footer/Footer";

function About() {
  return (
    <div className="About">
      <div className="about-top">
        <Navbar />
        <InfoBar />
      </div>
      <AboutLanding />
      <Footer />
    </div>
  );
}

export default About;
