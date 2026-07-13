import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and sections', () => {
  render(<App />);
  expect(screen.getByText(/I build post-training and evaluation systems/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'GLYPH' })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Key lessons from building GLYPH' })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'One verifier gap' })).toBeInTheDocument();
  expect(screen.getByText(/Before \(spec-correct\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Spec: violated. Verifier: blind./i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Full trace →' })).toHaveAttribute(
    'href',
    'https://jayzenith.github.io/GLYPH/#full-verifier-gap-trace'
  );
  expect(screen.getByText(/Each model has one role in the comparison/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'What the evidence says' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Next: isolate the bottleneck' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Methodology →' })).toHaveAttribute(
    'href',
    'https://jayzenith.github.io/GLYPH/#methodology'
  );
  expect(
    screen.getByRole('heading', { name: 'use GLYPH on Prime Intellect Environments Hub' })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'TUI demo' })).toHaveAttribute(
    'href',
    'https://github.com/JayZenith/GLYPH#interactive-tui-smoke-test'
  );
  expect(screen.getByRole('link', { name: 'Raw evals' })).toHaveAttribute(
    'href',
    'https://huggingface.co/datasets/JayZenith/Glyph-RLVR-Eval-Results'
  );
  expect(screen.queryByRole('link', { name: 'llama.cpp' })).not.toBeInTheDocument();
});
