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
  'GPU kernels, profiling, and performance bottlenecks',
  'Distributed inference tradeoffs and benchmarking',
  'Open-source contributions that move real codepaths'
];

const links = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' },
];

function MainPage() {
  return (
    <div className="app-shell">
      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Jay Zenith</p>
            <h1>Inference engineer focused on GPU systems, distributed serving, and measurable performance wins.</h1>
            <p className="lede">
              I work on the parts of LLM systems that actually decide whether they run fast,
              scale cleanly, and hold up under load. Right now that means inference kernels,
              serving infrastructure, benchmarking, and upstream OSS contributions.
            </p>
            <div className="link-row">
              {links.map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <aside className="hero-panel">
            <span className="panel-label">Current lane</span>
            <ul>
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="section-head">
          <p className="eyebrow">My Work</p>
          <h2>Work that best represents how I think about inference systems now.</h2>
          <p>
            This is not a generic portfolio. These are the projects and contributions that best
            represent how I think about inference systems now.
          </p>
        </section>

        <section className="work-grid">
          {featuredWork.map((item) => (
            <a key={item.title} className="work-card" href={item.href} target="_blank" rel="noreferrer">
              <div className="work-meta">{item.meta}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </section>

        <section className="bottom-strip">
          <div>
            <p className="eyebrow">What I do</p>
            <p>
              I focus on inference, ML systems, distributed serving, performance, and backend/platform work around AI systems.
            </p>
          </div>
          <div>
            <p className="eyebrow">What I optimize for</p>
            <p>
              Lower latency, higher throughput, fewer regressions, better evidence, and less
              hand-wavy systems work.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
