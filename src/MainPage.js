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
          <p>
            I’m Jay. I like breaking things apart to see how they really work. From compilers and interpreters to small AI models in the browser, I build tools and apps that bridge low-level systems thinking with real-world products.
          </p>
          <br />
          <p>
            Some of my work:
            {/* <ul>
              <li><a href="https://github.com/JayZenith/x86_compiler">x86 Compiler</a> — a toy compiler exploring parsing, ASTs, and code generation.</li>
              <li><a href="https://cpp-wasm-interpreter-playground.vercel.app/">C++ WASM Interpreter Playground</a> — run C++ code safely in the browser using WebAssembly sandboxing.</li>
              <li><a href="https://ai-typescript-boxing-predictor.vercel.app/">AI Boxing Predictor</a> — interactive AI demo running entirely client-side in the browser.</li>
              <li><a href="https://github.com/JayZenith/Review-Application">Full-stack Review App</a> — signup, database, and user interactions (screenshots included).</li>
            </ul> */}
            <div className="Projects">
              <h2>Projects</h2>
              <div className="Project-list">
                <a href="https://your-wasm-link.com" className="Project-card">
                  <h3>WASM C++ Interpreter Playground</h3>
                  <p>Run C++ code safely in the browser using WebAssembly sandboxing.</p>
                </a>

                <a href="https://your-tf-link.com" className="Project-card">
                  <h3>AI Boxing Predictor</h3>
                  <p>Interactive AI demo running entirely client-side.</p>
                </a>

                <a href="https://github.com/JayZenith/x86_compiler" className="Project-card">
                  <h3>x86 Compiler</h3>
                  <p>Clone and run locally: toy compiler exploring parsing, ASTs, and code generation.</p>
                </a>

                <a href="https://github.com/JayZenith/Review-Application" className="Project-card">
                  <h3>Full-stack Review App</h3>
                  <p>Signup, database, and user interactions (screenshots included).</p>
                </a>
              </div>
            </div>

          </p>
          <br />
          <p>
            I’m interested in compilers, interpreters, machine learning, WebAssembly, and the future of software tooling and infrastructure.
          </p>
        </div>
      </section>
    </div>
      );
}


export default MainPage
