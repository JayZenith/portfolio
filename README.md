# Jay Zenith — portfolio

React portfolio focused on LLM post-training, verifiable-reward environments,
agent evaluation, and systems work. The primary case study is
[PREDICT](https://github.com/JayZenith/PREDICT), an early-stage RLVR
experiment testing whether a coding agent can predict its own patch's fate
before running it, grounded only in what the environment verifies.

## Local development

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

The Netlify configuration serves the React application for every route.
PREDICT claims link to the deployed write-up, raw evaluation traces, model
checkpoints, and the reproduction guide.
