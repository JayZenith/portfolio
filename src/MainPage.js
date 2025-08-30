import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jay Zenith</h1>
        <div className="App-sub-header">
          <h2><a href="https://twitter.com/jayz3nith">X</a></h2>
          <h2><a href="https://github.com/JayZenith">GitHub</a></h2>
        </div>
      </header>

      <section className="Content">
        <h2 className="Content-Intro">Intro</h2>
        <div className="Intro">
          <p>
            I’m Jay. I like breaking things apart to see how they really work. From compilers and interpreters to small AI models in the browser, I build tools and apps that bridge low-level systems thinking with real-world products.
          </p>
          <p>
            Some of my work:
          </p>
          <div className="Projects">
            <h2>Projects</h2>
            <div className="Project-list">
              <a href="https://cpp-wasm-interpreter-playground.vercel.app/" className="Project-card">
                <h3>WASM C++ Interpreter Playground</h3>
                <p>Run C++ code safely in the browser using WebAssembly sandboxing.</p>
              </a>

              <a href="https://ai-typescript-boxing-predictor.vercel.app/" className="Project-card">
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

          <p>
            I’m interested in compilers, interpreters, machine learning, WebAssembly, and the future of software tooling and infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
