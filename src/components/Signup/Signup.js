// src/components/Signup.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import "./Signup.css"

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { username, email, password };
    addUser(newUser);

    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="Signup-container">
      <h2 className='Signup-heading'>Signup</h2>
      <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-container">
          <label className="input-label" htmlFor="username">USERNAME</label>
          <input className="common-input-field" type="text" placeholder="Username" id="username" value={username} onChange={e => setUsername(e.target.value)} required />
      </div>
      <div className="input-container">
          <label className="input-label" htmlFor="email">EMAIL</label>
          <input className="common-input-field"id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="input-container">
          <label className="input-label" htmlFor="password">PASSWORD</label>
          <input className="common-input-field" id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <div className="input-container">
          <label className="input-label" htmlFor="confirmpassword">CONFIRM PASSWORD</label>
          <input className="common-input-field" id="confirmpassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
      </div>
        <button className="Signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
