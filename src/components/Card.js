import React from 'react';

import './Card.scss';

const Card = ({ title, text }) => (
  <div className="card">
    <h1 className="card__heading">{title}</h1>
    <div className="card__underline"></div>
    <div className="card__details">
      <ul>
        {text.map((textItem) => (
          <li>{textItem}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Card;
