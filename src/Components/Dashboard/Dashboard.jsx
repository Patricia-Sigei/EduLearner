import React from 'react';
import Navbar from '../NavBar/Navbar';  
import { Routes, Route, Link } from 'react-router-dom';  
import Home from '../Home/Home';
import Lessons from '../Lessons/Lessons';
import Assignments from '../Assignments/Assignments';

const Dashboard = () => {
  return (
    <div>
      <Navbar /> {/* Navbar will be visible across the dashboard */}
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/lessons" element={<Lessons />} /> {/* Lessons route */}
          <Route path="/assignments" element={<Assignments />} /> {/* Assignments route */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
