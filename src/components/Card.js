import React from 'react';

import './Card.scss';

const Card = ({ title }) => (
  <div className="card">
    <h1 className="card__heading">{title}</h1>
    <div className="card__underline"></div>
    <div className="details"></div>
  </div>
);

export default Card;
