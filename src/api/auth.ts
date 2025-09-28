import axios from 'axios';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
  },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const loginUser = async (credentials: LoginRequest): Promise<AuthResponse> => {
  await delay(1000);

  const user = mockUsers.find(u => u.email === credentials.email);

  if (!user || credentials.password !== 'password123') {
    throw new Error('Invalid email or password');
  }

  return {
    token: 'mock-jwt-token-' + Date.now(),
    user,
  };
};

export const registerUser = async (data: RegisterRequest): Promise<AuthResponse> => {
  await delay(1000);

  const existingUser = mockUsers.find(u => u.email === data.email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  const newUser: User = {
    id: String(mockUsers.length + 1),
    name: data.name,
    email: data.email,
  };

  mockUsers.push(newUser);

  return {
    token: 'mock-jwt-token-' + Date.now(),
    user: newUser,
  };
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};