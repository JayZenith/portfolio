import React, { useState } from 'react';
import crateSources from './crateSources';
import traces from './traces.json';
import valid8Chart from './valid8_chart.svg';

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' },
];

const llamaCppPrs = [
  {
    label: 'PR #17851',
    href: 'https://github.com/ggml-org/llama.cpp/pull/17851',
    text: 'CUDA/backend support for GGML_OP_FILL, removing the CPU fallback in the Qwen3-Next path.',
  },
  {
    label: 'PR #18365',
    href: 'https://github.com/ggml-org/llama.cpp/pull/18365',
    text: 'Removed a redundant per-token O(vocab) allocation from the sampling hot path — ~1.9–2.2× microbenchmark speedup.',
  },
];

const glyphLinks = [
  { label: 'Code', href: 'https://github.com/JayZenith/GLYPH' },
  { label: 'Writeup', href: 'https://jayzenith.github.io/GLYPH/' },
  { label: 'Raw evals', href: 'https://huggingface.co/datasets/JayZenith/Glyph-RLVR-Eval-Results' },
  { label: 'TUI demo', href: 'https://github.com/JayZenith/GLYPH#interactive-tui-smoke-test' },
];

const modelLinks = {
  'JayZenith/RLVR_VFINAL_STEP10': 'https://huggingface.co/JayZenith/RLVR_VFINAL_STEP10',
};

const systemPrompt = 'You are a Rust coding agent. Use tools when needed. After FINAL, stop immediately.';

const exampleDescriptions = {
  'clean-solve':
    'Fixes the visible port-precedence failure, but silently reverses TLS precedence.',
  recovery:
    'Fixes sorting first, then uses failed-test output to spot the missing shared-rank behavior and patch it.',
  'long-recovery':
    'A long rollout: recovers from bad edits via repeated test feedback, fixes trimming and signed-number parsing.',
};

const exampleNotes = {
  'clean-solve':
    'Specification gaming: the prompt says direct values must win. This patch makes profile ' +
    'values win for TLS; because no test covers that conflict, cargo_test passes and the ' +
    'verifier awards full reward.',
};

