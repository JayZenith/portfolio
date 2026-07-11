# Jay Zenith — portfolio

React portfolio focused on LLM post-training, verifiable-reward environments,
agent evaluation, and systems work. The primary case study is
[GLYPH](https://github.com/JayZenith/GLYPH), an audited Rust tool-use RLVR stack.

## Local development

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

The Netlify configuration serves the React application for every route. GLYPH
claims link to the deployed write-up, raw evaluation traces, model artifacts,
and the repository's provenance manifest.
