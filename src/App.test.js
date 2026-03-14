import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro and sections', () => {
  render(<App />);
  expect(screen.getByText(/I work on the parts of LLM systems that decide whether they run fast/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Selected work/i })).toBeInTheDocument();
});
