// Login.jsx
import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }

    
    navigate('/dashboard'); 
  };

  const handleForgotPassword = () => {
    
    alert('Redirect to forgot password page');
  };

  const handleGoogleLogin = () => {
    alert('Login with Google clicked');
  };

  const handleFacebookLogin = () => {
    alert('Login with Facebook clicked');
  };

  return (
    <div className="login-wrapper">
      <div className="login-logo">
        <div className="logo-icon"> {/* You can replace this with your SVG or image */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#4F46E5" />
            <path d="M31 14L21 34" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M27 14L37 34" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="login-title">EventHub</h1>
      </div>

      <form onSubmit={handleSubmit} className="login-form" noValidate>
        <h2 className="signin-text">Login</h2>

        {error && <p className="error-message">{error}</p>}

        <label htmlFor="email" className="input-label">
          <FiMail className="input-icon" />
          <input
            id="email"
            type="email"
            placeholder="abc@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="input-field"
          />
        </label>

        <label htmlFor="password" className="input-label">
          <FiLock className="input-icon" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="input-field"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="password-toggle-btn"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </label>

        <div className="options-row">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            <span>Remember Me</span>
          </label>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="forgot-password-btn"
          >
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="btn-signin">
          Login <span className="arrow">→</span>
        </button>

        <div className="divider">OR</div>

        <button type="button" className="btn-google" onClick={handleGoogleLogin}>
          <AiOutlineGoogle className="btn-icon" />
          Login with Google
        </button>

        <button type="button" className="btn-facebook" onClick={handleFacebookLogin}>
          <FaFacebookF className="btn-icon" />
          Login with Facebook
        </button>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup" className="signup-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;