import React from 'react'
import './Navbar.css'

function Navbar () {
  return (
    <div className='navbar'>
      <ul className='navbar-items'>
        <li>Home</li>
        <li>Lesson</li>
        <li>Assignments</li>
        <li>Calendar</li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search Lesson'/>
        <img className='search-icon' src="src/assets/images/search_icon.png" alt="" />
      </div>
      <img className='dark-mode' src="src/assets/images/dark-mode icon.png" alt="" />
    </div>
  )
}

export default Navbar
