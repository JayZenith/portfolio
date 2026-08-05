import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and the PREDICT section', () => {
  render(<App />);
  expect(screen.getByText(/I build post-training and evaluation systems/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'PREDICT' })).toBeInTheDocument();
  expect(screen.getByText(/Making a coding agent predict the outcome of its environment/i))
    .toBeInTheDocument();
  expect(screen.getByRole('img', { name: /Arm A versus Arm B execution flow/i }))
    .toBeInTheDocument();
});

test('links out to the full write-up and the code', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Full write-up' })).toHaveAttribute(
    'href',
    'https://jayzenith.github.io/PREDICT/'
  );
  expect(screen.getByRole('link', { name: 'Code' })).toHaveAttribute(
    'href',
    'https://github.com/JayZenith/PREDICT'
  );
  expect(
    screen.getByRole('link', {
      name: /Full write-up: architecture, data, every statistical test, training curves/i,
    })
  ).toHaveAttribute('href', 'https://jayzenith.github.io/PREDICT/');
});

test('drops the detailed results prose in favor of the write-up link', () => {
  render(<App />);
  expect(screen.queryByText(/RLVR improves both arms/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/verifier gap/i)).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'GLYPH' })).not.toBeInTheDocument();
});
