import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getCurrentUser, logout } from '../api/auth';
import type { User } from '../api/auth';
import { ThemeProvider } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

interface AdminAppProps {
  children: React.ReactNode;
}

const AdminApp: React.FC<AdminAppProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      window.location.href = '/login';
      return;
    }
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar - Fixed width using box-border */}
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 dark:bg-gray-900 text-white z-50 box-border">
          <div className="p-4 border-b border-gray-700 dark:border-gray-600">
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>

          <nav className="p-4">
            <a
              href="/admin"
              className={`block px-4 py-2 mb-2 rounded-md transition-colors ${
                window.location.pathname === '/admin'
                  ? 'bg-gray-700 dark:bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white'
              }`}
            >
              Dashboard
            </a>
            <a
              href="/admin/users"
              className={`block px-4 py-2 mb-2 rounded-md transition-colors ${
                window.location.pathname === '/admin/users'
                  ? 'bg-gray-700 dark:bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white'
              }`}
            >
              Users
            </a>
            <a
              href="/admin/settings"
              className={`block px-4 py-2 mb-2 rounded-md transition-colors ${
                window.location.pathname === '/admin/settings'
                  ? 'bg-gray-700 dark:bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white'
              }`}
            >
              Settings
            </a>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-64">
          {/* Top Navigation */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Welcome, {user?.name}
                </span>
                <ThemeToggle />
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6 min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AdminApp;