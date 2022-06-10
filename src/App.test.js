import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* test('have list ', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});

test('renders title', () => {
  render(<App />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument(3);
});

test('sum should be 5', () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("5");
}); */