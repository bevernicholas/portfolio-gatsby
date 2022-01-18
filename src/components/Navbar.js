import React from 'react';
import { Link } from 'gatsby';

import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar__list">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">Home</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/about">About</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;