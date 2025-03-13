import React, { useState, useContext, useRef, useEffect } from 'react'
import redBox from './redBox.png'
import ButtonMailto from "./ButtonMailto";
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainPage() {
 
    return (
        <div className="App">
          <header className="App-header">
            <h1>JayZ3nith</h1>
            <div className='App-sub-header'>
                <h2><a href="https://twitter.com/jayz3nith">X</a></h2>
                <h2><a href="https://github.com/JayZenith">GitHub</a></h2>
            </div>
          </header>
          <section className="Content">
            <h1>Intro. </h1>
            <p>I'm Jay and I am fascinated with how computers work under the hood.</p>
            <br />
            <p>I'm interested in compilers/interpreters and machine learning.</p>
            {/*
            <div className="projects">
              <h2>My Projects</h2>
              <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
              </ul>
            </div>
            */}
          </section>
        </div>
      );
}


export default MainPage
