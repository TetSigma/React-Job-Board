import React from 'react';
import '../Styles/Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">JobbyBuddy</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><a href="#">Home</a></li>
            <li className="header-nav-item"><a href="#">About</a></li>
            <li className="header-nav-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
