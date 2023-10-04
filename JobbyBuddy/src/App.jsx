// App.js
import React from 'react';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import HirePage from './Pages/HirePage'
import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from './Pages/SignUpPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Contact' Component={ContactPage}></Route>
        <Route path='/About' Component={AboutPage}></Route>
        <Route path='/Hire' Component={HirePage}></Route>
        <Route path='/SignUp' Component={SignUpPage}></Route>
        <Route path="/" Component={HomePage}></Route>
      </Routes>
    </Router>
  );
}
export default App;

