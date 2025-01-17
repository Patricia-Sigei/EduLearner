import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="profile-pic">
          <img src="src/assets/images/profilepic_icon.png" alt="Profile" />
        </div>
        <div className="user-details">
          <p className="username">Patricia Sigei</p>
          <p className="role">Student - Computer Science</p>
          <p className="year-semester">2.1</p>
        </div>
      </div>

      <div className="upcoming-info">
        <h3>Upcoming</h3>
        <div className="upcoming-lesson">
          <h4>Next Lesson:</h4>
          <p>Fundamentals of Computing - 0800hrs</p>
        </div>
        <div className="upcoming-assignment">
          <h4>Upcoming Assignment:</h4>
          <p>Algorithms - Due 20/01/2025</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
