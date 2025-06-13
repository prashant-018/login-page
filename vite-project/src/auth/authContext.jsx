// src/auth/authContext.jsx
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const register = async (email, password, role) => {
    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
        role,
      });
      return res.data.success; // expects `{ success: true }` from backend
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      const userData = { email, role: res.data.role };
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', res.data.token);
      setUser(userData);
      return true;
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
