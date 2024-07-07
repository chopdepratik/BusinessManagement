import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import '../Css/Footer.css'
import '../Css/Style.css';

import image1 from '../Components/Images/4380.jpg';
import image2 from '../Components/Images/5278.jpg';
import image3 from '../Components/Images/4296530.jpg';
import image4 from '../Components/Images/5031659.jpg';
import image5 from '../Components/Images/7505326.jpg';
import image6 from '../Components/Images/8635954.jpg';
import image7 from '../Components/Images/18824950.jpg';
import image8 from '../Components/Images/20945830.jpg';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    // Add more imported images here
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Use useEffect to set up interval for automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds (5000 ms)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentImageIndex]); // Depend on currentImageIndex to re-trigger useEffect

  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Welcome to TaskSpark - Empowering Your Business</h1>
        <p>Streamline your business processes and boost productivity with our comprehensive management tools.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="slider-section">
        <div className="slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
          <button className="slider-prev" onClick={prevSlide}>Prev</button>
          <button className="slider-next" onClick={nextSlide}>Next</button>
        </div>
      </section>
      <section className="features-section">
        <div className="feature">
          <h2>Task Management</h2>
          <p>Efficiently manage and track your tasks with our intuitive task management tools.</p>
        </div>
        <div className="feature">
          <h2>Team Collaboration</h2>
          <p>Enhance teamwork with real-time collaboration and communication features.</p>
        </div>
        <div className="feature">
          <h2>Analytics & Reports</h2>
          <p>Gain insights into your business performance with detailed analytics and reports.</p>
        </div>
      </section>
       <Footer />
    </div>
  );
};

export default Home;
