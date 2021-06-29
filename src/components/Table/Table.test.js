import React from "react";
import { render, screen } from "@testing-library/react";

import Table from "./Table";

describe("Table tests", () => {
  test("it should not throw", () => {
    expect(() => render(<Table />)).not.toThrow();
  });

  test("it should not render Table if refreshCallback prop isnt function", () => {
    render(<Table />);
    const table = document.querySelector(".table");
    expect(table).not.toBeInTheDocument();
  });

  test("it should not render Table if refreshCallback prop is function", () => {
    render(<Table refreshCallback={() => jest.fn()} />);
    const table = document.querySelector(".table");
    expect(table).toBeInTheDocument();
  });

  test("it should render Table with no rows if list is empty", () => {
    render(<Table list={[]} refreshCallback={() => jest.fn()} />);
    const noTasks = screen.getByText("No tasks available.");
    expect(noTasks).toBeInTheDocument();
  });

  test("it should render Table with 1 row", () => {
    const list = [
      {
        id: 0,
        text: "task 1",
        completed: false,
      },
    ];
    render(<Table list={list} refreshCallback={() => jest.fn()} />);
    const task = screen.getByText("task 1");
    expect(task).toBeInTheDocument();
  });

  test("it should render a todo task", () => {
    const list = [
      {
        id: 0,
        text: "task 1",
        completed: false,
      },
    ];
    render(<Table list={list} refreshCallback={() => jest.fn()} />);
    const task = document.querySelector("td.todo");
    expect(task).toBeInTheDocument();
  });

  test("it should render a done task", () => {
    const list = [
      {
        id: 0,
        text: "task 1",
        completed: true,
      },
    ];
    render(<Table list={list} refreshCallback={() => jest.fn()} />);
    const task = document.querySelector("td.done");
    expect(task).toBeInTheDocument();
  });
});
