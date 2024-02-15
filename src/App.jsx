import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Services from './views/Services';
import About from './views/About';
import Contact from './views/Contact';

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        
    </div>
  )
}

export default App