import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import traces from './traces.json';

function Turn({ t }) {
  const isFinal = t.content.trim().startsWith('FINAL:');
  const isCall = t.content.trim().startsWith('CALL');
  const role = t.role === 'assistant' ? 'agent' : 'tool';
  let cls = 'turn-body';
  if (isFinal) cls += ' turn-final';
  else if (isCall) cls += ' turn-call';
  else if (t.role === 'tool') cls += ' turn-result';
  return (
    <div className={`turn turn-${t.role}`}>
      <div className="turn-role">{role}</div>
      <pre className={cls}>{t.content}</pre>
    </div>
  );
}

export default function TraceViewer() {
  const [i, setI] = useState(0);
  const t = traces[i];
  return (
    <main className="page">
      <header className="hero">
        <h1 className="name">GLYPH — AGENT TRACES</h1>
        <div className="links">
          <Link to="/">[← home]</Link>
          <a href="https://github.com/JayZenith/glyph" target="_blank" rel="noreferrer">[code]</a>
        </div>
        <p className="lede">
          Real saved rollouts: the agent reads files, patches Rust, runs cargo,
          and stops with a clean FINAL. The reward is verifiable — cargo actually
          compiles and passes. No model is served here; these are recorded traces.
        </p>
      </header>

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
    </main>
  );
}
