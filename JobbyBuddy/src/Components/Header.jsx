import React from 'react';
import '../Styles/Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title header-nav-item"><a href='/'>JobbyBuddy</a></h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><a href="/">Home</a></li>
            <li className="header-nav-item"><a href="/About">About</a></li>
            <li className="header-nav-item"><a href="/Contact">Contact</a></li>
            <li className='header-nav-item'><a href='/Hire'>Hire</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
