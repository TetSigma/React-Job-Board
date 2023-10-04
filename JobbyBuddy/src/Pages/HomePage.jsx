
import React from 'react';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import '../Styles/App.css';

function HomePage() {
  return (
    <div className="app">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}
export default HomePage;

