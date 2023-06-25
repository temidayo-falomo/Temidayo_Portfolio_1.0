import React from "react";
import "./AboutLanding.css";
import { VscFolder } from "react-icons/vsc";
import { useState } from "react";
import Bio from "./Bio";
import Experience from "./Experience";
import Interests from "./Interests";
import ReUseCon from "../contactLanding/ReUseCon";
import Personal from "./Personal";

function AboutLanding() {
  const AboutStuff = ["Bio", "Interests", "Experience", "Personal"];
  const [show, setShow] = useState("Bio");
  const [number, setNumber] = useState(0);

  const handleActiveCard = (param) => {
    setNumber(param);
  };

  return (
    <div className="about-landing">
      <div className="about-left">
        <ul role="group" data-aos="fade">
          {AboutStuff.map((data, index) => {
            return (
              <li
                className={`${index === number && "folder-active"}`}
                key={data}
                onClick={() => {
                  setShow(data);
                  handleActiveCard(index);
                }}
              >
                <VscFolder className="folder" />
                {data}
              </li>
            );
          })}
        </ul>

        <ReUseCon />
      </div>
      <div className="about-middle">
        <div>{show === "Bio" && <Bio />}</div>
        <div>{show === "Interests" && <Interests />}</div>
        <div>{show === "Experience" && <Experience />}</div>
        <div>{show === "Personal" && <Personal />}</div>
      </div>
      <div className="about-right">
        <img src="./assets/my-pic.jpg" alt="" />
      </div>
    </div>
  );
}

export default AboutLanding;
