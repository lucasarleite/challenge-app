import React from 'react';

const Table = (props) => {

  const { list } = props;

  const getRows = (tasks) => {
    if (!(tasks instanceof Array) || !tasks.length) {
      return [];
    }
    return tasks.map(task => {
      return (
        <tr key={ task.id }>
          <th scope="row">{ task.id }</th>
          <td>{ task.text }</td>
          <td>{ task.completed.toString() }</td>
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
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