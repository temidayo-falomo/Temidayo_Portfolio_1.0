import React from "react";
import "./InfoBar.css";
import { FaNode, FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiFirebase,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
} from "react-icons/si";

function InfoBar() {
  return (
    <div className="infobar">
      <div className="info-bar-left">
        <h2>Core Skills:</h2>
      </div>
      <div className="info-bar-content">
        <ul>
          <li>
            <FaReact />
            ReactJs
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
            <FaNode />
            NodeJs
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
            <SiFirebase />
            Firebase
          </li>
          <li>
            <SiMaterialui />
            Material
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoBar;
