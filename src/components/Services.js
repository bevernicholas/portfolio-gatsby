import React from 'react';
import Card from './Card';

import services from '../constants/services';

import './Services.scss';

const Services = () => (
  <div className="services">
    <div className="u-center-text services__heading">
      <h2 className="heading-secondary">Expertise</h2>
      <div className="heading-secondary__underline"></div>
    </div>
    {services.map(service => {
      const {id, title, text} = service;
      return <Card id={id} title={title} text={text} />
    })}
  </div>
);

export default Services;
