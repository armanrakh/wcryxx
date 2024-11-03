import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import { useState } from "react";

import video from './styles/img/316ed56058d8aa363c1487cb10fa74fd.mp4'

function App() {
  const handleVideoContextMenu = (event) => {
        event.preventDefault(); // Отменяем стандартное меню на видео
        // Создаем и вызываем событие contextmenu для body
        document.body.dispatchEvent(new MouseEvent("contextmenu", { 
            bubbles: true, 
            cancelable: true, 
            view: window,
            clientX: event.clientX,
            clientY: event.clientY
        }));
    };

  return (
    <div className="App">
      <video src={video} className='vidtest' width="auto" height="auto" autoPlay loop muted onContextMenu={handleVideoContextMenu}> {/*controls loop*/}
        <source src={video} type="video/mp4"/>
      </video>
      <h1 className="lumititle">boo, ispugalsya?</h1>
      <Router> {/* basename='wcryxx' */}
        <div className='bordertest'></div>
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
