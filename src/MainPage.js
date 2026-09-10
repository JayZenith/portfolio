import React from 'react';

const profileLinks = [
  { label: 'github', href: 'https://github.com/JayZenith' },
  { label: 'huggingface', href: 'https://huggingface.co/JayZenith' },
  { label: 'x', href: 'https://twitter.com/jayz3nith' },
];

const predictLinks = [
  { label: 'writeup', href: 'https://jayzenith.github.io/PREDICT/' },
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
          I built PREDICT to understand the post-training stack end to end, while testing whether a
          coding agent could learn to evaluate its own patches instead of relying purely on reactive
          tool feedback.
        </p>
        <p>
          Now I’m most intrigued by self-improving agent systems: how they could take on more of the
          research required to improve agent systems themselves, develop better research judgment,
          coordinate and explore across many trajectories, and remain understandable and aligned as
          that capability compounds.
        </p>
      </header>

      <section className="project-section">
        <div className="section-title">
          <h2>
            <a href="https://jayzenith.github.io/PREDICT/" target="_blank" rel="noreferrer">
              PREDICT
            </a>
          </h2>
          <div className="project-links">
            {predictLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}

export default MainPage;
