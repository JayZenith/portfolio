import React from 'react';

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' },
];

const predictLinks = [
  { label: 'Full write-up', href: 'https://jayzenith.github.io/PREDICT/' },
  { label: 'Code', href: 'https://github.com/JayZenith/PREDICT' },
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
          environments, verifiable rewards, and RL training infrastructure. My work below.
        </p>
      </header>

      <section className="project-section">
        <div className="section-title">
          <h2>PREDICT</h2>
          <div className="project-links">
            {predictLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        <article className="project-copy">
          <p>
            An early-stage experiment testing one question: can a coding agent predict its own
            patch's fate before running it, grounded only in what the environment actually
            verifies, never its own guess?{' '}
            <ExternalLink href="https://jayzenith.github.io/PREDICT/">
              Read the full write-up →
            </ExternalLink>
          </p>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
