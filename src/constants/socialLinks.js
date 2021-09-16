import React from 'react';
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin
} from 'react-icons/fa';

const socialLinks = [
  {
    id: 1,
    icon: <FaGithubSquare className="social__icon"></FaGithubSquare>,
    url: 'https://github.com/bevernicholas'
  },
  {
    id: 2,
    icon: <FaLinkedin className="social__icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/nick-bever-8281b6139/'
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social__icon"></FaTwitterSquare>,
    url: 'https://twitter.com/NicholasBever'
  }
];

export default socialLinks;