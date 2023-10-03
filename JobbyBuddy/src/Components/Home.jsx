import React from 'react';
import '../Styles/Home.css';

function Home() {
  return (
    <div className='content'>
        <div className='wrapper'>
        <div className='textWrapper'>
        <h1 className='mainText'>Jobby Buddy will help you find your job!</h1>
      </div>
        <div className='searchBarWrapper'>
        <input
          type='text'
          className='searchBar'
          placeholder='Search for jobs...'
        />
        <button className='searchButton'>Search</button>
      </div>

        </div>
 
    </div>
  );
}

export default Home;
