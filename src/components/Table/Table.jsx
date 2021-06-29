import React, { useEffect } from 'react';

import './Table.css';

const Table = (props) => {

  const { list, refreshCallback } = props;

  const getRows = (tasks) => {
    if (!(tasks instanceof Array) || !tasks.length) {
      return (
        <tr>
          <td
            className="empty"
            colSpan="3"
          >No tasks available.</td>
        </tr>
      );
    }
    return tasks.map(task => {
      return (
        <tr key={ task.id }>
          <th scope="row">{ task.id }</th>
          <td>{ task.text }</td>
          <td className={ task.completed ? 'done' : 'todo' }>
            <i className={ task.completed ? 'bi bi-check-square' : 'bi bi-x-square' } />
          </td>
        </tr>
      );
    });
  };

  if (typeof refreshCallback !== 'function') {
    return null;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <button 
              className="refresh"
              onClick={refreshCallback}
              title="Refresh Tasks"
            >
              <i className="bi bi-arrow-counterclockwise" />
            </button>
          </th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        { getRows(list) }
      </tbody>
    </table>
  );
}

export default Table;