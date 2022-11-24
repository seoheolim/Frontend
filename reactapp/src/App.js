import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from "./pages/main";
import Services from "./pages/services";
import HowTo from "./pages/howTo";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
