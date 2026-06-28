import React, { useState } from 'react';
import traces from './traces.json';

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
    text: 'GGML_OP_FILL on the CUDA backend; removed a CPU fallback. Merged.',
  },
  {
    title: 'llama.cpp — sampling hot path',
    href: 'https://github.com/ggml-org/llama.cpp/pull/18365',
    text: 'Reused the token-data buffer in sampling — 1.9–2.2× on the microbench. Merged.',
  },
];

function Turn({ t }) {
  const c = t.content.trim();
  const isFinal = c.startsWith('FINAL:');
  const isCall = c.startsWith('CALL');
  let cls = 'turn-body';
  if (isFinal) cls += ' turn-final';
  else if (isCall) cls += ' turn-call';
  else if (t.role === 'tool') cls += ' turn-result';
  return (
    <div className={`turn turn-${t.role}`}>
      <div className="turn-role">{t.role === 'assistant' ? 'agent' : 'tool'}</div>
      <pre className={cls}>{t.content}</pre>
    </div>
  );
}

function MainPage() {
  const [i, setI] = useState(0);
  const t = traces[i];
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
          design, and honest evals.
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
          </div>
        </article>
      </section>

      <section className="block">
        <div className="section-label">{'// agent traces — real saved rollouts'}</div>
        <div className="trace-tabs">
          {traces.map((tr, idx) => (
            <button
              key={tr.id}
              className={`trace-tab${idx === i ? ' active' : ''}`}
              onClick={() => setI(idx)}
            >
              {tr.id}
            </button>
          ))}
        </div>
        <div className="trace-meta">
          {t.label} · reward {t.reward} · {t.turns.length} turns
        </div>
        <div className="trace-task">
          <span className="trace-task-label">task</span> {t.task}
        </div>
        <div className="trace-turns">
          {t.turns.map((tt, k) => (
            <Turn key={k} t={tt} />
          ))}
        </div>
      </section>

      <section className="block">
        <div className="section-label">{'// open source'}</div>
        <ul className="oss">
          {oss.map((w) => (
            <li key={w.title}>
              <a href={w.href} target="_blank" rel="noreferrer" className="oss-title">
                {w.title}
              </a>
              <span className="oss-text"> — {w.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MainPage;
