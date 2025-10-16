import React from "react";
import { User } from "../types/user";
import { FaEnvelope, FaPhone, FaGlobe, FaEdit, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onEdit,
  onDelete,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/60 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-800 truncate">
              {user.name}
            </h3>
            <p className="text-gray-500 text-sm">ID: {user.id}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center text-gray-700">
            <FaEnvelope className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
            <span className="truncate text-lg">{user.email}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <FaPhone className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-lg">{user.phone}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <FaGlobe className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors truncate text-lg"
            >
              {user.website}
            </a>
          </div>
        </div>

        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => onEdit(user)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center font-semibold text-lg"
          >
            <FaEdit className="w-4 h-4 mr-2" />
            {t("edit")}
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center font-semibold text-lg"
          >
            <FaTrash className="w-4 h-4 mr-2" />
            {t("delete")}
          </button>
        </div>
      </div>
    </div>
  );
};
