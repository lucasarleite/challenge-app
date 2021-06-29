import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner tests", () => {
  test("it should render Banner", () => {
    expect(() => render(<Banner />)).not.toThrow();
  });

  test("it should render 'Tasks Manager' title", () => {
    render(<Banner />);
    const title = screen.getByText("Tasks Manager");
    expect(title).toBeInTheDocument();
  });
});
