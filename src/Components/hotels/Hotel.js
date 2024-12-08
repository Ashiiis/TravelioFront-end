import React from 'react';
import './Hotel.css';
import HotelCard from './HotelCard';
import hotels from './hoteldata'; // Import hotel data
import { midRangeHotels } from './hoteldata';
import { normalRangeHotels } from './hoteldata';
function Hotel() {
  return (
    <div className="hotel-container">
      <h2>Luxury Hotels</h2>
      <div className="hotel-scroll">
        {hotels.filter(hotel => hotel.category === 'Luxury').map((hotel, index) => (
          <HotelCard 
            key={index} 
            name={hotel.name} 
            location={hotel.location} 
            description={hotel.description} 
            website={hotel.website}
          />
        ))}
      </div>

      <h2>Mid-Range Hotels</h2>
      <div className="hotel-scroll">
        {midRangeHotels.filter(hotel => hotel.category === 'Mid-range').map((hotel, index) => (
          <HotelCard 
            key={index} 
            name={hotel.name} 
            location={hotel.location} 
            description={hotel.description} 
            website={hotel.website}
          />
        ))}
      </div>

      <h2>Normal Hotels</h2>
      <div className="hotel-scroll">
        {normalRangeHotels.filter(hotel => hotel.category === 'Normal').map((hotel, index) => (
          <HotelCard 
            key={index} 
            name={hotel.name} 
            location={hotel.location} 
            description={hotel.description} 
            website={hotel.website}
          />
        ))}
      </div>
    </div>
  );
}

export default Hotel;
