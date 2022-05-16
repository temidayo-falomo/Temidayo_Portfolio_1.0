import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
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
              <li>_hello</li>
            </NavLink>
            <NavLink to="/about">
              <li>_about-me</li>
            </NavLink>
            <NavLink to="/projects">
              <li>_projects</li>
            </NavLink>
          </ul>
        </div>

        <ul className="nav-contact">
          <NavLink
            to="/contact-me"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <li>_contact-me</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
