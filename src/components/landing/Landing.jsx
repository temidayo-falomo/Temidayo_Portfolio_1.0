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
             Front-end Developer
          </h3>
        </div>

        <div className="bottom-text">
          <p>// wanna play a game?</p>
          <p>// you can also see it on my github page</p>
          <div style={{ lineHeight: "30px" }}>
            <span>const</span>
            <span>githubLink</span>
            <span>=</span>
            <span style={{cursor:'copy'}}>“https://github.com/example/url”</span>
          </div>
        </div>

        <div className="mobl">
          <p>// find my profile on Github:</p>
          <div>
            {" "}
            <span>const </span>
            
            <span> githubLink</span>
            <span>=</span>
            <span>“https://github.com/example/url”</span>
          </div>
        </div>
      </div>

      <Game className="game-disp" />
    </div>
  );
}

export default Landing;
