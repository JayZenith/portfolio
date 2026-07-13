import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and sections', () => {
  render(<App />);
  expect(screen.getByText(/I build post-training and evaluation systems/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'GLYPH' })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Key lessons from building GLYPH' })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Explore RLVR model traces' })).toBeInTheDocument();
  const traceSelector = screen.getByRole('combobox', { name: 'Choose a trace' });
  expect(traceSelector).toHaveValue('0');
  expect(screen.getByText(/Verifier-gap example:/i)).toBeInTheDocument();
  fireEvent.change(traceSelector, { target: { value: '1' } });
  expect(traceSelector).toHaveValue('1');
  expect(screen.getByText(/missing shared-rank behavior/i)).toBeInTheDocument();
  expect(screen.getByText(/Each model has one role in the comparison/i)).toBeInTheDocument();
  expect(screen.getByText(/Working explanation:/i)).toBeInTheDocument();
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
