import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

function Education() {
  return (
    <>
      <h2>_Education</h2>
      <div className="education">
        <div className="education-card">
          <h2>Responsive Web Design</h2>
          <p>FreeCodeCamp</p>
          <span>
            <AiOutlineCalendar />
            2021-2021
          </span>
        </div>

        <div className="education-card">
          <h2>Github Student</h2>
          <p>Github</p>
          <span>
            <AiOutlineCalendar />
            2021-Present
          </span>
        </div>

        <div className="education-card">
          <h2>Metallurgical Engineering</h2>
          <p>University of Lagos</p>
          <span>
            <AiOutlineCalendar />
            2019-Present
          </span>
        </div>
      </div>
    </>
  );
}

export default Education;
