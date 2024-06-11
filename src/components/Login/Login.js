// src/components/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import "./Login.css"

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginUser(username, password)) {
      navigate('/home');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2 className='Login-heading'>Login</h2>
      <form  className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-label" htmlFor="username">USERNAME</label>
          <input className="username-input-field" type="text" id="username" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">PASSWORD</label>
          <input className="password-input-field" type="password" id="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit"  className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
