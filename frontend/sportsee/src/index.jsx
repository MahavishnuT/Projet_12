import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import "./main.scss"
import SideBar from './components/SideBar';
import WelcomeDev from './pages/WelcomeDev';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path='/' element={<WelcomeDev />} /> {/* TODO: delete when pushing to prod */}
        <Route path="/:userId" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


