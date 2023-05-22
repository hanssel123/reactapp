import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Inventory from './components/Inventory.js';
import Contaduria from './components/Contaduria';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contaduria" element={<Contaduria />} />
      </Routes>
    </Router>
  );
};

export default App;