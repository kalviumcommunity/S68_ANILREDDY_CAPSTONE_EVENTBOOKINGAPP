// Home.jsx (simplified)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Homepage">
      <div className="container">
        <div className="content">
          <h1 className="title">Welcome to Event Booking App</h1>
          <button className="btn login-btn" onClick={() => navigate('/login')} type="button">
            Login
          </button>
          <button className="btn signup-btn" onClick={() => navigate('/signup')} type="button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;