import React, { useState } from 'react';
import crateSources from './crateSources';
import traces from './traces.json';
import valid8Chart from './valid8_chart.svg';

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' },
  { label: 'llama.cpp', href: 'https://github.com/ggml-org/llama.cpp/pulls?q=is%3Apr+author%3AJayZenith+is%3Amerged' },
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
  { label: 'Environments Hub', href: 'https://app.primeintellect.ai/dashboard/environments/jayzenith/glyph' },
  { label: 'SFT', href: 'https://huggingface.co/JayZenith/SFT_HALF_A_V8' },
  { label: 'RLVR', href: 'https://huggingface.co/JayZenith/RLVR_VFINAL_STEP10' },
  { label: 'Raw evals', href: 'https://huggingface.co/datasets/JayZenith/Glyph-RLVR-Eval-Results' },
  { label: 'Provenance', href: 'https://github.com/JayZenith/GLYPH/blob/main/docs/PROVENANCE.md' },
];

const modelLinks = {
  'JayZenith/RLVR_VFINAL_STEP10': 'https://huggingface.co/JayZenith/RLVR_VFINAL_STEP10',
};

const systemPrompt = 'You are a Rust coding agent. Use tools when needed. After FINAL, stop immediately.';

const exampleDescriptions = {
  'clean-solve':
    'Reads a config-merge crate, follows failed-test feedback, patches the merge precedence, confirms tests pass.',
  recovery:
    'Fixes sorting first, then uses failed-test output to spot the missing shared-rank behavior and patch it.',
  'long-recovery':
    'A long rollout: recovers from bad edits via repeated test feedback, fixes trimming and signed-number parsing.',
};

const exampleNotes = {
  'clean-solve':
    'Specification gaming: the patch passes the verifier (cargo_test 3/3) while flipping ' +
    'tls precedence — the opposite of the stated rule. No test covers conflicting tls ' +
    "values, so the verifier can't see it, and the FINAL doesn't disclose it. In this " +
    "crate's own training group, 3 of 8 rollouts made the same flip — the reward " +
    'reinforced gaming and correctness equally.',
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
          I post-train LLM agents against real software and build the evals that catch what
          scores miss. GLYPH below is the proof: a verifiable RL environment for Rust coding
          agents — data, SFT, RLVR, evals, built from scratch.
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
            GLYPH is an end-to-end experiment stack for a Rust tool-use coding agent. The model
            emits tool calls, the tools run against real Rust crates, and a valid trace must end with
            cargo passing and a clean FINAL. One execution runtime serves all three stages — SFT
            traces are materialized through the same real-cargo executor that later scores RL
            rollouts and judges evals, so every compiler message the model ever saw was real. I used
            it to compare SFT and RLVR, investigate how sparse rewards lose signal on hard recovery
            cases, and run controlled A/Bs on the reward shape itself. The examples below show RLVR model rollouts on real crates.
          </p>
          <p className="result-note">
            No reward shape beat SFT significantly: on trace-retained runs the dense arm scored{' '}
            <strong>+7 valid@8</strong> (prompt p ≈ 0.12; family sensitivity p ≈ 0.15),
            the sparse control showed no clear improvement, and a "smarter"
            compiler-graded reward, tested as a controlled A/B, <strong>beat neither</strong>.
            Full diagnosis in the{' '}
            <ExternalLink href="https://jayzenith.github.io/GLYPH/">writeup →</ExternalLink>
          </p>
          <p className="result-note">
            Then I adversarially audited my own stack: rebased every claim on trace-auditable
            runs, scanned 52k patch calls for reward tampering (one baseline test-flip found, no
            counts affected), and demoted the frontier story to an exploratory hypothesis. The
            non-trivial positive estimates sit on sometimes-solved prompts, but every positive
            CI includes zero; linking those eval bands to training gradients remains a hypothesis.
            Current source also confines tool paths, protects grading/build files, and fails
            closed into Bubblewrap for Cargo without exposing host credentials. The deliverable is audited infrastructure and an
            honest null.
          </p>
          <div className="result-chart">
            <img
              src={valid8Chart}
              alt="valid@8 per run across SFT base, sparse, dense, and compiler-aware rewards"
            />
          </div>
        </article>
      </section>

      <section className="trace-section">
        <div className="section-heading trace-heading">
          <div>
            <h2>examples</h2>
          </div>
          <div className="trace-tabs" role="tablist" aria-label="Trace selector">
            {traces.map((tr, idx) => (
              <button
                key={tr.id}
                className={`trace-tab${idx === activeTrace ? ' active' : ''}`}
                onClick={() => setActiveTrace(idx)}
                type="button"
              >
                {tr.id}
              </button>
            ))}
          </div>
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
