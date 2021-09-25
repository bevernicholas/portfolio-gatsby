import React from 'react';
import Image from 'gatsby-image';
import { FaGithubSquare } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

import './Projects.scss';

const Project = ({ project, projectImage }) => (
  <div className="projects__item">
    <div className={`projects__item--img projects__item--img-${project.id}`}>
      <Image
        fluid={projectImage.nodes[0].childImageSharp.fluid}
        alt={`Image for: ${project.projectTitle}`}
        className="projects__img"
      />
    </div>
    <div className={`projects__item--description projects__item--description-${project.id}`}>
      <h3 className="projects__item--title">{project.title}</h3>
      <p>{project.description}</p>
      <ul className="projects__item--links">
        <li className="projects__item--item">
          <a href={project.gitHubLink} className="projects__item--link"><FaGithubSquare className="projects__icon"></FaGithubSquare></a>
        </li>
        <li className="projects__item--item">
          <a href={project.deployedUrl} className="projects__item--link"><HiCode className="projects__icon"></HiCode></a>
        </li>
      </ul>
    </div>
  </div>
);

export default Project;