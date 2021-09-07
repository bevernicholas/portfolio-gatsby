import React from 'react';
import Card from './Card';

import services from '../constants/services';

import './Services.scss';

const Services = () => (
  <div className="services">
    {services.map(service => {
      const {id, title, text} = service;
      return <Card id={id} title={title} text={text} />
    })}
  </div>
);

export default Services;
