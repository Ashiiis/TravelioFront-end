import React from 'react';
import './Slider.css'; // Import your CSS for styling

function Slider({ handlePrevClick, handleNextClick, children }) {
  return (
    <div className="slider-container">
      <button className="arrow-button prev" onClick={handlePrevClick}>
        <img src={`${process.env.PUBLIC_URL}/assets/left.svg`} alt="Left Arrow" />
      </button>
      <div className="card-container">
        {children}
      </div>
      <button className="arrow-button next" onClick={handleNextClick}>
        <img src={`${process.env.PUBLIC_URL}/assets/right.svg`} alt="Right Arrow" />
      </button>
    </div>
  );
}

export default Slider;
