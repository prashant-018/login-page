import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-800 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Admin Dashboard</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome, <span className="font-semibold">Admin</span>! Manage the system here.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Manage Users
          </button>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            View Reports
          </button>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            System Settings
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
