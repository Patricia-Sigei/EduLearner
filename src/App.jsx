import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserLogIn from './Components/LogIn/UserLogIn';
import Dashboard from './Components/Dashboard/Dashboard';  

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  const handleLogin = (username, password) => {
    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then((response) => {
        if (response.ok) {
          setIsAuthenticated(true);
          localStorage.setItem('isAuthenticated', 'true');
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Login error');
      });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="app-layout">
        <Routes>
          {/* Login route should be accessible when not authenticated */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <UserLogIn onLogin={handleLogin} />}
          />
          {/* Redirect to Dashboard after successful login */}
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
