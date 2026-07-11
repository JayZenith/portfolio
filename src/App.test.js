import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and sections', () => {
  render(<App />);
  expect(screen.getByText(/I build and evaluate tool-using language models/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'GLYPH' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'specification gaming, in full' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'spec gaming' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Raw evals' })).toHaveAttribute(
    'href',
    'https://huggingface.co/datasets/JayZenith/Glyph-RLVR-Eval-Results'
  );
  expect(screen.queryByRole('link', { name: 'llama.cpp' })).not.toBeInTheDocument();
});
