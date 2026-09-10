import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current portfolio bio and PREDICT section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'JAY ZENITH' })).toBeInTheDocument();
  expect(screen.getByText(/I built PREDICT to understand the post-training stack end to end/i)).toBeInTheDocument();
  expect(screen.getByText(/Now I’m most intrigued by self-improving agent systems: how they could take on more of the research/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'PREDICT' })).toBeInTheDocument();
});

test('links to the PREDICT write-up and code', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'writeup' })).toHaveAttribute(
    'href',
    'https://jayzenith.github.io/PREDICT/'
  );
  expect(screen.getByRole('link', { name: 'code' })).toHaveAttribute(
    'href',
    'https://github.com/JayZenith/PREDICT'
  );
});

test('does not render removed detailed results sections', () => {
  render(<App />);
  expect(screen.queryByRole('heading', { name: 'GLYPH' })).not.toBeInTheDocument();
});
