import React from 'react';
import WidthTestComponent from './WidthTestComponent';

const DashboardContent: React.FC = () => {
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Active' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Dashboard Overview
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm text-center">
          <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm text-center">
          <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Active Sessions</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">89</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm text-center">
          <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">$12,345</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm text-center">
          <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Orders</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">567</p>
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Recent Users
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">{user.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-md ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition-colors">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Box-sizing and width test section */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <WidthTestComponent />
      </div>
    </div>
  );
};

export default DashboardContent;