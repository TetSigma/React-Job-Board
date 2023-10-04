
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/App.css';
import '../Styles/Contact.css'
function ContactPage() {
  return (
    <div className="app">
        <Header />
        <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">
        We'd love to hear from you! Feel free to reach out to us with any questions, feedback, or inquiries.
      </p>
      <div className="contact-info">
        <p className="contact-info-item">
          <strong>Email:</strong> info@jobbybuddy.com
        </p>
        <p className="contact-info-item">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="contact-info-item">
          <strong>Address:</strong> 1234 Job Street, Cityville, State
        </p>
      </div>
    </div>
        <Footer />
    </div>
  );
}
export default ContactPage;