import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './MainPage';
import TraceViewer from './TraceViewer';

function App() {
  return (
    <Router>
      <div className="AppBackground">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trace" element={<TraceViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
