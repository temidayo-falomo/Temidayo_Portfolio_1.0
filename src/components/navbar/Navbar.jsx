import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <nav data-aos="fade" data-aos-delay="250">
      <div className="nav-container flex">
        <div className="nav-left flex">
          <div className="mobile flex">
            <div className="logo">
              <h2>Temidayo-Falomo</h2>
            </div>
          </div>

          <ul className="nav-links flex">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <li data-aos="fade-down">_hello</li>
            </NavLink>
            <NavLink to="/about">
              <li data-aos="fade-down" data-aos-delay="350">
                _about-me
              </li>
            </NavLink>
            <NavLink to="/projects">
              <li data-aos="fade-down" data-aos-delay="400">
                _projects
              </li>
            </NavLink>
          </ul>
        </div>

        <ul className="nav-contact">
          <NavLink
            to="/contact-me"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <li data-aos="fade-down" data-aos-delay="450">
              _contact-me
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
