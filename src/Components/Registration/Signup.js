import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [profilePic, setProfilePic] = useState(null);
  const [backgroundPic, setBackgroundPic] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [locality, setLocality] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');


  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); 
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  const handleBackgroundPicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBackgroundPic(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('houseNumber', houseNumber);
    formData.append('locality', locality);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('pinCode', pinCode);
    if (profilePic) formData.append('profilePic', profilePic);
    if (backgroundPic) formData.append('backgroundPic', backgroundPic);

    try {
      const response = await fetch('http://localhost:8000/services/register/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setAlertMessage('User registered successfully');
        setAlertType('success');
      } else {
        const data = await response.json();
        setAlertMessage(data.detail || 'Something went wrong');
        setAlertType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('Error registering user');
      setAlertType('error');
    }
  };

  return (
    
    <div className="signup-container">
      {alertMessage && (
          <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-error'}`}>
      {alertMessage}
  </div>
)}
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="background-pic-container">
          <div className="background-preview" style={{ backgroundImage: `url(${backgroundPic ? URL.createObjectURL(backgroundPic) : ''})` }}>
            <div className="profile-pic-container">
              <img
                src={profilePic ? URL.createObjectURL(profilePic) : `${process.env.PUBLIC_URL}/assets/default-avatar.png`}
                alt="Profile"
                className="profile-pic"
              />
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="profile-pic-input"
              />
              <label htmlFor="profilePic" className="edit-button">Edit</label>
            </div>
          </div>
          <input
            type="file"
            id="backgroundPic"
            accept="image/*"
            onChange={handleBackgroundPicChange}
            className="background-pic-input"
          />
          <label htmlFor="backgroundPic" className="upload-button">Edit</label>
        </div>

        <div className="form-columns">
          <div className="left-column">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="right-column">
            <div className="form-group">
              <label htmlFor="houseNumber">House Number</label>
              <input
                type="text"
                id="houseNumber"
                placeholder="Enter your house number"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="locality">Locality</label>
              <input
                type="text"
                id="locality"
                placeholder="Enter your locality"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                placeholder="Enter your state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                placeholder="Enter your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                placeholder="Enter your pin code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <Link to="/login" className="signin">Sign In</Link>
      </form>
      
    </div>
  );
}

export default Signup;
