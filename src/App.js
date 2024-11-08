import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import ButtonMailto from "./ButtonMailto";
import MainPage from './MainPage';
import Compiler from "./Compiler";



function App() {
  return (
    <>
      <Router>
      

        <div className="bg-white h-full w-full lg:h-full lg:w-full flex flex-col items-center font-custom">
          <div className="bg-black h-20 w-full flex items-center justify-center  fixed top-0  ">
         
            <ul className="flex  items-center justify-center ">
              <li className="text-white text-6xl "><a href="/" >
              {/*<h1 data-text="Hover and wave" className="text-5xl relative overflow-hidden pb-8 pt-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-red-800 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave">
                    ZENITH 
                </h1>*/}
                <h1 className="flex flex-row items-center justify-center"><div className="transition-transform duration-500 ease-in-out  hover:rotate-180 hover:text-red-800 ">Z</div>ENITH</h1>
                {/*<span className="transition duration-500 ease-in-out hover:text-red-700 ">Z</span>ENITH*/}
                </a></li>

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