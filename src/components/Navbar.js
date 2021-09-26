import React from 'react';
import { Link } from 'gatsby';

import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar__list">
      <li className="navbar__item">
        <Link>Home</Link>
      </li>
      <li className="navbar__item">
        <Link>About</Link>
      </li>
      <li className="navbar__item">
        <Link>Projects</Link>
      </li>
      <li className="navbar__item">
        <Link>Contact</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;