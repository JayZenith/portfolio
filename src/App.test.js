import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and sections', () => {
  render(<App />);
  expect(screen.getByText(/I post-train LLM agents against real software/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'GLYPH' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Raw evals' })).toHaveAttribute(
    'href',
    'https://huggingface.co/datasets/JayZenith/Glyph-RLVR-Eval-Results'
  );
  expect(screen.getByText(/every positive CI includes zero/i)).toBeInTheDocument();
});
