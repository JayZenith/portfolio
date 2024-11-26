import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import ButtonMailto from "./ButtonMailto";
import MainPage from './MainPage';
import Compiler from './Compiler';




function App() {
  return (
    <>
      <Router>
        <div className="bg-white h-full w-full flex flex-col items-center font-mono">
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
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/compiler" element={<Compiler />} />
          
          </Routes>
          
          {/*
          <div className="center">
            <div><p>My name is Jay Zenith. I'm a developer.</p><br />
            
            <p>2024.</p>
            <br></br>
            
            <Link to="http://starfront.s3-website.us-east-2.amazonaws.com">
             9/23/2024 ...
            </Link>
            
            <br></br>
            <br></br>
            
            <Link to="https://github.com/JayZenith"> Github </Link>
            
            <br></br>
            <br></br>
            
            <Link to="https://x.com/JayZenith"> X </Link>
            
            <br></br>
            <br></br>
            
            <ButtonMailto label="jayzenith248@gmail.com " mailto="mailto:jayzenith248@gmail.com" />
            
            </div>
          </div>
          */}
        </div>
      </Router>
    </>
  );
}

export default App;