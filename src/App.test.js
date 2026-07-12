import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and sections', () => {
  render(<App />);
  expect(screen.getByText(/I build post-training and evaluation systems/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'GLYPH' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'RLVR model traces' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'spec gaming' })).toBeInTheDocument();
  expect(screen.getByText(/Specification gaming: the prompt says direct values must win/i)).toBeInTheDocument();
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
