import React, { useEffect, useState } from 'react';
import './temp.css';

function DataProcessingComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://travel-model.onrender.com/top-10/')
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

    if (!data || !data.top_10_cities) {
        return <div>No data available.</div>;
    }

    return (
        
        <div className='Ai-card'>
            
            {data.top_10_cities.map((city, index) => (
                <div className='card1' key={index}>
                    <div>
                    <img src={city.image} alt="Place" className="card-image" />
                    </div>
                    <div>
                        <h2>{city.city}, {city.State}</h2>
                        <p>Reviews: {city.avg_rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DataProcessingComponent;