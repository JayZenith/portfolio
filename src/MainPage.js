import React, { useEffect, useState } from 'react';

const work = [
  {
    title: 'glyph',
    href: 'https://github.com/JayZenith/glyph',
    meta: 'format design / sft / rl',
    text: 'A structured trace format for LLM agents. Validator-driven evals; isolated the load-bearing fix in a 2×2 ablation; LM judge confirms the same conclusion. RL stage in progress.'
  },
  {
    title: 'llama.cpp — CUDA upstream',
    href: 'https://github.com/ggml-org/llama.cpp/pull/17851',
    meta: 'cuda / merged',
    text: 'Added GGML_OP_FILL on the CUDA backend for the Qwen3-Next path. Removed a CPU fallback. Merged.'
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
    text: 'Sliding-window attention for Mistral-7B. Validated against Hugging Face past 6k tokens.'
  },
  {
    title: 'pd disaggregation benchmark',
    href: 'https://jayzenith.github.io/colocated-pd-disagg-blog/',
    meta: 'ray serve / vllm / 4×3090',
    text: 'A/B harness for prefill/decode split vs colocated. Where it actually wins, where it doesn\'t.'
  },
];

const links = [
  { label: 'github', href: 'https://github.com/JayZenith' },
  { label: 'huggingface', href: 'https://huggingface.co/JayZenith' },
  { label: 'x', href: 'https://twitter.com/jayz3nith' }
];

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span className={`cursor ${on ? 'on' : 'off'}`}>█</span>;
}

function MainPage() {
  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />
      <div className="scan" aria-hidden="true" />

      <header className="hero">
        <p className="tag">// node 2093</p>
        <h1 className="name">JAY ZENITH<Cursor /></h1>
        <p className="lede">
          building the rails for agents that can be trusted —
          format, eval, reward.
        </p>
        <p className="status">
          <span className="dot" /> currently: rl on a structured trace format
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
        <p className="prompt">$ ls work/</p>
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
        <p className="prompt">$ cat focus.txt</p>
        <ul className="focus">
          <li>format-as-substrate for verifiable LLM agents</li>
          <li>evals that catch what loss curves can't see</li>
          <li>reward shapes that don't get hacked</li>
          <li>upstream contributions to inference stacks</li>
        </ul>
      </section>

      <footer className="foot">
        <p>// signal &gt; volume</p>
      </footer>
    </main>
  );
}

export default MainPage;
