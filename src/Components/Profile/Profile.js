import React, { useState, useEffect } from 'react';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [houseNumber, setHouseNumber] = useState('');
  const [locality, setLocality] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [backgroundPic, setBackgroundPic] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
        const response = await fetch('http://localhost:8000/api/profile/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          // Initialize form fields with user data
          setHouseNumber(data.house_number || '');
          setLocality(data.locality || '');
          setState(data.state || '');
          setCountry(data.country || '');
          setPinCode(data.pin_code || '');
          setAlertMessage(data.alert_message || '');
          setAlertType(data.alert_type || '');
          setFirstName(data.first_name || '');
          setLastName(data.last_name || '');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('authToken');
    const formData = new FormData();

    formData.append('house_number', houseNumber);
    formData.append('locality', locality);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('pin_code', pinCode);
    formData.append('alert_message', alertMessage);
    formData.append('alert_type', alertType);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    if (profilePic) formData.append('profile_pic', profilePic);
    if (backgroundPic) formData.append('background_pic', backgroundPic);

    try {
      const response = await fetch('http://localhost:8000/api/profile/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert('Profile updated successfully');
      } else {
        alert('Error updating profile');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating profile');
    }
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>House Number</label>
          <input
            type="text"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Locality</label>
          <input
            type="text"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pin Code</label>
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Alert Message</label>
          <input
            type="text"
            value={alertMessage}
            onChange={(e) => setAlertMessage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Alert Type</label>
          <input
            type="text"
            value={alertType}
            onChange={(e) => setAlertType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label>Background Picture</label>
          <input
            type="file"
            onChange={(e) => setBackgroundPic(e.target.files[0])}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
