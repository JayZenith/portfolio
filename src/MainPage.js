import React from 'react';

const profileLinks = [
  { label: 'github', href: 'https://github.com/JayZenith' },
  { label: 'huggingface', href: 'https://huggingface.co/JayZenith' },
  { label: 'x', href: 'https://twitter.com/jayz3nith' },
];

const predictLinks = [
  { label: 'read PREDICT', href: 'https://jayzenith.github.io/PREDICT/' },
  { label: 'code', href: 'https://github.com/JayZenith/PREDICT' },
];

function MainPage() {
  return (
    <main className="site-shell">
      <header className="intro" id="top">
        <div className="intro-heading">
          <h1>JAY ZENITH</h1>
          <nav className="profile-links" aria-label="Profile links">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p>
          I build post-training and evaluation systems for tool-using LLM agents: verifier-based
          environments, RL training infrastructure, and auxiliary learning objectives.
        </p>
      </header>

      <section className="project-section">
        <div className="section-title">
          <h2>PREDICT</h2>
          <div className="project-links">
            {predictLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <article className="project-copy">
          <p className="project-lede">
            <strong>A post-training study of reactive vs. predictive coding agents.</strong>
          </p>

          <p>
            Two Qwen3-4B agents on the same verifier-backed environment, built on Prime Intellect's
            Verifiers and PRIME-RL. Arm A was test-and-recover, trained with GRPO. Arm B predicted
            the verified outcome of its patch and decided whether to keep it, trained with GRPO plus
            an auxiliary cross-entropy loss.
          </p>

          <p>
            Both learned, but the predictive agent did not outperform: its REVISE path destroyed the
            execution feedback the reactive agent recovered from, and cheap testing made direct
            observation worth more than foresight. The project also produced an upstream PRIME-RL
            fix, where zero-advantage filtering could discard rollouts that still carried valid
            non-RL training signal.
          </p>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
