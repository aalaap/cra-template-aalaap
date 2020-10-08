import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders edit instruction", () => {
  render(<App />);
  const editElement = screen.getByText(
    /Edit src\/App\.js and save to reload\./i
  );
  expect(editElement).toBeInTheDocument();
});
