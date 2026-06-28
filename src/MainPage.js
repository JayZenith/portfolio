import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'github', href: 'https://github.com/JayZenith' },
  { label: 'huggingface', href: 'https://huggingface.co/JayZenith' },
  { label: 'x', href: 'https://twitter.com/jayz3nith' },
];

const glyphLinks = [
  { label: 'code', href: 'https://github.com/JayZenith/glyph' },
  { label: 'writeup', href: 'https://jayzenith.github.io/glyph/' },
  { label: 'models', href: 'https://huggingface.co/JayZenith' },
];

const oss = [
  {
    title: 'llama.cpp — CUDA FILL op',
    href: 'https://github.com/ggml-org/llama.cpp/pull/17851',
    text: 'Added GGML_OP_FILL on the CUDA backend (Qwen3-Next path), removing a CPU fallback. Merged upstream.',
  },
  {
    title: 'llama.cpp — sampling hot path',
    href: 'https://github.com/ggml-org/llama.cpp/pull/18365',
    text: 'Reused the token-data buffer in llama_sampler_sample, cutting a redundant O(vocab) allocation — 1.9–2.2× on the sampling microbench. Merged upstream.',
  },
];

function MainPage() {
  return (
    <main className="page">
      <header className="hero">
        <h1 className="name">JAY ZENITH</h1>
        <div className="links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              [{l.label}]
            </a>
          ))}
        </div>
        <p className="lede">
          I build and evaluate LLM agents — verifiable RL environments, reward
          design, and honest evals. CS @ UC Santa Cruz.
        </p>
      </header>

      <section className="block">
        <div className="section-label">{'// featured'}</div>
        <article className="featured">
          <div className="row">
            <span className="title title-lg">GLYPH</span>
            <span className="meta">rl environment · post-training · evals</span>
          </div>
          <p className="desc">
            A verifiable-reward RL environment + eval suite for a Rust tool-use
            coding agent (Qwen3-4B), built on verifiers / PRIME-RL. SFT built the
            agent; sparse-reward RLVR came out flat — so I diagnosed why: the hard
            tail produces all-fail rollout groups with zero advantage, which get
            filtered and never train. I added a dense partial-credit reward
            (compile + test-pass fraction) to restore the gradient.
          </p>
          <p className="result">
            Small but reproducible <strong>+3.7 pass@8</strong> (97.3 → 101.0
            valid traces / 150), replicated across 3 seeds (t-test p ≈ 0.06). A
            single run showed +7 — replication revealed that was seed noise.
          </p>
          <div className="links sublinks">
            {glyphLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                [{l.label}]
              </a>
            ))}
            <Link to="/trace">[trace viewer]</Link>
          </div>
        </article>
      </section>

      <section className="block">
        <div className="section-label">{'// open source'}</div>
        <ul className="list">
          {oss.map((w) => (
            <li key={w.title}>
              <a href={w.href} target="_blank" rel="noreferrer" className="row">
                <span className="title">{w.title}</span>
              </a>
              <p className="desc">{w.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block">
        <div className="section-label">{'// also'}</div>
        <p className="desc">
          Numerical-correctness validation of inference implementations (logit
          parity vs Hugging Face); a study of prefill/decode-disaggregated vs
          colocated serving.
        </p>
      </section>
    </main>
  );
}

export default MainPage;
