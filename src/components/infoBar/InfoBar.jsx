import React, { useEffect } from "react";
import "./InfoBar.css";
import { FaNode, FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiFirebase,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";

function InfoBar() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="infobar">
      <div className="info-bar-left">
        <h2>Skills:</h2>
      </div>
      <div className="info-bar-content">
        <ul>
          <li>
            <FaReact />
            ReactJs
          </li>
          <li>
            <FaNode />
            Node
          </li>
          <li>
            <SiMongodb />
            MongoDb
          </li>
          <li>
            <h2>E</h2>
            Express
          </li>
          <li>
            <AiOutlineHtml5 />
            Html5
          </li>
          <li>
            <IoLogoCss3 />
            Css3
          </li>
          <li>
            <SiJavascript />
            VanillaJs
          </li>
          <li>
            <SiTypescript />
            TS
          </li>
          <li>
            <SiFirebase />
            Firebase
          </li>
          <li>
            <SiStyledcomponents />
            Styled
          </li>
          <li>
            <SiMaterialui />
            Material
          </li>
          <li>
            <SiNextdotjs />
            NextJs
          </li>
          <li>
            <CgFigma />
            Figma
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoBar;
