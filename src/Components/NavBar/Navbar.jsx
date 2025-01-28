import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='navbar-items'>
        <li><Link to="/home">Home</Link></li> {/* Link for Home */}
        <li><Link to="/lessons">Lessons</Link></li> {/* Link for Lessons */}
        <li><Link to="/assignments">Assignments</Link></li> {/* Link for Assignments */}
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search Lesson'/>
        <img className='search-icon' src="src/assets/images/search_icon.png" alt="Search Icon" />
      </div>
    </div>
  );
}

export default Navbar;
