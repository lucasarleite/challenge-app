import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';

const Tasks = () => {

  const list = [{"id":0,"text":"Task","completed":false}, {"id":1,"text":"Task 1","completed":true}];

  return (
    <div className="tasks">
      <h1 className="title">Tasks</h1>
      <Table list={list} />
    </div>
  );
}

export default Tasks;