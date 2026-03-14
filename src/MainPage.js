import React from 'react';

const featuredWork = [
  {
    title: 'mini-sglang Mistral Support',
    href: 'https://jayzenith.github.io/mistral-support-minisgl.github.io/',
    meta: 'PyTorch, FlashAttention-3, H100 validation',
    text: 'Implemented sliding-window attention support for Mistral-7B, fixed config edge cases, and validated behavior against Hugging Face beyond 6k tokens.'
  },
  {
    title: 'PD Disaggregation Benchmarking',
    href: 'https://jayzenith.github.io/colocated-pd-disagg-blog/',
    meta: 'Ray Serve, vLLM, 4x RTX 3090s',
    text: 'Built an A/B harness for prefill/decode disaggregation versus colocated serving and measured where single-node PD actually helps instead of assuming a win.'
  },
  {
    title: 'llama.cpp Sampling Hot Path',
    href: 'https://jayzenith.github.io/llama-perf-blog/',
    meta: 'C++, profiling, hot-path optimization',
    text: 'Removed a redundant O(vocab) allocation from token sampling and showed a roughly 1.9x to 2.2x microbenchmark speedup across common vocab sizes.'
  },
  {
    title: 'Merged CUDA Backend Work',
    href: 'https://github.com/ggml-org/llama.cpp/pull/17851',
    meta: 'llama.cpp, CUDA, upstream contribution',
    text: 'Added CUDA GGML_OP_FILL support for the Qwen3-Next path, removed a CPU fallback, passed backend tests, and merged the change upstream.'
  }
];

const focusAreas = [
  'LLM inference and model-serving systems',
  'GPU kernels and performance bottlenecks',
  'Distributed inference tradeoffs and benchmarking',
  'Open-source contributions that move real codepaths'
];

const links = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' }
];

function MainPage() {
  return (
    <main className="simple-page">
      <header className="hero">
        <p className="name">Jay Zenith</p>
        <h1>Inference engineer focused on GPU systems, distributed serving, and measurable performance wins.</h1>
        <p className="lede">
          I work on the parts of LLM systems that decide whether they run fast,
          scale cleanly, and hold up under load. Right now that means inference kernels,
          serving infrastructure, benchmarking, and upstream OSS contributions.
        </p>
        <div className="link-row" aria-label="social links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <section className="section">
        <h2>Current focus</h2>
        <ul className="plain-list">
          {focusAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Selected work</h2>
        <p className="section-copy">
          These are the projects and contributions that best represent how I think about inference systems right now.
        </p>
        <div className="work-list">
          {featuredWork.map((item) => (
            <article key={item.title} className="work-item">
              <h3>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </h3>
              <p className="work-meta">{item.meta}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-last">
        <h2>What I do</h2>
        <p className="section-copy">
          I focus on inference, ML systems, distributed serving, performance, and backend/platform work around AI systems.
        </p>
        <p className="section-copy">
          I optimize for lower latency, higher throughput, fewer regressions, better evidence, and less hand-wavy systems work.
        </p>
      </section>
    </main>
  );
}

export default MainPage;
