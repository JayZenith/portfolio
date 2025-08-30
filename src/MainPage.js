import React, { useState, useContext, useRef, useEffect } from 'react'
import redBox from './redBox.png'
import ButtonMailto from "./ButtonMailto";
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainPage() {
 
    return (
        <div className="App">
          <header className="App-header">
            <h1>Jay Zenith</h1>
            <div className='App-sub-header'>
                <h2><a href="https://twitter.com/jayz3nith">X</a></h2>
                <h2><a href="https://github.com/JayZenith">GitHub</a></h2>
            </div>
          </header>
          <section className="Content">
            <h2 className="Content-Intro">Intro</h2>
            <div className='Intro'>
              <p>’m Jay. I like breaking things apart to see how they really work. 
                From compilers and interpreters to small AI models in the browser, 
                I spend my time building tools and apps that bridge low-level thinking with real-world products..</p>
              <br />
              <p>
              Some of what I’ve built: a mini scripting language, a browser-based C++ interpreter, and AI-powered interactive apps.
              </p>
              <br />
              <p>I'm interested in compilers/interpreters, machine learning, program language theory, wasm etc.
                and the future of it all.</p>
              <br></br>
              {/* <p>I built a scripting language called <a className='tunnl-link' href="https://jayzenith.github.io/tunnl.github.io/" >tunnl</a>.</p> */}
              
            </div>
            
            
            
          </section>
        </div>
      );
}


export default MainPage
