import React, { useEffect } from "react";
import { useUserStore } from "./stores/userStore";
import { useTranslation } from "react-i18next";
import { ToastProvider } from "./components/toast/ToastProvider";
import { Header } from "./components/header/Header";
import { StatsCards } from "./components/cards/StatsCards";
import { SearchBar } from "./components/search/SearchBar";
import { UserForm } from "./components/form/UserForm";
import { UserList } from "./components/list/UserList";
import "../src//locales/i18n";

export const App: React.FC = () => {
  const { i18n } = useTranslation();
  const {
    users,
    filteredUsers,
    selectedUser,
    isFormOpen,
    isLoading,
    searchTerm,
    loadUsers,
    setSearchTerm,
    setIsFormOpen,
    setSelectedUser,
    deleteUser,
  } = useUserStore();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = async (id: number) => {
    if (window.confirm(i18n.t("deleteConfirm"))) {
      deleteUser(id);
    }
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <ToastProvider />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <StatsCards users={users} />

          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <main className="mt-8">
            {isFormOpen ? (
              <div className="max-w-2xl mx-auto">
                <UserForm user={selectedUser} onCancel={handleCancelForm} />
              </div>
            ) : (
              <UserList
                users={filteredUsers}
                onEditUser={handleEditUser}
                onDeleteUser={handleDeleteUser}
                isLoading={isLoading}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};
