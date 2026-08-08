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

          <div className="diagram-wrap">
            <svg viewBox="0 0 1000 600" role="img" aria-label="Arm A versus Arm B execution flow">
              <defs>
                <marker id="port-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="#93a897" />
                </marker>
                <marker id="port-arrow-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" />
                </marker>
              </defs>

              <text x="180" y="24" textAnchor="middle" fill="#00d17a" fontSize="17" fontWeight="600">Arm A: test-and-recover</text>
              <text x="660" y="24" textAnchor="middle" fill="#39ff14" fontSize="17" fontWeight="600">Arm B: predict-and-decide</text>

              <rect x="60" y="46" width="240" height="50" rx="7" fill="#080d09" stroke="#00d17a" strokeWidth="1.6" />
              <text x="180" y="76" textAnchor="middle" fill="#00d17a" fontSize="16" fontWeight="600">read_file</text>
              <rect x="60" y="130" width="240" height="50" rx="7" fill="#080d09" stroke="#00d17a" strokeWidth="1.6" />
              <text x="180" y="160" textAnchor="middle" fill="#00d17a" fontSize="16" fontWeight="600">apply_patch</text>
              <rect x="60" y="214" width="240" height="50" rx="7" fill="#080d09" stroke="#00d17a" strokeWidth="1.6" />
              <text x="180" y="244" textAnchor="middle" fill="#00d17a" fontSize="16" fontWeight="600">python_test</text>
              <rect x="60" y="340" width="110" height="50" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="1.6" />
              <text x="115" y="370" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">pass</text>
              <rect x="190" y="340" width="110" height="50" rx="7" fill="#080d09" stroke="#ef4444" strokeWidth="1.6" />
              <text x="245" y="370" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="600">fail</text>
              <rect x="60" y="430" width="240" height="46" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="2" />
              <text x="180" y="458" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">FINAL</text>
              <path d="M180,96 L180,130" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M180,180 L180,214" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M150,264 L115,340" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M210,264 L245,340" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M115,390 L150,430" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M300,365 C 350,365 350,155 302,155" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <text x="378" y="252" textAnchor="middle" fill="#a3bba8" fontSize="13">recovery loop:</text>
              <text x="378" y="268" textAnchor="middle" fill="#a3bba8" fontSize="13">fix & retest</text>

              <rect x="540" y="46" width="240" height="50" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="1.6" />
              <text x="660" y="76" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">read_file</text>
              <rect x="540" y="130" width="240" height="50" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="1.6" />
              <text x="660" y="160" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">apply_patch</text>
              <rect x="540" y="214" width="240" height="58" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="1.6" />
              <text x="660" y="242" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">PREDICTION</text>
              <text x="660" y="260" textAnchor="middle" fill="#a3bba8" fontSize="13">{'<PREDICTION> + <DECISION>'}</text>
              <rect x="540" y="322" width="110" height="50" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="1.6" />
              <text x="595" y="352" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">KEEP</text>
              <rect x="670" y="322" width="110" height="50" rx="7" fill="#080d09" stroke="#ef4444" strokeWidth="1.6" />
              <text x="725" y="352" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="600">REVISE</text>
              <rect x="540" y="406" width="110" height="58" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="1.6" />
              <text x="595" y="434" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">python_test</text>
              <text x="595" y="452" textAnchor="middle" fill="#a3bba8" fontSize="13">visible</text>
              <rect x="670" y="406" width="110" height="58" rx="7" fill="#080d09" stroke="#ef4444" strokeWidth="1.6" />
              <text x="725" y="434" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="600">shadow test</text>
              <text x="725" y="452" textAnchor="middle" fill="#a3bba8" fontSize="13">hidden</text>
              <rect x="540" y="520" width="240" height="46" rx="7" fill="#080d09" stroke="#39ff14" strokeWidth="2" />
              <text x="660" y="548" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="600">FINAL</text>
              <path d="M660,96 L660,130" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M660,180 L660,214" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M630,272 L595,322" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M690,272 L725,322" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M595,372 L595,406" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M725,372 L725,406" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M595,464 L630,520" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" />
              <path d="M780,435 C 838,435 838,155 782,155" stroke="#93a897" strokeWidth="1.6" markerEnd="url(#port-arrow)" fill="none" strokeDasharray="5 4" />
              <text x="918" y="288" textAnchor="middle" fill="#a3bba8" fontSize="13">shadow recovery:</text>
              <text x="918" y="306" textAnchor="middle" fill="#a3bba8" fontSize="13">caught before the</text>
              <text x="918" y="324" textAnchor="middle" fill="#a3bba8" fontSize="13">real test ran</text>
              <path d="M540,435 C 482,435 482,155 538,155" stroke="#ef4444" strokeWidth="1.6" markerEnd="url(#port-arrow-r)" fill="none" strokeDasharray="5 4" opacity="0.9" />
              <text x="416" y="378" textAnchor="middle" fill="#ef4444" fontSize="13">visible recovery:</text>
              <text x="416" y="396" textAnchor="middle" fill="#ef4444" fontSize="13">the prediction</text>
              <text x="416" y="414" textAnchor="middle" fill="#ef4444" fontSize="13">was wrong</text>
            </svg>
          </div>
        </article>
      </section>
    </main>
  );
}

export default MainPage;
