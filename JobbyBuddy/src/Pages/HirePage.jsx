import React, { useState } from 'react';
import '../Styles/Hire.css'; 
import Footer from '../Components/Footer';
import Header from '../Components/Header';
function Hire() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); 

  const handleLogin = () => {
    console.log('Logging in with email:', email, 'and password:', password);
  };

  return (
    <>
    <Header></Header>
    <div className="hire-container">
      <div className="login-signup-panel">
        <h1 className="panel-title">
            Login into your account
        </h1>
        <form className="auth-form">
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
          <div className="form-actions">
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            <p>
                <h1>Dont have An Account? <a href='/SignUp'>Sign up</a></h1>
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Hire;
