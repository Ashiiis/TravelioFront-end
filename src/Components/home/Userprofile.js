import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

function Profile() {
  const { username } = useParams(); // Extract username from URL
  const [profileData, setProfileData] = useState({
    profilePic: '',
    backgroundPic: '',
    firstName: '',
    lastName: '',
    email: '',
    address: {
      houseNumber: '',
      locality: '',
      state: '',
      country: '',
      pinCode: '',
    }
  });

  useEffect(() => {
    // Fetch user profile data from the server
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/profile/${username}`);
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [username]);

  return (
    <div className="profile-container">
      <div className="background-pic" style={{ backgroundImage: `url(${profileData.backgroundPic})` }}>
        <div className="profile-info">
          <img
            src={profileData.profilePic || `${process.env.PUBLIC_URL}/assets/default-avatar.png`}
            alt="Profile"
            className="profile-pic"
          />
          <h2>{profileData.firstName} {profileData.lastName}</h2>
          <p>Email: {profileData.email}</p>
        </div>
      </div>
      <div className="address-info">
        <h3>Address Details</h3>
        <p>House Number: {profileData.address.houseNumber}</p>
        <p>Locality: {profileData.address.locality}</p>
        <p>State: {profileData.address.state}</p>
        <p>Country: {profileData.address.country}</p>
        <p>Pin Code: {profileData.address.pinCode}</p>
      </div>
    </div>
  );
}

export default Profile;
