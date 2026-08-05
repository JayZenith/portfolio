import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and the PREDICT section', () => {
  render(<App />);
  expect(screen.getByText(/I built PREDICT\./i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'PREDICT' })).toBeInTheDocument();
  expect(screen.getByText(/a predict-and-decide agent \(Arm B\) makes a/i)).toBeInTheDocument();
  expect(screen.getByText(/RLVR beat SFT for both agents/i)).toBeInTheDocument();
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
  expect(screen.queryByText(/McNemar, paired on identical tasks/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/verifier gap/i)).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'GLYPH' })).not.toBeInTheDocument();
});
