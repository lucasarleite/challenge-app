import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../../views/Home/Home';
import Tasks from '../../views/Tasks/Tasks';

import './Content.css';

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default Content;