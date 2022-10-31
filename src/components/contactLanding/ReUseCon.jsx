import React, { useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

function ReUseCon() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="about-contact" data-aos="fade-up">
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
