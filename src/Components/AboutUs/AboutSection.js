
import React from 'react';
import Nav from './Nav'
import './AboutSection.css';
import Footer from './Footer'; 


const AboutSection = () => {
  return (
    <div className='nave-1'>
          <Nav/>

    <div className="about-section">
      <h2 className="about-heading">About Us</h2>
      <p className="about-text">
        Welcome to TravelAI, your trusted companion for all your travel adventures. We are dedicated to helping you discover the best travel destinations, find hidden gems, and create unforgettable memories. Whether you're looking for a relaxing beach holiday, an adventurous mountain trek, or a cultural city tour, we've got you covered.
      </p>
      <p className="about-text">
        Our platform provides detailed travel guides, user reviews, and expert recommendations to ensure that you have all the information you need to plan your perfect trip. With TravelAI, you can easily find the best deals on flights, hotels, and rental cars, making your travel planning seamless and stress-free.
      </p>
      <p className="about-text">
        Join our community of passionate travelers and start exploring the world with confidence. Let's make your travel dreams a reality!
      </p>
    </div>
    <Footer/>

    </div>
  );
};

export default AboutSection;
