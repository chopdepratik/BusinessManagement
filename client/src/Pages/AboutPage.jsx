import React from 'react';
import '../Css/About.css';
import Footer from '../Components/Footer';
import '../Css/Footer.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="hero-section">
        <h1>About TaskSpark</h1>
        <p>Empowering Your Business Management Journey</p>
      </header>
      <section className="about-details">
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>To revolutionize business management by providing innovative, user-friendly, and efficient solutions that empower organizations to reach their full potential.</p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Our mission is to streamline business processes through our comprehensive suite of management tools, fostering productivity, collaboration, and growth for businesses of all sizes.</p>
        </div>
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>TaskSpark is a leading provider of business management software. We are committed to delivering top-notch solutions that simplify complex business operations, enhance productivity, and drive success.</p>
        </div>
        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Employee Management</li>
            <li>Task Management</li>
            <li>Project Management</li>
            <li>Financial Management</li>
            <li>Real-time Collaboration Tools</li>
            <li>Comprehensive Analytics and Reporting</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Our Values</h2>
          <p>At TaskSpark, we value innovation, integrity, and customer satisfaction. We strive to build lasting relationships with our clients by consistently delivering high-quality, reliable, and effective business solutions.</p>
        </div>
      </section>
      <footer className="footer">
         <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
