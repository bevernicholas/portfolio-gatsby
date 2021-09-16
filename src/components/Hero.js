import React from 'react';
import socialLinks from '../constants/socialLinks';

import './Hero.scss';

const Hero = () => (
  <div className="hero">
    <div className="hero__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          <span className="heading-primary--leter">N</span>icholas
        </span>
        <span className="heading-primary--main">
          <span className="heading-primary--leter">B</span>ever
        </span>
        <span className="heading-primary--sub">
          Software Development Engineer
        </span>
      </h1>
    </div>
    <div className="social">
      <ul className="social__links">{socialLinks.map(socialLink => (
        <li id={socialLink.id} className="social__link">
          <a href={socialLink.url}>{socialLink.icon}</a>
        </li>
      ))}</ul>
    </div>
  </div>
);

export default Hero;