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
          I build post-training systems for tool-using LLM agents: verifier-based environments, RL
          training infrastructure, and auxiliary learning objectives.
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
              Training an agent to predict the verified outcome of its own actions before executing
              them.
            </strong>
          </p>

          <p>
            PREDICT extends GRPO with auxiliary outcome supervision. A coding agent proposes a
            patch, predicts what will happen if it executes that patch, and commits to KEEP or
            REVISE before seeing the result.
          </p>

          <p>
            After execution, the environment provides the verified outcome. GRPO trains the agent's
            actions; auxiliary cross-entropy trains the earlier prediction against that ground
            truth.
          </p>

          <p>
            Unlike observation-prediction methods such as ECHO, PREDICT's target does not need to
            appear in the rollout itself: verifier ground truth can supervise the prediction made
            before execution.
          </p>

          <p>
            On Qwen3-4B, RL training turned a checkpoint that always predicted{' '}
            <code>PASS</code> into a runtime-error detector reaching{' '}
            <strong>62.5% and 64.1% precision</strong> across two seeds. The broader
            agent-performance advantage is not yet established.
          </p>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
