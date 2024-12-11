import React, { useState } from 'react';
import axios from 'axios';

const LocationInput = () => {
    const [city, setCity] = useState('');
    const [locationSubmitted, setLocationSubmitted] = useState(false);
    const [matchingUsers, setMatchingUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Handle location submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.post(
                'https://travel-chat-3.onrender.com/guide/location/',  // API endpoint
                { city },  // Send only city
                { headers: { Authorization: `Token ${token}` } }
            );
            console.log('Location updated:', response.data);
            setLocationSubmitted(true); // Show Find Help button after location is submitted
        } catch (error) {
            console.error('Error updating location:', error.response.data);
        }
    };

    // Handle finding matching users
    const handleFindHelp = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(
                'https://travel-chat-3.onrender.com/guide/match-users/',
                { headers: { Authorization: `Token ${token}` } }
            );
            const users = response.data;
    
            // Debugging: Log the matching users response
            console.log("Matching Users:", users);
    
            if (users.length > 0) {
                setMatchingUsers(users);
                setErrorMessage('');
            } else {
                setMatchingUsers([]);
                setErrorMessage('No partner available for now');
            }
        } catch (error) {
            console.error('Error fetching matching users:', error.response.data);
            setErrorMessage('An error occurred while finding help.');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                </label>
                <button type="submit">Update Location</button>
            </form>

            {locationSubmitted && (
                <div>
                    <button onClick={handleFindHelp} disabled={loading}type="submit">find
                        {loading ? 'Searching...' : 'Find Help'}
                        
                    </button>
                </div>
            )}

            {errorMessage && <p>{errorMessage}</p>}
            {matchingUsers.length > 0 && (
                <div>
                    <h2>Users in Your Location</h2>
                    <ul>
                        {matchingUsers.map((user, index) => (
                            <li key={index}>{user.username} (City: {user.city})</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LocationInput;
