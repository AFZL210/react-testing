import { render, screen } from '@testing-library/react';
import App from './App';

test('renders users', () => {
  render(<App />);
  

  // check the number of ul is correct or not
  const listElement = screen.getAllByRole('listitem')
  expect(listElement).toHaveLength(2) // or expect(listElement.length).toBe(3) or .toEqual e.t.c
});

test("render sum", () => {
  render(<App />)
  const sum = screen.getByTitle("sum")
  expect(sum.textContent).toEqual("10")
})

test("renders my name", () => {
  render(<App />)
  const user = screen.getByTestId("myTestId")
  expect(user.textContent).toBe("Afzal")
})