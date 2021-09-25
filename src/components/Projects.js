import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './Project';
import { projects } from '../constants/projects';

import './Projects.scss';

const query = graphql`
  {
	project1: allFile(filter: {relativePath: {eq: "altumcode-project1.jpg"}}) {
		nodes {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  project2: allFile(filter: {relativePath: {eq: "james-harrison-project2.jpg"}}) {
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
  const imageData = useStaticQuery(query);
  console.log(imageData);

  return (
    <div className="projects">
      <div className="u-center-text projects__heading">
        <h2 className="heading-secondary">Featured Projects</h2>
        <div className="heading-secondary__underline"></div>
      </div>
      {projects.map((project, indx) => {
        const image = imageData[project.imageName];
        return <Project key={indx} project={project} projectImage={image}/>
      })}
    </div>
  )
};

export default Projects;