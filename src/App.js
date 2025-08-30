import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <div className="AppBackground">
        <Routes>
          <Route path="/" element={<MainPage />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
