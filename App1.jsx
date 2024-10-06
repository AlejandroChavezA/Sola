import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import WhatAreSolarStorms from './WhatAreSolarStorms';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de la página principal */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Ruta de la segunda página */}
        <Route path="/info" element={<WhatAreSolarStorms />} />
      </Routes>
    </Router>
  );
};

export default App;

