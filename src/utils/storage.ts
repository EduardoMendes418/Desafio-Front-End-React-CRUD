import { User } from '../types/user';

const STORAGE_KEY = 'user-manager-data';

export const storage = {
  getUsers: (): User[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading users from localStorage:', error);
      return [];
    }
  },

  saveUsers: (users: User[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users to localStorage:', error);
    }
  },

  clearStorage: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  }
};