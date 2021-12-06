import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Gallery from "./Gallery";
import Projects from "./Projects";
import Certification from "./Certification";
import Contacts from "./Contact";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
