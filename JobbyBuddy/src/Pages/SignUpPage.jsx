import React, { useState } from 'react';
import '../Styles/SignUp.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';



function SignUpPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [password, setPassword] = useState('');
  const [passwordRep, setPasswordRep] = useState('');

  const handleSignup = () => {
    console.log('Signing up with email:', email, 'and password:', password);
  };

  return (
    <>
    <Header></Header>
    <div className="signup-container">
      <div className="signup-panel">
        <h1 className="panel-title">Sign Up for an Account</h1>
        <form className="auth-form">
        <div className='form-group'>
            <label>Your company name</label>
            <input
             type='string'
             value={name}
             onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Repeat Password</label>
            <input
              type="password"
              value={passwordRep}
              onChange={(e) => setPasswordRep(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default SignUpPage;
