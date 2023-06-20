import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;