import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jay Zenith</h1>
        <div className="App-sub-header">
          <h2><a href="https://twitter.com/jayz3nith">X</a></h2>
          <h2 className='idk'><a href="https://github.com/JayZenith">GitHub</a></h2>
        </div>
      </header>

      <section className="Content">
        <h2 className="Content-Intro"></h2>
        <div className="Intro">
          <p>
            Breaking things apart to see how they really work.
          </p>
          <p>My interests span compilers, interpreters, CUDA, machine learning, and the future of software tooling, infrastructure, & AI.</p>
      
          <div className="Projects">
            <h2>Projects</h2>
            <div className="Project-list">
              <a href="https://github.com/JayZenith/x86_compiler" className="Project-card">
                <h3>x86 Compiler</h3>
                <p>Exploring parsing, ASTs, and generating real x86 code from scratch.</p>
              </a>

              <a href="https://github.com/JayZenith/CausalLMExplorer" className="Project-card">
                <h3>Causal Language Model Exploration with Llama-3.2-1B</h3>
                <p>Loading, generating, analyzing, and fine-tuning causal language models using Hugging Face Transformers and PyTorch.</p>
              </a>
              <a href="https://github.com/JayZenith/tunnl_interpreter" className="Project-card">
                <h3>Interpreter</h3>
                <p>Built from the ground up to understand interpreter internals and runtime behavior.</p>
              </a>


              <a href="https://github.com/JayZenith/CUDA_NN_Inference_Engine" className="Project-card">
                <h3>CUDA NN Inference Engine </h3>
                <p>High-performance feedforward neural network leveraging GPU matrix operations.</p>
              </a>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}

export default MainPage;
