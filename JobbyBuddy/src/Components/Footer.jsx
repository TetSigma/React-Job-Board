// Footer.js
import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Website</p>
    </footer>
  );
}

export default Footer;
