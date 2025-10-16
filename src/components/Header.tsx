// components/Header.tsx (Atualizado)
import React from "react";
import { FaUsers, FaUserPlus, FaDatabase, FaGlobe } from "react-icons/fa";
import { useUserStore } from "../stores/userStore";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { setIsFormOpen, setSelectedUser, resetToMockData, setLanguage } =
    useUserStore();

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleResetData = () => {
    if (window.confirm(t("resetConfirm"))) {
      resetToMockData();
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
              <FaUsers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {t("appName")}
              </h1>
              <p className="text-gray-600 mt-1">{t("appDescription")}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <select
                value={i18n.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-lg"
              >
                <option value="en">🇺🇸 English</option>
                <option value="pt">🇧🇷 Português</option>
                <option value="es">🇪🇸 Español</option>
              </select>
              <FaGlobe className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>

            <button
              onClick={handleResetData}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              title={t("resetData")}
            >
              <FaDatabase className="w-4 h-4" />
              <span className="hidden sm:inline">{t("resetData")}</span>
            </button>

            <button
              onClick={handleCreateUser}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <FaUserPlus className="w-5 h-5" />
              <span>{t("newUser")}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
