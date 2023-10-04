
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/App.css';
import '../Styles/About.css'

function AboutPage() {
  return (
    <div className="app">
        <Header />
        <div className="about-container">
        <h1 className="about-title">About Jobby Buddy</h1>
      <p className="about-text">
        Jobby Buddy is a forward-thinking company dedicated to revolutionizing the job search experience.
      </p>
      <p className="about-text">
        Our mission is to connect job seekers with their dream careers and assist companies in finding the perfect talent.
      </p>
      <p className="about-text">
        With innovative technology and a passionate team, we're committed to making job hunting easier and more efficient for everyone.
      </p>
      <p className="about-text">
        Join us on our journey to reshape the job market and create a brighter future for job seekers and employers alike.
      </p>
    </div>  
        <Footer />
    </div>
  );
}
export default AboutPage;