import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Designs from "./routes/Designs";
import Activities from "./routes/Activities";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
