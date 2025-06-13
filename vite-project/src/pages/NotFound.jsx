import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 px-4 text-center transition-all">
      <h1 className="text-7xl font-extrabold text-red-600 dark:text-red-400 mb-4">404</h1>
      <p className="text-2xl text-gray-800 dark:text-gray-200 mb-3" role="alert">
        🚧 Oops! Page not found.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        The page you're looking for doesn't exist or was moved.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
