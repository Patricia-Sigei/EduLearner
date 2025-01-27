import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import UserLogIn from './Components/LogIn/UserLogIn';
import Home from './Components/Home/Home';
import Assignments from './Components/Assignments/Assignments';
import Lessons from './Components/Lessons/Lessons';
import SideBar from './Components/SideBar/SideBar';
import Resources from './Components/Resources/Resources';
import './App.css';

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="app-layout">
        {isAuthenticated && (
          <div className="sidebar">
            <SideBar />
          </div>
        )}
        <div className="main-content">
          {isAuthenticated && <Navbar />}
          <div className="page-content">
            <Routes>
              <Route
                path="/login"
                element={<UserLogIn onLogin={handleLogin} />}
              />
              <Route
                path="/"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/lessons"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <Lessons />
                  </PrivateRoute>
                }
              />
              <Route
                path="/assignments"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <Assignments />
                  </PrivateRoute>
                }
              />
              <Route
                path="/resources"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <Resources />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
