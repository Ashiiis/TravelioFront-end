import React, { useState } from 'react';
import axios from 'axios';

const SearchDescription = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchTerm) {
      setError('Please enter a search term');
      return;
    }
    
    try {
      setError('');
      // Replace 'YOUR_API_KEY' and 'GEMINI_API_ENDPOINT' with actual values from the Gemini AI API documentation
      const response = await axios.get('https://api.gemini.ai/search', {
        params: {
          query: searchTerm,
          apiKey: `AIzaSyDn0G-X1mN1D7k8IaDlLz685KtHldq0bY4`,
        },
      });

      // Assuming the response contains a `description` field for the searched data
      setDescription(response.data.description || 'No description found for this term.');
    } catch (err) {
      setError('Failed to fetch description, please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Search for a description</h1>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
      {error && <p style={styles.error}>{error}</p>}
      {description && <p style={styles.description}>{description}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  input: {
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    margin: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  description: {
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default SearchDescription;
