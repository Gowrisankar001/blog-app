// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { username: 'user1', password: 'password1', email: 'user1@example.com' },
    { username: 'user2', password: 'password2', email: 'user2@example.com' }
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, addUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
