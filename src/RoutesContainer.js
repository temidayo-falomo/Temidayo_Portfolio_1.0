import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function RoutesContainer() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact-me" element={<Contact />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default RoutesContainer;