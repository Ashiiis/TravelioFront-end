import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar/Navbar2';
import Searchbar from './Components/Searchbar/Searchbar';
import { cardData } from './data';
import Second from './Components/home/Second';
import Footer from './Components/home/Footer';
import Plantrip from './Components/AiTools/Plantrip';
import Slider from './Components/home/Slider';
import Contect from './Components/Contectus/Contect';
import DataProcessingComponent from './Components/FeaturedPlaces/temp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Registration/Signup';
import Login from './Components/Registration/Login';
import Profile from './Components/Profile/Profile';
import AboutSection from './Components/AboutUs/AboutSection';
import Hotel from './Components/hotels/Hotel';
import ToDo from './Components/ToDo/ToDo';
// import SearchDescription from './Components/AiTools/description';
// import Convo from './Components/conversation/QueryComponent';
import LocationInput from './Components/conversation/Location';
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cardData.length - itemsPerPage
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cardData.length - itemsPerPage ? prevIndex + 1 : 0
    );
  };
  const displayedCards = cardData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <header className="heading">Where to Go?</header>
              <Navbar2 />
              <Searchbar />
              <div className="first">
                <h1><b>Go on an award-winning adventure</b></h1>
                <h2>2024's Best of The Best Places To Go</h2>
              </div>
              <div className='Top-place'>
              <h2>Top Places by Travelers</h2>
              </div>
              <DataProcessingComponent/>
              
              <div className="second">
                <h1><b>Some Thrilling Outdoor Adventure</b></h1>
                <h2>Climb, Fall, Ride, Swim (don't stop)</h2>
              </div>
              <Slider handlePrevClick={handlePrevClick} handleNextClick={handleNextClick}>
                {displayedCards.map((card, index) => (
                  <Second
                    key={index}
                    image={card.image}
                    title={card.title}
                  />
                ))}
              </Slider>
              <Plantrip />
              <Footer />
            </>
          } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/" element={<App />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/convo" element={<LocationInput/>}/>
          <Route path="/about" element={<AboutSection/>}/>
          <Route path="/hotels" element={<Hotel/>}/>
          <Route path="/todo" element={<ToDo/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