const exampleOptionLabels = {
  'clean-solve': 'spec gaming',
  recovery: 'recovery',
  'long-recovery': 'long recovery',
};

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={`external-link ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

const rustTokenPattern =
  /("(?:\\.|[^"\\])*")|\b(pub|struct|fn|let|mut|mod|use|super|impl|for|in|if|else|match|return|true|false|None|Some|Option|Vec|String|usize|u32|u16|i32|bool|str)\b|(\b\d+\b)|(#\[[^\]]+\])/g;

function RustCode({ code }) {
  const lines = code.split('\n');

  return (
    <pre className="rust-code" aria-label="src/lib.rs">
      {lines.map((line, lineIndex) => {
        const parts = [];
        let lastIndex = 0;

        line.replace(rustTokenPattern, (match, string, keyword, number, attr, offset) => {
          if (offset > lastIndex) {
            parts.push(line.slice(lastIndex, offset));
          }

          let cls = 'rust-token';
          if (string) cls += ' rust-string';
          else if (keyword) cls += ' rust-keyword';
          else if (number) cls += ' rust-number';
          else if (attr) cls += ' rust-attr';

          parts.push(
            <span className={cls} key={`${lineIndex}-${offset}`}>
              {match}
            </span>
          );
          lastIndex = offset + match.length;
          return match;
        });

        if (lastIndex < line.length) {
          parts.push(line.slice(lastIndex));
        }

        return (
          <span className="rust-line" key={lineIndex}>
            <span className="rust-line-number">{lineIndex + 1}</span>
            <span className="rust-line-code">{parts}</span>
          </span>
        );
      })}
    </pre>
  );
}

const traceTokenPattern =
  /\b(CALL|RESULT|FINAL|status:|success|failed|read_file|apply_patch|cargo_test|stdout:|stderr:)\b/g;

function TraceText({ content }) {
  const parts = [];
  let lastIndex = 0;

  content.replace(traceTokenPattern, (match, _token, offset) => {
    if (offset > lastIndex) {
      parts.push(content.slice(lastIndex, offset));
    }

    let cls = 'trace-token';
    if (match === 'CALL') cls += ' trace-call-token';
    else if (match === 'RESULT') cls += ' trace-result-token';
    else if (match === 'FINAL') cls += ' trace-final-token';
    else if (match === 'success') cls += ' trace-success-token';
    else if (match === 'failed') cls += ' trace-failed-token';
    else if (match.endsWith(':')) cls += ' trace-label-token';
    else cls += ' trace-tool-token';

    parts.push(
      <span className={cls} key={offset}>
        {match}
      </span>
    );
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}

function Turn({ t }) {
  const content = t.content.trim();
  const isFinal = content.startsWith('FINAL:');
  const isCall = content.startsWith('CALL');
  let cls = 'turn-body';
  if (isFinal) cls += ' turn-final';
  else if (isCall) cls += ' turn-call';
  else if (t.role === 'tool') cls += ' turn-result';

  return (
    <div className={`turn turn-${t.role}`}>
      <div className="turn-role">{t.role}</div>
      <pre className={cls}>
        <TraceText content={content} />
      </pre>
    </div>
  );
}

function MainPage() {
  const [activeTrace, setActiveTrace] = useState(0);
  const trace = traces[activeTrace];
  const crateSource = crateSources[trace.id];
  const exampleDescription = exampleDescriptions[trace.id];
  const exampleNote = exampleNotes[trace.id];
  const fullTurns = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: trace.task },
    ...trace.turns,
  ];

  return (
    <main className="site-shell">
      <header className="intro" id="top">
        <div className="intro-heading">
          <h1>Jay Zenith</h1>
          <nav className="profile-links" aria-label="Profile links">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p>
          I build post-training and evaluation systems for tool-using agents: data,
          environments, verifiable rewards, and RL training infrastructure.
        </p>
      </header>

      <section className="project-section">
        <div className="section-title">
          <h2>GLYPH</h2>
          <div className="project-links">
            {glyphLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        <article className="project-copy">
          <p>
            GLYPH is an end-to-end post-training stack for a 4B Rust coding agent: synthetic
            data, SFT, verifier RL, and pass@8 evaluation. The model reads, patches, and tests
            executable Cargo projects under a strict whole-trace reward.
          </p>
        </article>
      </section>

      <section className="project-section demo-section">
        <div className="section-title">
          <h2>GLYPH TUI · out-of-distribution demo</h2>
        </div>
        <article className="project-copy">
          <p>
            The TUI renders GLYPH's exact ChatML conversation while executing each read, patch, and
            Cargo test against a disposable local crate. This demo uses <code>score_summary</code>,
            an out-of-distribution task that appears in neither the training data nor the eval
            suite.{' '}
            <ExternalLink href="https://github.com/JayZenith/GLYPH/tree/main/demo_tui">
              Run the demo →
            </ExternalLink>
          </p>
          <div className="demo-video-frame">
            <video
              className="demo-video"
              controls
              muted
              playsInline
              preload="metadata"
              aria-label="GLYPH TUI OOD Rust demo screencast"
            >
              <source src="/OOD.mp4" type="video/mp4" />
              <source src="/OOD.webm" type="video/webm" />
              Your browser does not support embedded video.
            </video>
          </div>
        </article>
      </section>

      <section className="project-section lessons-section">
        <div className="section-title">
          <h2>What GLYPH taught me</h2>
        </div>
        <article className="project-copy">
          <p>
            Agent post-training depends on interface consistency. A byte-level role mismatch made
            RL rollouts differ from the ChatML used in SFT and invalidated an entire era of runs, so
            I unified SFT, RLVR, evaluation, and the TUI behind one tool runtime.
          </p>
          <p className="lesson-point">
            Reward resolution matters too. In group-relative RLVR, 64 of 96 rollouts were filtered
            at step 0 when tied rewards produced no learning signal. Compiler-aware shaping created
            more distinctions between partial failures, but it still did not reliably improve
            held-out performance. Full traces revealed what aggregate scores missed: one rollout
            earned full reward by passing every test while violating the written specification.
          </p>
        </article>
      </section>

      <section className="trace-section">
        <div className="section-heading trace-heading">
          <div>
            <h2>Explore RLVR model traces</h2>
            <p className="section-deck">
              Step-10 dense-reward adapter. Compare specification gaming with short and long
              recovery through real compiler and test feedback.
            </p>
          </div>
          <label className="trace-selector">
            <span>Choose a trace</span>
            <select
              value={activeTrace}
              onChange={(event) => setActiveTrace(Number(event.target.value))}
            >
              {traces.map((tr, idx) => (
                <option key={tr.id} value={idx}>
                  {exampleOptionLabels[tr.id]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <article className="trace-panel">
          <div className="trace-summary">
            <div>
              <span className="trace-label">{trace.label}</span>
              <a
                className="model-label"
                href={modelLinks[trace.model] ?? 'https://huggingface.co/JayZenith'}
                target="_blank"
                rel="noreferrer"
              >
                {trace.model}
              </a>
              <p>{exampleDescription}</p>
              {exampleNote && <p className="trace-note">{exampleNote}</p>}
            </div>
            <div className="trace-metadata" aria-label="Trace metadata">
              <span>RL reward {trace.reward}</span>
              <span>{trace.turns.length} trace turns</span>
            </div>
          </div>
          {crateSource && (
            <div className="crate-source">
              <div className="crate-source-header">
                <strong>crate source</strong>
                <span>src/lib.rs</span>
              </div>
              <RustCode code={crateSource} />
            </div>
          )}
          <div className="actions-panel">
            <div className="actions-header">
              <strong>full trace</strong>
              <span>system, user, assistant, tool</span>
            </div>
            <div className="trace-turns">
              {fullTurns.map((turn, index) => (
                <Turn key={`${turn.role}-${index}`} t={turn} />
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="project-section">
        <div className="section-title">
          <h2>Experimental results</h2>
        </div>
        <article className="project-copy">
          <p>
            The RL variants did not show a reliable improvement over SFT. The dense run had the
            best single result — 102 of 150 tasks solved within eight attempts, versus 95 for
            SFT — but the difference was not conclusive.{' '}
            <ExternalLink href="https://jayzenith.github.io/GLYPH/">
              Read the full experiment →
            </ExternalLink>
          </p>
          <div className="result-chart">
            <img
              src={valid8Chart}
              alt="valid@8 per run across SFT base, sparse, dense, and compiler-aware rewards"
            />
          </div>
        </article>
      </section>

      <section className="project-section environment-section">
        <div className="section-title">
          <h2>use GLYPH on Prime Intellect Environments Hub</h2>
        </div>
        <article className="project-copy">
          <p>
            GLYPH is published as a standalone <code>verifiers</code> environment on the Prime
            Intellect Environments Hub. The environment, source, model artifacts, raw eval traces,
            and companion Rust crate dataset are public.{' '}
            <ExternalLink href="https://app.primeintellect.ai/dashboard/environments/jayzenith/glyph">
              Open the environment →
            </ExternalLink>
          </p>
        </article>
      </section>

      <section className="project-section">
        <div className="section-title">
          <h2>llama.cpp (merged upstream)</h2>
        </div>
        <article className="project-copy">
          {llamaCppPrs.map((pr) => (
            <p key={pr.label}>
              <ExternalLink href={pr.href}>{pr.label}</ExternalLink> — {pr.text}
            </p>
          ))}
        </article>
      </section>
    </main>
  );
}

export default MainPage;
