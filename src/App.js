import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import ButtonMailto from "./ButtonMailto";
import MainPage from './MainPage';



function App() {
  return (
    <>
      <Router>
      

        <div className="h-screen w-screen bg-slate-50 flex flex-col items-center mt-0   font-custom">
          <div className="bg-black h-14 w-2/3 flex items-center justify-center border-b-2 fixed top-0  border-black">
         
            <ul className="flex items-center justify-center ">
              <li className="text-white text-2xl hover:text-red-800 "><a href="#" >Jay Zenith</a></li>

            </ul>
          </div>
          <Routes>
            <Route path="/" element={<MainPage />} />
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