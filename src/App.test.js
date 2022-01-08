import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coming soon message", () => {
  render(<App />);
  const h1Element = screen.getByText(/Hiya! Dev Miller/i);
  expect(h1Element).toBeInTheDocument();
});
