import React from 'react';
import { Link } from 'gatsby';

import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    {/* <ul className="navbar__list">
      <li className="navbar__item">
        <a>Home</a>
        <div className="navbar__underline"></div>
      </li>
      <li className="navbar__item">
        <a>About</a>
        <div className="navbar__underline"></div>
      </li>
      <li className="navbar__item">
        <addEventListener>Projects</addEventListener>
        <div className="navbar__underline"></div>
      </li>
      <li className="navbar__item">
        <a>Contact</a>
        <div className="navbar__underline"></div>
      </li>
    </ul> */}
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