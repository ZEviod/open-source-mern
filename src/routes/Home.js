import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Activities from "../components/Activities";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Activities />
      <Footer />
    </div>
  );
};

export default Home;
