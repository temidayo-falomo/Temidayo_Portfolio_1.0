import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";

function ReUseCon() {
  return (
    <div className="about-contact">
      <p
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "white",
          gap: ".5rem",
        }}
      >
        <AiFillCaretDown />
        contacts
      </p>
      <a href="mailto:temmideee@gmail.com">
        <FiMail />
        temmideee@gmail.com
      </a>
      <a href="tel:08146814684">
        <IoIosCall />
        +08146814684
      </a>
    </div>
  );
}

export default ReUseCon;
