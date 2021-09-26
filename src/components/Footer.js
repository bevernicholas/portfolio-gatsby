import React from 'react';
import { Link } from 'gatsby';
import socialLinks from '../constants/socialLinks';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__social-links">
      <ul className="footer__social-links--list">
        {socialLinks.map((socialLink) => (
          <li id={socialLink.id}>
            <a href={socialLink.url}>{socialLink.icon}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="footer__nav">
      <ul className="footer__nav--list">
        <li className="footer__nav--item">
          <Link>Home</Link>
        </li>
        <li className="footer__nav--item">
          <Link>About</Link>
        </li>
        <li className="footer__nav--item">
          <Link>Projects</Link>
        </li>
        <li className="footer__nav--item">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
    <div className="footer__desc">
      <p>Built and designed by Nicholas Bever</p>
    </div>
  </div>
);

export default Footer;