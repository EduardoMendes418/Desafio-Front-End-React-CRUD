import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { User, UserFormData } from "../types/user";
import { mockUsers } from "../data/mockUsers";
import i18n from "../locales/i18n";

interface UserState {
  users: User[];
  filteredUsers: User[];
  selectedUser: User | null;
  isFormOpen: boolean;
  isLoading: boolean;
  searchTerm: string;
  language: string;

  // Actions
  loadUsers: () => void;
  setSearchTerm: (term: string) => void;
  filterUsers: () => void;
  createUser: (userData: UserFormData) => void;
  updateUser: (id: number, userData: UserFormData) => void;
  deleteUser: (id: number) => void;
  setSelectedUser: (user: User | null) => void;
  setIsFormOpen: (isOpen: boolean) => void;
  setIsLoading: (loading: boolean) => void;
  resetToMockData: () => void;
  clearAllData: () => void;
  setLanguage: (lang: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      users: [],
      filteredUsers: [],
      selectedUser: null,
      isFormOpen: false,
      isLoading: false,
      searchTerm: "",
      language: "en",

      loadUsers: () => {
        const { users } = get();
        if (users.length === 0) {
          set({ users: mockUsers, filteredUsers: mockUsers });
        } else {
          set((state) => ({ filteredUsers: state.users }));
        }
      },

      setSearchTerm: (term: string) => {
        set({ searchTerm: term });
        get().filterUsers();
      },

      filterUsers: () => {
        const { users, searchTerm } = get();

        if (!searchTerm.trim()) {
          set({ filteredUsers: users });
          return;
        }

        const filtered = users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.includes(searchTerm) ||
            user.website.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        set({ filteredUsers: filtered });
      },

      createUser: (userData: UserFormData) => {
        const { users } = get();
        const newUser: User = {
          ...userData,
          id: Math.max(...users.map((u) => u.id), 0) + 1,
        };

        const updatedUsers = [...users, newUser];
        set({
          users: updatedUsers,
          filteredUsers: updatedUsers,
          isFormOpen: false,
          selectedUser: null,
        });

        toast.success(i18n.t("toast.userCreated"));
      },

      updateUser: (id: number, userData: UserFormData) => {
        const { users } = get();
        const updatedUsers = users.map((user) =>
          user.id === id ? { ...userData, id } : user,
        );

        set({
          users: updatedUsers,
          filteredUsers: updatedUsers,
          isFormOpen: false,
          selectedUser: null,
        });

        toast.success(i18n.t("toast.userUpdated"));
      },

      deleteUser: (id: number) => {
        const { users } = get();
        const updatedUsers = users.filter((user) => user.id !== id);

        set({
          users: updatedUsers,
          filteredUsers: updatedUsers,
          selectedUser: null,
        });

        toast.success(i18n.t("toast.userDeleted"));
      },

      setSelectedUser: (user: User | null) => {
        set({ selectedUser: user });
      },

      setIsFormOpen: (isOpen: boolean) => {
        set({ isFormOpen: isOpen });
      },

      setIsLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      resetToMockData: () => {
        set({
          users: mockUsers,
          filteredUsers: mockUsers,
          searchTerm: "",
          selectedUser: null,
          isFormOpen: false,
        });

        toast.success(i18n.t("toast.dataReset"));
      },

      clearAllData: () => {
        set({
          users: [],
          filteredUsers: [],
          searchTerm: "",
          selectedUser: null,
          isFormOpen: false,
        });
      },

      setLanguage: (lang: string) => {
        set({ language: lang });
        i18n.changeLanguage(lang);
      },
    }),
    {
      name: "user-storage",
      partialize: (state) => ({
        users: state.users,
        language: state.language,
      }),
    },
  ),
);
