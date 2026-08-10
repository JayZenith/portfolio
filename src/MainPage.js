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
            <strong>
              Two coding agents on the same RL environment: one tests its patch, the other predicts
              what the test will say and decides whether to keep it.
            </strong>
          </p>

          <p>
            Qwen3-4B, SFT then GRPO, built on Prime Intellect's Verifiers and PRIME-RL. The
            predictive agent learns real outcome prediction and still loses, and the write-up
            isolates exactly which part of its protocol costs it.
          </p>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
