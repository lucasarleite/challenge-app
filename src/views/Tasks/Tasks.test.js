import React from "react";
import axios from "axios";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tasks from "./Tasks";

jest.mock("axios");

describe("Banner tests", () => {
  test("it should not throw", () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
    const history = createMemoryHistory();
    expect(() =>
      render(
        <Router history={history}>
          <Tasks />
        </Router>
      )
    ).not.toThrow();
  });

  test("it should get tasks from api on render", async () => {
    const list = [
      {
        id: 0,
        text: "task 1",
        completed: false,
      },
    ];

    const history = createMemoryHistory();
    history.push("/tasks");
    const promise = Promise.resolve({ data: list });
    axios.get.mockImplementationOnce(() => promise);

    let component;
    await act(async () => {
      component = render(
        <Router history={history}>
          <Tasks />
        </Router>
      );
    });

    const task = screen.getByText("task 1");
    expect(task).toBeInTheDocument();
  });

  test("it should not get tasks from api if page isnt /tasks", async () => {
    const list = [
      {
        id: 0,
        text: "task 1",
        completed: false,
      },
    ];

    const history = createMemoryHistory();
    history.push("/");
    const promise = Promise.resolve({ data: list });
    axios.get.mockImplementationOnce(() => promise);

    let component;
    await act(async () => {
      component = render(
        <Router history={history}>
          <Tasks />
        </Router>
      );
    });

    expect(() => screen.getByText("task 1")).toThrow();
  });

  test("it should set an empty list of tasks if api rejects call", async () => {
    const list = [
      {
        id: 0,
        text: "task 1",
        completed: false,
      },
    ];

    const history = createMemoryHistory();
    history.push("/tasks");
    const promise = Promise.reject({});
    axios.get.mockImplementationOnce(() => promise);

    let component;
    await act(async () => {
      component = render(
        <Router history={history}>
          <Tasks />
        </Router>
      );
    });

    const noTasks = screen.getByText("No tasks available.");
    expect(noTasks).toBeInTheDocument();
  });

  test("it should not set list of tasks if api rejects call and page isnt /tasks", async () => {
    const list = [
      {
        id: 0,
        text: "task 1",
        completed: false,
      },
    ];

    const history = createMemoryHistory();
    history.push("/");
    const promise = Promise.reject({});
    axios.get.mockImplementationOnce(() => promise);

    let component;
    await act(async () => {
      component = render(
        <Router history={history}>
          <Tasks />
        </Router>
      );
    });

    const noTasks = screen.getByText("No tasks available.");
    expect(noTasks).toBeInTheDocument();
  });

  test("it should get tasks from api when refresh button is clicked", async () => {
    const history = createMemoryHistory();
    history.push("/tasks");

    const promise = Promise.resolve({ data: [] });
    axios.get.mockImplementationOnce(() => promise);

    let component;
    await act(async () => {
      component = render(
        <Router history={history}>
          <Tasks />
        </Router>
      );
    });

    const noTasks = screen.getByText("No tasks available.");
    expect(noTasks).toBeInTheDocument();

    const list = [
      {
        id: 0,
        text: "task 1",
        completed: false,
      },
    ];
    const promise2 = Promise.resolve({ data: list });
    axios.get.mockImplementationOnce(() => promise2);

    await act(async () => {
      const refreshButton = document.querySelector("button.refresh");
      userEvent.click(refreshButton);
    });

    expect(() => screen.getByText("No tasks available.")).toThrow();
  });
});
