import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import './Projects.scss';

const query = graphql`
  {
    allFile(filter: {relativePath: {eq: "altumcode-project1.jpg"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(query);
  console.log(data);

  return (
    <div className="projects">
      <div className="u-center-text projects__heading">
        <h2 className="heading-secondary">Featured Projects</h2>
        <div className="heading-secondary__underline"></div>
      </div>
      <div className="projects__item">
        <div className="projects__item--img">
          <Image fluid={data.allFile.nodes[0].childImageSharp.fluid} alt="test" className="projects__img"/>
        </div>
        <div className="projects__item--description"></div>
      </div>
    </div>
  )
};

export default Projects;