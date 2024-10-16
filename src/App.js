import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
