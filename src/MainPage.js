import React from 'react';

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/JayZenith' },
  { label: 'X', href: 'https://twitter.com/jayz3nith' },
];

const predictLinks = [
  { label: 'Code', href: 'https://github.com/JayZenith/PREDICT' },
  { label: 'Writeup', href: 'https://jayzenith.github.io/PREDICT/' },
  { label: 'Arm A checkpoint', href: 'https://huggingface.co/JayZenith/SFT_ARM_A' },
  { label: 'Arm B checkpoint', href: 'https://huggingface.co/JayZenith/SFT_ARM_B' },
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
            verifies, never its own guess? Arm A is the standard loop: patch, test, react, trained
            with plain SFT then RLVR. Arm B shares the exact same harness but predicts the outcome
            first and commits to <code>KEEP</code> or <code>REVISE</code> before it ever sees the
            real result, trained with RLVR on everything else, and its own cross-entropy loss
            straight off the verified label.
          </p>
        </article>
      </section>

      <section className="project-section lessons-section">
        <div className="section-title">
          <h2>Key lessons from building PREDICT</h2>
        </div>
        <div className="lesson-list">
          <article className="lesson-item">
            <h3>A matched comparison isn't an ablation</h3>
            <p>
              Arm A vs. Arm B tests two complete, multi-part systems against each other: the
              predict/decide protocol, the auxiliary loss, and the SFT trace format all change
              together. It can tell you the bundle didn't clearly win; it can't tell you which
              piece mattered.
            </p>
          </article>
          <article className="lesson-item">
            <h3>An auxiliary loss needs its own reward path</h3>
            <p>
              GRPO masks prediction-label tokens out of its own loss by design, leaving a
              low-weight, uniformly-weighted auxiliary cross-entropy term as the only direct
              teacher for that skill. A weak sole teacher produces a weak skill, independent of
              how good the rest of the system is.
            </p>
          </article>
          <article className="lesson-item">
            <h3>One training run is an anecdote</h3>
            <p>
              The first seed made Arm A look ahead at step 100 and significantly ahead at step 25.
              Both effects were seed noise, gone under a second independent run with the same
              setup. Two-seed replication is what turned an appealing headline into a checked
              claim.
            </p>
          </article>
        </div>
      </section>

      <section className="trace-section">
        <div className="section-heading">
          <div>
            <h2>One verifier gap</h2>
            <p className="section-deck">
              Arm B's winning candidate on a held-out test task uses the exact operator the prompt
              forbids, and still scores full reward.
            </p>
          </div>
        </div>
        <article className="verifier-gap-panel">
          <pre className="verifier-gap-diff">Task: multiply two integers <span className="gap-before">without using the * operator</span>{'\n'}
Arm B's winning candidate: <span className="gap-after">z = x * y</span>{'\n'}
Tests: 3/3 pass (asserts check the output, not the operator).{"\n"}
<span className="gap-result">Spec: violated. Verifier: blind.</span></pre>
          <ExternalLink
            className="full-trace-link"
            href="https://jayzenith.github.io/PREDICT/#demo"
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
            Both arms were trained twice, independently, from the same SFT checkpoints with
            different seeds, specifically to check whether any Arm A vs. Arm B gap replicates.
          </p>
          <p className="results-definition">
            Pass@1 on the full 500-task held-out test set, greedy decoding, touched once per
            checkpoint.
          </p>
          <div className="results-table-wrap">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Arm A seed42</th>
                  <th>Arm A seed43</th>
                  <th>Arm B seed42</th>
                  <th>Arm B seed43</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>SFT</td><td>50.6%</td><td>50.6%</td><td>48.2%</td><td>48.2%</td></tr>
                <tr><td>RL 25</td><td>51.4%</td><td>50.4%</td><td>45.2%</td><td>47.8%</td></tr>
                <tr><td>RL 50</td><td>52.2%</td><td>52.8%</td><td>50.0%</td><td>48.6%</td></tr>
                <tr><td>RL 75</td><td>53.6%</td><td>54.8%</td><td>52.6%</td><td>51.2%</td></tr>
                <tr><td>RL 100</td><td>56.4%</td><td>54.2%</td><td>52.0%</td><td>53.6%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="result-note">
            <strong>No checkpoint step shows a statistically confirmed difference between Arm A
            and Arm B (McNemar, p=0.026–0.86).</strong>{' '}
            <ExternalLink href="https://jayzenith.github.io/PREDICT/docs/REPRODUCTION.md#6-statistics">
              Methodology →
            </ExternalLink>
          </p>
          <div className="experiment-summary">
            <h3>What the evidence says</h3>
            <p><strong>RLVR reliably improves both arms.</strong> Each arm improves over its own SFT baseline by step 100, replicated across two independent training runs per arm (Arm A: p=0.0003, p=0.028; Arm B: p=0.033, p=0.0017).</p>
            <p><strong>Whether either design beats the other is unconfirmed.</strong> No checkpoint step shows a difference between Arm A and Arm B that holds up across all four seed combinations.</p>
            <p><strong>Arm B's prediction head has a specific blind spot.</strong> It has not once correctly predicted <code>ASSERTION_FAILURE</code> — the dominant failure mode — despite it being the actual outcome ~57% of the time.</p>

            <h3>Next: harder tests, not just a wider sweep</h3>
            <p>Isolate the one piece that's actually new relative to prior auxiliary-CE work, and get off a single model and benchmark.</p>
            <div className="results-table-wrap">
              <table className="results-table interpretation-table">
                <thead><tr><th>Direction</th><th>Tests</th></tr></thead>
                <tbody>
                  <tr><td>Ablate the gate</td><td>Whether causally gating KEEP/REVISE on the prediction matters at all, versus a pure auxiliary signal</td></tr>
                  <tr><td>Denser prediction target</td><td>Whether a richer target (the specific failing assertion) fixes the blind spot a coarse 6-way label couldn't</td></tr>
                  <tr><td>Causal, not correlational, evaluation</td><td>Whether prediction quality actually drives reward, not just correlates with it</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </section>

      <section className="project-section environment-section">
        <div className="section-title">
          <h2>Full write-up &amp; reproduction</h2>
        </div>
        <article className="project-copy">
          <p>
            Architecture, data composition, training curves, real rollout transcripts, and every
            statistical test are published on the project site, with exact reproduction commands
            and the HF checkpoint map.{' '}
            <ExternalLink href="https://jayzenith.github.io/PREDICT/">
              Read the full report →
            </ExternalLink>
          </p>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
