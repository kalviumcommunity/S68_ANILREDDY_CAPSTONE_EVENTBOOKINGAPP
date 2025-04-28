import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Homepage">
      <div className="container">
        <img
          src="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg"
          alt="Event Booking"
          className="bg-image"
        />
        <div className="content">
          <h1 className="title">Welcome to Event Booking App</h1>
          <button className="btn login-btn" onClick={() => navigate('/login')} type="button">
            Login
          </button>
          <button className="btn signup-btn" onClick={() => navigate('/signup')} type="button">
            Sign Up
          </button>
          <button className="btn events-btn" onClick={() => navigate('/events')} type="button">
            Browse Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;