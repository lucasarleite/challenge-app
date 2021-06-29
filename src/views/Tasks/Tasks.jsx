import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

import Table from '../../components/Table/Table';

const Tasks = () => {

  const [ list, setList ] = useState([]);
  const currLocation = useLocation().pathname;

  const refreshTasks = useCallback(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(tasks => {
        if (currLocation === '/tasks') {
          setList(tasks.data);
        }
      })
      .catch(e => {
        if (currLocation === '/tasks') {
          setList([]);
        }
        console.log(e);
      });
  }, [currLocation]);

  useEffect(() => {
    refreshTasks();
  }, [refreshTasks]);

  return (
    <div className="tasks">
      <h1 className="title">Tasks</h1>
      <Table list={list} refreshCallback={refreshTasks}/>
    </div>
  );
}

export default Tasks;