import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import UserLogIn from './Components/LogIn/UserLogIn';
import Home from './Components/Home/Home';
import Assignments from './Components/Assignments/Assignments';
import Lessons from './Components/Lessons/Lessons';
import SideBar from './Components/SideBar/SideBar';
import Resources from './Components/Resources/Resources';
import './App.css';

const App = () => {
  return (
    <div className="app-layout">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <UserLogIn />
          <Home />
          <Lessons />
          <Assignments />
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default App;
