// src/components/Logout.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user session
    navigate('/login'); // Redirect to login page
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
