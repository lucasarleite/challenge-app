import React from 'react';

import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="selected">
          Home
        </li>
        <li>
          Tasks
        </li>
      </ul>
    </nav>
  )
}

export default Menu;