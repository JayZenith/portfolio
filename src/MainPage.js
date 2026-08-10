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
          environments, RL training infrastructure, and auxiliary learning objectives. I build
          PREDICT below.
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
            <strong>Reactive vs. Predictive Post-Training for Coding Agents</strong>
          </p>

          <p>
            I trained two Qwen3-4B coding agents on the same verifier-backed environment using Prime
            Intellect's Verifiers and PRIME-RL: reactive test-and-recover with GRPO versus
            predictive KEEP/REVISE with GRPO + auxiliary CE.
          </p>

          <p>
            Both improved with RL, but the predictive arm did not outperform. Trajectory analysis
            showed why: rollouts that chose REVISE almost never recovered, while cheap test feedback
            made direct observation more useful than foresight.
          </p>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
