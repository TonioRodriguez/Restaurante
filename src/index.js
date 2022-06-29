import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './components/Home';
import Reservacion from './components/Reservacion';
import Contacto from './components/Contacto';
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservacion' element={<Reservacion />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
