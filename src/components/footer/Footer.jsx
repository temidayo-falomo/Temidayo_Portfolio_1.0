import React, { useEffect } from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { GiBattleAxe } from "react-icons/gi";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <footer>
      <div className="footer-left">
        <h2>Find me on:</h2>
        <a
          href="https://twitter.com/Temidayofalomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://cssbattle.dev/player/temidayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GiBattleAxe />
        </a>
      </div>

      <div className="footer-right">
        <a
          href="https://github.com/temidayo-falomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>@temidayo-falomo</span>
          <BsGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
