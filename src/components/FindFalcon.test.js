import { FindFalcon } from "./FindFalcon";
import { render, screen } from "@testing-library/react";

test("Naive test that doesn't work", () => {
  const { container, getByText } = render(<FindFalcon />);
  // expect(screen.getByText("Your favorite color is Red")).toBeInTheDocument();
  // fireEvent.click(screen.getByText("Red"));
  // fireEvent.click(screen.getByText("Green"));
  // expect(screen.getByText("Your favorite color is Green")).toBeInTheDocument();
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
