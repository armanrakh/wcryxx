import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1 className="lumititle">1234567890</h1>
      <Router> {/* basename='wcryxx' */}
        <nav>
          <Link to="/wcryxx">Home</Link>
          <Link to="/wcryxx/about">About</Link>
        </nav>
        <Routes>
          <Route exact path="/wcryxx" element={<Home/>} />
          <Route path="/wcryxx/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
