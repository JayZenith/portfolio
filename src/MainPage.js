import React, { useState, useContext, useRef, useEffect } from 'react'
import redBox from './redBox.png'
import ButtonMailto from "./ButtonMailto";
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainPage() {
 
    return (
        <div className="App">
          <header className="App-header">
            <h1>JayZenith</h1>
            <div className='App-sub-header'>
                <h2><a href="https://twitter.com/jayz3nith">X</a></h2>
                <h2><a href="https://github.com/JayZenith">GitHub</a></h2>
            </div>
          </header>
          <section className="Content">
            <h1 className="Content-Intro">Intro.</h1>
            <div className='Intro'>
              <p>I'm Jay and I am fascinated with how computers work under the hood and dedicate
                my time in deconstructing abstractions.</p>
              <br />
              <p>I'm interested in compilers/interpreters, machine learning, program language theory, etc.
                and the future of it all.</p>
              <br></br>
              <p className='tunnl-link'><a href="https://jayzenith.github.io/tunnl.github.io/">My Scripting Language tunnl</a></p>
            </div>
            
            
            
          </section>
        </div>
      );
}


export default MainPage
