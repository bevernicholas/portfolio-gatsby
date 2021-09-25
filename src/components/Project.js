import React from 'react';
import Image from 'gatsby-image';

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
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </div>
);

export default Project;