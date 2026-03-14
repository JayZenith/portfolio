import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /inference engineer focused on gpu systems, distributed serving, and measurable performance wins/i
    })
  ).toBeInTheDocument();
});
