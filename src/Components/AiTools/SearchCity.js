import React, { useState } from 'react';

const SearchCity = () => {
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
        <div>
            <input 
                type="text" 
                value={cityName} 
                onChange={handleInputChange} 
                placeholder="Enter city name" 
            />
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div>
                    <h2>Places</h2>
                    {data.grouped_places ? (
                        <ul>
                            {data.grouped_places.map((place, index) => (
                                <li key={index}>
                                    <h3>{place.city}</h3>
                                    <p>Rating: {place.G_rating}</p>
                                    <p>Reviews: {place.reviews}</p>
                                    <p>Fee: {place.fee}</p>
                                    <p>Significance: {place.significance}</p>
                                    {place.place_img && <img src={place.place_img} alt="Place" width="100" />}
                                    {place.place_img_1 && <img src={place.place_img_1} alt="Place" width="100" />}
                                    {place.place_img_2 && <img src={place.place_img_2} alt="Place" width="100" />}
                                    {place.place_img_3 && <img src={place.place_img_3} alt="Place" width="100" />}
                                    {place.place_img_4 && <img src={place.place_img_4} alt="Place" width="100" />}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No places found.</p>
                    )}

                    <h2>Hotels</h2>
                    {data.hotel_data ? (
                        <ul>
                            {data.hotel_data.map((hotel, index) => (
                                <li key={index}>
                                    <h3>{hotel.Predicted_Hotel_Name}</h3>
                                    <p>Price: {hotel.hotel_price}</p>
                                    <p>Stars: {hotel.stars}</p>
                                    <p>Rating: {hotel.hotel_rating}</p>
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
};

export default SearchCity;
