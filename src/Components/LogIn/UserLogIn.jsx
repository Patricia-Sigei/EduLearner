import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogIn.css';

function UserLogIn() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      setError('Please enter both identifier and password.');
      return;
    }

    const data = {
      identifier,
      password,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful login (e.g., store user data or token)
        console.log('Logged in successfully:', result);
        navigate('/dashboard');  
      } else {
        // Handle errors
        setError(result.error || result.message);
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An error occurred. Please try again.');
    }
  };

  const handleRedirectToSignup = () => {
    navigate('/signup');  
  };

  return (
    <div className="login-container">
      <div className="logIn-Welcome">
        <h4>Welcome</h4>
        <p>To login, enter your Student Admission No. / Employee No. and Password</p>
      </div>
      <div className="logIn">
        <p>UserName</p>
        <input
          type="text"
          placeholder="Student Admission No. / Employee No."
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="login-btn" onClick={handleLogin}>
        Log In
      </button>

      {error && <div className="error-message">{error}</div>}

      <div className="links">
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <span> | </span>
        <a href="#" onClick={handleRedirectToSignup} className="create-account">
          Create Account
        </a>
      </div>
    </div>
  );
}

export default UserLogIn;
