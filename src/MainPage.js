import React from 'react';

const profileLinks = [
  { label: 'github', href: 'https://github.com/JayZenith' },
  { label: 'huggingface', href: 'https://huggingface.co/JayZenith' },
  { label: 'x', href: 'https://twitter.com/jayz3nith' },
];

const predictLinks = [
  { label: 'study', href: 'https://jayzenith.github.io/PREDICT/' },
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
          I want to understand how we train agents that can improve the process of building agents.
          I built PREDICT end-to-end to understand how model behavior actually emerges through
          pretraining, SFT, rollout generation, reinforcement learning, and credit assignment.
          Now I’m focused on long-horizon context management, credit assignment, and self-improving
          agent systems.
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
            Post-training coding agents with SFT, verifier-backed RL, and real tool execution.
          </p>

          <p>
            I trained Qwen3-4B agents and built the surrounding training system: coding environments,
            sandboxed rollouts, tool execution, rewards and evals, and custom PRIME-RL training logic.
          </p>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
