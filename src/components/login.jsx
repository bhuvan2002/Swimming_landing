import React from 'react';
import './login.css';

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the external URL
    window.location.href = 'https://marlin-application.vercel.app/';
  };

  const handleCancel = () => {
    // Redirect to the home page
    window.location.href = '/';
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};