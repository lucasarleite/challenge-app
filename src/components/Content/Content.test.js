import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";

import Content from "./Content";

describe("Content tests", () => {
  test("it should render Content", () => {
    const history = createMemoryHistory();
    expect(() =>
      render(
        <Router history={history}>
          <Content />
        </Router>
      )
    ).not.toThrow();
  });

  test("it should render Home Route", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Content />
      </Router>
    );
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
  });

  test("it should render Tasks Route", () => {
    const history = createMemoryHistory();
    history.push("/tasks");
    render(
      <Router history={history}>
        <Content />
      </Router>
    );
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });
});
