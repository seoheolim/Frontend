import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from "./pages/main";
import About from "./pages/about";
import HowTo from "./pages/howTo";
import Success from "./pages/success";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
