import React from "react";
import "./Landing.css";
import { FaGreaterThan } from "react-icons/fa";
import Game from "../game/Game";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-text">
        <div className="top-texts">
          <p>Hi all, i'm</p>
          <h1>Temidayo Falomo</h1>
          <h3>
            <FaGreaterThan />
            MERN Stack Developer
          </h3>
        </div>

        <div className="bottom-text">
          <p>{"// wanna play a game?"}</p>
          <p>{"// you can also see it on my github page"}</p>
          <div style={{ lineHeight: "30px" }}>
            <span>const</span>
            <span>githubLink</span>
            <span>=</span>
            <a
              href="https://bit.ly/3Ln6weK"
              target="_blank"
              rel="noopener noreferrer"
            >
              “https://bit.ly/3Ln6weK”
            </a>
          </div>
        </div>

        <div className="mobl">
          <p>// find my profile on Github:</p>
          <div>
            {" "}
            <span>const </span>
            <span> githubLink</span>
            <span>=</span>
            <a href="https://github.com/temidayo-falomo">
              “https://github.com/temidayo-falomo”
            </a>
          </div>
        </div>
      </div>

      <Game className="game-disp" />
    </div>
  );
}

export default Landing;
