import React from 'react';

const work = [
  {
    title: 'glyph',
    href: 'https://github.com/JayZenith/glyph',
    text: 'Rust tool-use agent on a 4B model. SFT learned the full CALL/RESULT/FINAL contract; strict whole-trace evals; then an end-to-end RLVR audit. Honest result: RL reshuffled the solved set instead of improving it, and most apparent collapses were harness bugs. Full postmortem in the repo.'
  },
  {
    title: 'llama.cpp — CUDA upstream',
    href: 'https://github.com/ggml-org/llama.cpp/pull/17851',
    text: 'Added GGML_OP_FILL on the CUDA backend for the Qwen3-Next path; removed a CPU fallback. Merged upstream.'
  },
  {
    title: 'llama.cpp — sampling hot path',
    href: 'https://jayzenith.github.io/llama-perf-blog/',
    text: 'Cut a redundant O(vocab) allocation from token sampling. 1.9–2.2× on the sampling microbench.'
  },
  {
    title: 'mini-sglang — Mistral support',
    href: 'https://jayzenith.github.io/mistral-support-minisgl.github.io/',
    text: 'Sliding-window attention for Mistral-7B, validated against Hugging Face past 6k tokens.'
  },
  {
    title: 'pd disaggregation benchmark',
    href: 'https://jayzenith.github.io/colocated-pd-disagg-blog/',
    text: 'A/B harness for prefill/decode split vs colocated serving.'
  },
];

const links = [
  { label: 'github', href: 'https://github.com/JayZenith' },
  { label: 'huggingface', href: 'https://huggingface.co/JayZenith' },
  { label: 'x', href: 'https://twitter.com/jayz3nith' }
];

function MainPage() {
  return (
    <main className="page">
      <header className="hero">
        <h1 className="name">JAY ZENITH</h1>
        <p className="lede">
          I work on training, evals, and inference for LLM agents. The current
          project is glyph: a Rust tool-use agent I took from SFT through
          verifier RL, with strict whole-trace evals and a postmortem of what
          RL actually changed. Before that: CUDA and sampling work merged into
          llama.cpp, Mistral support in mini-sglang, and serving benchmarks on
          vLLM.
        </p>
        <div className="links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              [{l.label}]
            </a>
          ))}
        </div>
      </header>

      <section className="block">
        <ul className="list">
          {work.map((w) => (
            <li key={w.title}>
              <a href={w.href} target="_blank" rel="noreferrer" className="row">
                <span className="title">{w.title}</span>
              </a>
              <p className="desc">{w.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MainPage;
