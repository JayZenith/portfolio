import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import ButtonMailto from "./ButtonMailto";
import MainPage from './MainPage';




function App() {
  return (
    <>
      <Router>
        <div className="basis">
          {/*
          <div className="bg-black h-20 w-full flex  items-center justify-center fixed top-0 ">
            <ul className="flex flex-col justify-center text-white ">
              <li className=""><a href="/" >
                <div className="flex flex-row items-center justify-center text-2xl font-bold">Jay&nbsp;<div className="transition-transform duration-500 ease-in-out  hover:rotate-180 hover:text-red-800 ">Z</div>enith</div>
                </a>
              </li>
              <div className="flex flex-row gap-5">
                <li><a className="text-red-400 text-xl underline" href="https://twitter.com/jayz3nith">X</a></li>
                <li><a className="text-red-400 text-xl underline" href="https://github.com/JayZenith">GitHub</a></li>
              </div>
              
            </ul>
          </div>
          */}

          <Routes>
            <Route path="/" element={<MainPage />} />
 

          
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;