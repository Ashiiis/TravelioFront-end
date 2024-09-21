import React, { useState } from 'react';
import './Plantrip.css';

export default function Plantrip() {
  
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = async () => {
    if (!cityName) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/get-data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city_name: cityName }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='plan'>
      <h1>Hi, I'm your AI Support</h1> 
      <div className="searchbar-ai">
        <input
        id = 'search'
          type="text"
          placeholder="Just tell me where you want to go..."
          value={cityName}
          onChange={handleInputChange}
        />
        <button id='searchbtn2' onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {data && (
        <div>
          <h2>{cityName}</h2>

          {/* Display places in separate cards */}
          <h2>Places</h2>
            {data.grouped_places ? (
              <div className="card-container1">
                {data.grouped_places.map((place, index) => (
                  // Conditionally render the card only if the place name is not 'Unknown'
                  place.name && place.name !== 'unknown' ? (
                    <div className="card-ai" key={index}>
                      <div className="card-content1">
                        <div className="card-left"> {/* Left side for city details */}
                          <h3>{place.name ? place.name : place.city}</h3>
                          <p>Rating: {place.G_rating}</p>
                          <p>Reviews: {place.reviews}</p>
                          <p>Fee: {place.fee}</p>
                          <p>Significance: {place.significance}</p>
                        </div>
                        <div className="card-right"> {/* Right side for images */}
                          {place.place_img && <img src={place.place_img} alt="Place" className="card-image" />}
                          {place.place_img_1 && <img src={place.place_img_1} alt="Place" className="card-image" />}
                          {place.place_img_2 && <img src={place.place_img_2} alt="Place" className="card-image" />}
                          {place.place_img_3 && <img src={place.place_img_3} alt="Place" className="card-image" />}
                          {place.place_img_4 && <img src={place.place_img_4} alt="Place" className="card-image" />}
                        </div>
                      </div>
                    </div>
                  ) : null // Do not render card if name is 'Unknown'
                ))}
              </div>
            ):(
              <p>No places found.</p>
            )}            


          {/* Display available hotels */}
          <h2>Hotels</h2>
          {data.hotel_data ? (
            <ul>
              {data.hotel_data.map((hotel, index) => (
                <li key={index}>
                  <div className='card-content2'>
                  <h3>{hotel.Predicted_Hotel_Name}</h3>
                  <p>Price: {hotel.hotel_price}</p>
                  <p>Stars: {hotel.stars}</p>
                  <p>Rating: {hotel.hotel_rating}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hotels found.</p>
          )}
        </div>
      )}
    </div>
  );
}
