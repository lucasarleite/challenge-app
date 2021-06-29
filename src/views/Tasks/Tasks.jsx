import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '../../components/Table/Table';

const Tasks = () => {

  const [ list, setList ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(tasks => setList(tasks.data))
      .catch(e => {
        setList([]);
        console.log(e);
      });
  }, []);

  return (
    <div className="tasks">
      <h1 className="title">Tasks</h1>
      <Table list={list} />
    </div>
  );
}

export default Tasks;