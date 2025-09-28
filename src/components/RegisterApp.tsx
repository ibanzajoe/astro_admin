import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '../contexts/ThemeContext';
import RegisterForm from './RegisterForm';
import ThemeToggle from './ThemeToggle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const RegisterApp: React.FC = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="space-y-4">
          <RegisterForm />
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default RegisterApp;