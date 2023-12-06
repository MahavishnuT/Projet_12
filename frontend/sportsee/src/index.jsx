import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/404';
import Header from './components/Header';
import "./main.scss"
import SideBar from './components/SideBar';
import WelcomeDev from './pages/WelcomeDev';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Routes>
        <Route path='/' element={<WelcomeDev />} /> {/* TODO: delete when pushing to prod */}
        <Route path="/:userId" element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


