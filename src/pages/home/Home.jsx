import React, { useEffect } from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Landing from "../../components/landing/Landing";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default Home;
