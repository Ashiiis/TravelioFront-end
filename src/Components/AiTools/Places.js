// src/components/Places.js

import React from 'react';
import './Places.css';

export default function Places({ img, description, hotels }) {
  return (
    <div>
      <div className="card">
        <img src={img} alt="Location" className="card-image" />
        <div className="card-content">
          <h2>{description}</h2>
          <div className="hotels-list">
            {hotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.img} alt={hotel.name} className="hotel-image" />
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <p>{hotel.description}</p>
                  <p>Contact: {hotel.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
