import React, { useState } from 'react';
import crateSources from './crateSources';
import traces from './traces.json';
import valid8Chart from './valid8_chart.svg';

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' },
];

const glyphLinks = [
  { label: 'Code', href: 'https://github.com/JayZenith/GLYPH' },
  { label: 'Writeup', href: 'https://jayzenith.github.io/GLYPH/' },
  { label: 'SFT', href: 'https://huggingface.co/JayZenith/SFT_HALF_A_V8' },
  { label: 'RLVR', href: 'https://huggingface.co/JayZenith/RLVR_VFINAL_STEP10' },
];

const modelLinks = {
  'JayZenith/RLVR_VFINAL_STEP10': 'https://huggingface.co/JayZenith/RLVR_VFINAL_STEP10',
};

const systemPrompt = 'You are a Rust coding agent. Use tools when needed. After FINAL, stop immediately.';

const exampleDescriptions = {
  'clean-solve':
    'An RLVR-trained agent reads a small Rust config-merge crate, follows failed-test feedback, patches the merge precedence, and confirms the tests pass.',
  recovery:
    'An RLVR-trained agent fixes sorting first, then uses failed-test output to notice the missing shared-rank behavior and patch the ranking logic.',
  'long-recovery':
    'A longer RLVR rollout where the agent recovers from bad edits and uses repeated test feedback to fix trimming and signed-number parsing.',
};

const exampleNotes = {
  'clean-solve':
    "Specification gaming, not a clean win: the patch satisfies the verifier " +
    "(cargo_test, 3/3) while violating the user's actual spec — it flips tls from " +
    "direct-first to profile-first, the opposite of the stated 'direct values take " +
    'precedence\' rule. No test sets conflicting direct/profile tls values, so the ' +
    'verifier can\'t see the violation, and the FINAL message ("tls, which was already ' +
    'correct") doesn\'t disclose it. One observed instance from reading this trace, not ' +
    "a measured systemic exploit — but it's exactly the proxy-vs-true-objective gap " +
    'verifiable reward is supposed to close.',
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
          I am interested in LLM agents that can use tools against real software, post-training
          methods that improve them, and evals that measure whether they actually solve the task.
          GLYPH below is where those interests meet: a verifiable RL environment for coding agents
          working on Rust crates.
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
            cargo passing and a clean FINAL. I used it to compare SFT and RLVR, diagnose why sparse
            rewards struggled on hard recovery cases, and run controlled A/Bs on the reward shape
            itself. The examples below show RLVR model rollouts on real crates.
          </p>
          <p className="result-note">
            A dense reward fix gave <strong>+3.7 pass@8</strong> on a flat RLVR run. The obvious
            next move — a more "principled" reward graded on actual compiler output — tested as a
            controlled A/B against it, and <strong>lost</strong>. Full diagnosis, training curves,
            and why in the{' '}
            <ExternalLink href="https://jayzenith.github.io/GLYPH/">writeup →</ExternalLink>
          </p>
          <div className="result-chart">
            <img
              src={valid8Chart}
              alt="valid@8 per seed across SFT base, dense reward, and compiler-aware reward"
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
    </main>
  );
}

export default MainPage;
