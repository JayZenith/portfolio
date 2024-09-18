import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import ButtonMailto from "./ButtonMailto";


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div><p>My name is Jay Zenith.</p><br />
          <p>I'm a developer.</p> <br></br>
          <p>2024. You like that.</p>
          <br></br>
          [
          <Link to="http://starfront.s3-website.us-east-2.amazonaws.com">
           Days Before . . . 
          </Link>
          ]
          <br></br>
          <br></br>
          [
          <Link to="https://github.com/JayZenith"> Github </Link>
          ]
          <br></br>
          <br></br>
          [
          <Link to="https://x.com/JayZenith_"> X </Link>
          ]
          <br></br>
          <br></br>
          [
          <ButtonMailto label="jayzenith248@gmail.com " mailto="mailto:jayzenith248@gmail.com" />
          ]
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;