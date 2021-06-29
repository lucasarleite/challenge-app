import React from 'react';
import { Link, useLocation } from "react-router-dom";

import './Menu.css';

const Menu = () => {

  const currLocation = useLocation().pathname;

  return (
    <nav className="menu">
      <ul>
        <Link to="/">
            <li className={ currLocation === "/" ? 'selected' : '' }>
              Home
            </li>
        </Link>
        <Link to="/tasks">
          <li className={ currLocation === "/tasks" ? 'selected' : '' }>
            Tasks
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Menu;