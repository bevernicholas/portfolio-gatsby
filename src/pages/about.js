import React from 'react';
import Layout from '../components/Layout';

import '../styles/_about.scss';

const About = () => (
  <Layout>
    <div className="about">
      <div className="about__header">
        <h1 className="about__header-text">Nicholas Bever</h1>
        <div className="about__header-underline"></div>
      </div>
      <div className="about__description">
        <p className="about__description-text">
          Hello! My name is Nicholas Bever, and I am Software Engineer located in Seattle, WA.  I am passionate about creating dynamic user experiences, full scale applications in React, and REST APIs in Node.js, C#, and Python.
        </p>
        <p className="about__description-text">
          My interest in software development began in 2017 when I began teaching myself Python to more effectively work with large data sets as a business associate. Fast-forward to today and my curiosity has taken me far beyond my initial interest of manipulating large data sets using Python. As a Software Engineer at Stackline I have created and contributed to numerous data pipelines in Node.js, .NET Core, and Spark, created full scale applications using React, developed REST APIs using Express.js and ASP.NET Core, and leveraged numerous AWS technologies such as Lambda, ECS, DynamoDB, and EMR.
        </p>
      </div>
    </div>
  </Layout>
);

export default About;