import React, { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">User Dashboard</h1>
        <p className="text-gray-700 mb-6">
          👋 Welcome, User! Here you can view your profile and recent activity.
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
