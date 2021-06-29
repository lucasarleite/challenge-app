import React from 'react';
import { Link } from "react-router-dom";

import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <Link to="/">
            <li className="selected">
              Home
            </li>
        </Link>
        <Link to="/tasks">
          <li>
            Tasks
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Menu;