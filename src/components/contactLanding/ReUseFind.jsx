import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

function ReUseFind() {
  return (
    <div className="find-me-on">
      <p>
        <AiFillCaretDown />
        find-me-also-in
      </p>
      <a
        href="https://www.youtube.com/channel/UCUYSSLQyZhdE_OgsJVN1aYA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
        YouTube channel
      </a>
      <a
        href="https://www.figma.com/@temidayo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
        Figma profile
      </a>
      <a
        href="https://www.instagram.com/temidayo_falomo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
        Instagram account
      </a>
      <a
        href="https://www.twitch.tv/temidayo_falomo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
        Twitch profile
      </a>
    </div>
  );
}

export default ReUseFind;
