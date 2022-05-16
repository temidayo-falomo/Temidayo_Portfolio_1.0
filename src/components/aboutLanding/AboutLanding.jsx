import React from "react";
import "./AboutLanding.css";
import { VscFolder } from "react-icons/vsc";
import { useState } from "react";
import Bio from "./Bio";
import Experience from "./Experience";
import Interests from "./Interests";
import Education from "./Education";
import ReUseCon from "../contactLanding/ReUseCon";
import Personal from "./Personal";

function AboutLanding() {
  const AboutStuff = [
    "bio",
    "interests",
    "experience",
    "education",
    "personal",
  ];
  const [show, setShow] = useState("bio");

  return (
    <div className="about-landing">
      <div className="about-left">
        <ul role="group">
          {AboutStuff.map((data) => {
            return (
              <li key={data} onClick={() => setShow(data)}>
                <VscFolder className="folder" />
                {data}
              </li>
            );
          })}
        </ul>

        <ReUseCon />
      </div>
      <div className="about-middle">
        <div>{show === "bio" && <Bio />}</div>
        <div>{show === "interests" && <Interests />}</div>
        <div>{show === "experience" && <Experience />}</div>
        <div>{show === "education" && <Education />}</div>
        <div>{show === "personal" && <Personal />}</div>
      </div>
      <div className="about-right">
        <img src="./assets/IMG_20210820_203403_3.jpeg" alt="" />
      </div>
    </div>
  );
}

export default AboutLanding;
