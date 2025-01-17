import React from 'react';
import './UserLogIn.css';

function UserLogIn() {
  return (
    <div>
      <div className='logIn-Welcome'>
        <h4>Welcome</h4>
        <p>To login enter your Student Admission No. /Employee No. and Password</p>
      </div>
      <div className='logIn'>
        <p>UserName</p>
        <input type="text" placeholder='Student Admission No. / Employee No.' />
        <p>Password</p>
        <input type="password" placeholder='Enter password' />
      </div>

      <button className='login-btn'>Log In</button>

      <div className='links'>
        <a href='#' className='forgot-password'>Forgot Password?</a>
        <span> | </span>
        <a href='#' className='create-account'>Create Account</a>
      </div>
    </div>
  );
}

export default UserLogIn;
