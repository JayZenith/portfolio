import React from 'react';

const work = [
  {
    title: 'glyph',
    href: 'https://github.com/JayZenith/glyph',
    meta: 'sft / rlvr / evals',
    text: 'Rust tool-use agent on a 4B model. SFT learned the full CALL/RESULT/FINAL contract; strict whole-trace evals; then an end-to-end RLVR audit. Honest result: RL reshuffled the solved set instead of improving it, and most apparent collapses were harness bugs. Full postmortem in the repo.'
  },
  {
    title: 'llama.cpp — CUDA upstream',
    href: 'https://github.com/ggml-org/llama.cpp/pull/17851',
    meta: 'cuda / merged',
    text: 'Added GGML_OP_FILL on the CUDA backend for the Qwen3-Next path; removed a CPU fallback. Merged upstream.'
  },
  {
    title: 'llama.cpp — sampling hot path',
    href: 'https://jayzenith.github.io/llama-perf-blog/',
    meta: 'c++ / 1.9–2.2× microbench',
    text: 'Cut a redundant O(vocab) allocation from token sampling.'
  },
  {
    title: 'mini-sglang — Mistral support',
    href: 'https://jayzenith.github.io/mistral-support-minisgl.github.io/',
    meta: 'pytorch / flashattention-3 / h100',
    text: 'Sliding-window attention for Mistral-7B, validated against Hugging Face past 6k tokens.'
  },
  {
    title: 'pd disaggregation benchmark',
    href: 'https://jayzenith.github.io/colocated-pd-disagg-blog/',
    meta: 'ray serve / vllm / 4×3090',
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
      <div className="grain" aria-hidden="true" />
      <div className="scan" aria-hidden="true" />

      <header className="hero">
        <h1 className="name">JAY ZENITH</h1>
        <p className="lede">
          training, evals, and inference for LLM agents.
        </p>
        <p className="status">
          <span className="dot" /> <strong>currently</strong> shipping the glyph postmortem: what verifier RL actually did to a tool-use agent
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
        <p className="prompt">work</p>
        <ul className="list">
          {work.map((w) => (
            <li key={w.title}>
              <a href={w.href} target="_blank" rel="noreferrer" className="row">
                <span className="title">{w.title}</span>
                <span className="meta">{w.meta}</span>
              </a>
              <p className="desc">{w.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block">
        <p className="prompt">focus</p>
        <ul className="focus">
          <li>structured formats and evals for agent training</li>
          <li>reward shaping for RL on tool-using models</li>
          <li>inference performance — kernels, serving, throughput</li>
          <li>upstream contributions to OSS inference stacks</li>
        </ul>
      </section>
    </main>
  );
}

export default MainPage;
