import React, { useEffect, useState } from 'react';
import './temp.css'

function DataProcessingComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/model/api/')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    if (!data || !data.top_10_footfall_cities) {
        return <div>No data available</div>;
    }

    return (
        <div className='Ai-card'>
            <h1>Top 10 Footfall Cities</h1>
            {data.top_10_footfall_cities.map((city, index) => (
                <div className='card1' key={index}>
                    <div>
                        <img src={city.Place_img} alt={`${city.City}`} />
                        {city.Place_img_1 && <img src={city.Place_img_1} alt={`${city.City} - 1`} />}
                        {city.Place_img_2 && <img src={city.Place_img_2} alt={`${city.City} - 2`} />}
                        {city.Place_img_3 && <img src={city.Place_img_3} alt={`${city.City} - 3`} />}
                        {city.Place_img_4 && <img src={city.Place_img_4} alt={`${city.City} - 4`} />}
                    </div>
                    <div>
                        <h2>{city.City}, {city.State}</h2>
                        <p>Reviews: {city.reviews}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DataProcessingComponent;
