import React from 'react';
import { TiChevronRight } from 'react-icons/ti';
import experience from '../constants/experience';

import './Experience.scss';

const Experience = () => (
  <div className="experience">
    <div className="u-center-text experience__heading">
      <h2 className="heading-secondary">Experience</h2>
      <div className="heading-secondary__underline"></div>
    </div>
    {experience.map((job) => (
      <div id={job.id} className="experience__item">
        <div className="experience__title">
          <h4>{job.title}</h4>
          <p className="company">{job.company}</p>
          <p>{job.duration}</p>
          <div className="heading-secondary__underline"></div>
        </div>
        {job.bullets.map((bullet, i) => (
          <div id={i} className="experience__description">
            <TiChevronRight className="experience__icon"></TiChevronRight>
            <p>{bullet}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Experience;