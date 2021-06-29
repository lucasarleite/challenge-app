import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Menu from "./Menu";

describe("Menu tests", () => {
  test("it should not throw", () => {
    const history = createMemoryHistory();
    expect(() =>
      render(
        <Router history={history}>
          <Menu />
        </Router>
      )
    ).not.toThrow();
  });

  test("it should navigate to tasks", () => {
    const history = createMemoryHistory();
    let testHistory, testLocation;
    render(
      <Router history={history}>
        <Menu />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </Router>
    );

    act(() => {
      userEvent.click(screen.getByText("Tasks"));
    });

    expect(testLocation.pathname).toBe("/tasks");
  });

  test("it should navigate to home", () => {
    const history = createMemoryHistory();
    let testHistory, testLocation;
    render(
      <Router history={history}>
        <Menu />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </Router>
    );

    act(() => {
      userEvent.click(screen.getByText("Home"));
    });

    expect(testLocation.pathname).toBe("/");
  });
});
