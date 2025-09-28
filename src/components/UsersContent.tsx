import React from 'react';

const UsersContent: React.FC = () => {
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active', lastLogin: '2023-12-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-12-02' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-11-28' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2023-12-01' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Moderator', status: 'Active', lastLogin: '2023-12-02' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          User Management
        </h1>
        <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Add New User
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-80 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Name</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Role</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Last Login</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-3 text-sm text-gray-900 dark:text-gray-200">{user.name}</td>
                  <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        user.role === 'Admin'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : user.role === 'Moderator'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-400">{user.lastLogin}</td>
                  <td className="py-3 px-3">
                    <div className="flex space-x-2">
                      <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Edit
                      </button>
                      <button className="px-2 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
                        {user.status === 'Active' ? 'Suspend' : 'Activate'}
                      </button>
                      <button className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
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
    </div>
  );
};

export default UsersContent;