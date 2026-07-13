import React from 'react';
import valid8Chart from './valid8_chart.svg';

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' },
];

const llamaCppPrs = [
  {
    label: 'llama.cpp · PR #17851',
    href: 'https://github.com/ggml-org/llama.cpp/pull/17851',
    text: 'CUDA/backend support for GGML_OP_FILL, removing the CPU fallback in the Qwen3-Next path.',
  },
  {
    label: 'llama.cpp · PR #18365',
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

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={`external-link ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function MainPage() {
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
          <h2>Key lessons from building GLYPH</h2>
        </div>
        <div className="lesson-list">
          <article className="lesson-item">
            <h3>Keep every stage byte-identical</h3>
            <p>
              A role-format mismatch made RL rollouts differ from the ChatML used in SFT and
              invalidated an entire era of runs. I learned to treat the interface as part of the
              model: SFT, RLVR, evaluation, and the TUI now share one tool runtime.
            </p>
          </article>
          <article className="lesson-item">
            <h3>Reward meaningful progress</h3>
            <p>
              In group-relative RLVR, tied rewards create no learning signal; 64 of 96 rollouts
              were filtered at step 0. Compiler-aware shaping distinguished more partial failures,
              but the extra reward resolution still did not reliably improve held-out performance.
            </p>
          </article>
          <article className="lesson-item">
            <h3>Inspect behavior, not just scores</h3>
            <p>
              One reviewed trace passed every test while violating the written task because the
              tests missed a conflict. It does not establish a result-wide problem; it shows why
              retained traces reveal coverage gaps that aggregate scores cannot.
            </p>
          </article>
        </div>
      </section>

      <section className="trace-section">
        <div className="section-heading">
          <div>
            <h2>One verifier gap</h2>
            <p className="section-deck">
              A retained RLVR trace passed every test after reversing the written TLS precedence.
            </p>
          </div>
        </div>
        <article className="verifier-gap-panel">
          <pre className="verifier-gap-diff"><span className="gap-before">Before (spec-correct): tls = direct.or_else(profile).or(defaults)</span>{'\n'}
<span className="gap-after">After (model's patch): tls = profile.or_else(direct).or(defaults)</span>{'\n'}
Tests: 3/3 pass.{"\n"}
<span className="gap-result">Spec: violated. Verifier: blind.</span></pre>
          <ExternalLink
            className="full-trace-link"
            href="https://jayzenith.github.io/GLYPH/#full-verifier-gap-trace"
          >
            Full trace →
          </ExternalLink>
        </article>
      </section>

      <section className="project-section" id="experimental-results">
        <div className="section-title">
          <h2>Experimental results</h2>
        </div>
        <article className="project-copy">
          <p>
            Each model has one role in the comparison: SFT is the control; sparse RLVR tests
            whether RL alone helps; dense RLVR adds compile-and-test partial credit; and the
            compiler-aware arm tests a Rust-specific progress signal.
          </p>
          <p className="results-definition">
            <code>valid@8</code> counts a crate when at least one of eight sampled rollouts reaches
            Cargo success and ends with one clean <code>FINAL</code>.
          </p>
          <div className="results-table-wrap">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Trace-retained</th>
                  <th>Counts only</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>SFT control</td><td>95</td><td>97 / 100</td></tr>
                <tr><td>Sparse RLVR</td><td>98 / 96 / 98</td><td>—</td></tr>
                <tr><td>Dense RLVR</td><td>102</td><td>102 / 99</td></tr>
                <tr><td>Compiler-aware</td><td>95 / 96 / 94</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
          <div className="result-chart">
            <img
              src={valid8Chart}
              alt="valid@8 evaluations for SFT, sparse, dense, and compiler-aware models; count-only repetitions are faded"
            />
          </div>
          <p className="result-note">
            <strong>Result:</strong> no RL variant showed a reliable improvement over SFT. Dense
            produced the best retained evaluation—102 versus 95 for SFT—but the paired-prompt
            comparison was p≈0.12, or p≈0.15 when related task families were grouped. Count-only
            repetitions remain visible for context but are excluded from claims because their
            rollouts were not saved.{' '}
            <ExternalLink href="https://jayzenith.github.io/GLYPH/">
              Read the full experiment →
            </ExternalLink>
          </p>
          <p className="result-note">
            <strong>Working explanation:</strong> both the curriculum and the reward limited the
            learning frontier. The synthetic data taught the tool protocol and recurring task
            patterns well, leaving little headroom on easy cases, but likely did not provide enough
            diverse, intermediate-difficulty Rust work to build the capability needed for the hard
            tail. Sparse rewards then collapsed different hard-case failures into ties. Denser
            rewards exposed partial progress, but could not substitute for capability the SFT
            curriculum had not established. This remains a hypothesis: each reward arm came from
            one training run, so curriculum, training variance, and reward shape were not isolated
            causally.
          </p>
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
          <h2>Open-source contributions</h2>
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
