
import React from 'react';
import './Hotel.css';

function HotelCard({ name, location, description,  website }) {
  return (
    <div className="hotel-card">
      <h3>{name}</h3>
      <p className="hotel-location">Location: {location}</p>
      <p>{description}</p>
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer" className="hotel-link">
          Visit Website
        </a>
      )}
    </div>
  );
}

export default HotelCard;
