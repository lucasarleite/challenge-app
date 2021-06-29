import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home tests", () => {
  test("it should not throw", () => {
    expect(() => render(<Home />)).not.toThrow();
  });

  test("it should render 'Welcome' title", () => {
    render(<Home />);
    const title = screen.getByText("Welcome!");
    expect(title).toBeInTheDocument();
  });
});
