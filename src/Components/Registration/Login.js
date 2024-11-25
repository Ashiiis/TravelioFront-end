import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username_or_email: usernameOrEmail,
      password,
    };

    try {
      const response = await fetch('https://travel-chat-3.onrender.com/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Check for a 200 status code
      if (response.ok) {
        const data = await response.json();

        // Check if the token is returned
        if (data.token) {
          localStorage.clear(); // Clear all items
          localStorage.setItem('authToken', data.token);
          console.log("Token stored:", data.token);
          alert('Login successful');
          // Redirect to the home page
          navigate('/');
        } else {
          alert('Login failed: No token received.');
        }
      } else {
        const data = await response.json();
        alert(`Error: ${data.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username_or_email">Username or Email</label>
          <input
            type="text"
            id="username_or_email"
            placeholder="Enter your username or email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
