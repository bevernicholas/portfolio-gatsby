import React from 'react';
import { TiChevronRight } from 'react-icons/ti'

import './Experience.scss';

const Jobs = () => (
  <div className="experience">
    <div className="u-center-text experience__heading">
      <h2 className="heading-secondary">Experience</h2>
      <div className="heading-secondary__underline"></div>
    </div>
    <div className="experience__item">
      <div className="experience__title">
        <h4>Software Development Engineer II</h4>
        <p className="company">Stackline</p>
        <p>December 2020 - Present</p>
        <div className="heading-secondary__underline"></div>
      </div>
      <div className="experience__description">
        <TiChevronRight className="experience__icon"></TiChevronRight>
        <p>Designed, implemented, and maintained RESTful APIs using Express.js and ASP.NET Core</p>
      </div>
      <div className="experience__description">
        <TiChevronRight className="experience__icon"></TiChevronRight>
        <p>Created intuitive data visualizations using d3 and Highchart in React.js</p>
      </div>
      <div className="experience__description">
        <TiChevronRight className="experience__icon"></TiChevronRight>
        <p>Utilized Apache Spark and AWS EMR to transform large datasets and write to S3 and Elasticsearch</p>
      </div>
      <div className="experience__description">
        <TiChevronRight className="experience__icon"></TiChevronRight>
        <p>Hands on experience with AWS ECS, S3, EMR, SQS, SNS, Redshift, Athena, and Elasticsearch</p>
      </div>
    </div>
    <div className="experience__item">SDE 1 </div>
    <div className="experience__item">BI Engineer </div>
  </div>
);

export default Jobs;