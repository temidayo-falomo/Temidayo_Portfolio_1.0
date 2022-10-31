import React, { useEffect } from "react";
import "./Landing.css";
import { FaGreaterThan } from "react-icons/fa";
import Game from "../game/Game";
import Aos from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="landing" data-aos="fade" data-aos-delay="250">
      <div className="landing-text">
        <div className="top-texts">
          <p data-aos="fade" data-aos-delay="600">
            Hi all, i'm
          </p>
          <h1 data-aos="fade" data-aos-delay="650">
            Temidayo Falomo
          </h1>
          <h3 data-aos="fade" data-aos-delay="700">
            <FaGreaterThan />
            MERN Stack Developer
          </h3>
        </div>

        <div className="bottom-text" data-aos="fade" data-aos-delay="750">
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
          <p>{`//`} find my profile on Github:</p>
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
