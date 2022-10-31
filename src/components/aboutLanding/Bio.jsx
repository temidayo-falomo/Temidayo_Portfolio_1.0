import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Bio() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <article className="bio" data-aos="fade-up">
      <h2>_Bio</h2>
      <p >
        I'm Temidayo, a self taught web developer with a burning passion for
        what i do! I love combining the worlds of logic and creative design to
        make eye-catching, accessible, and user-friendly websites and
        applications, and I am excited to make the leap and continue refining my
        skills with the right company.
      </p>
    </article>
  );
}

export default Bio;
