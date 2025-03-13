import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import ButtonMailto from "./ButtonMailto";
import MainPage from './MainPage';




function App() {
  return (
    <>
      <Router>
        <div className="AppBackground">
          <Routes>
            <Route path="/" element={<MainPage />} />         
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;