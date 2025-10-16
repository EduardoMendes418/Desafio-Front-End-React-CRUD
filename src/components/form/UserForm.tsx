import React, { useState, useEffect } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaTimes,
  FaSave,
  FaUserPlus,
  FaUserEdit,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";
import { User, UserFormData } from "../../types/user";
import { useUserStore } from "../../stores/userStore";

interface UserFormProps {
  user?: User | null;
  onCancel: () => void;
}

const initialFormData: UserFormData = {
  name: "",
  email: "",
  phone: "",
  website: "",
};

export const UserForm: React.FC<UserFormProps> = ({ user, onCancel }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<UserFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const { createUser, updateUser } = useUserStore();

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (user) {
      updateUser(user.id, formData);
    } else {
      createUser(formData);
    }

    setIsLoading(false);
  };

  const isFormValid =
    formData.name && formData.email && formData.phone && formData.website;

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-200/60"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            {user ? (
              <FaUserEdit className="w-8 h-8 text-white" />
            ) : (
              <FaUserPlus className="w-8 h-8 text-white" />
            )}
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            {user ? t("userForm.editUser") : t("userForm.newUser")}
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            {user ? t("userForm.editUser") : t("userForm.newUser")}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t("userForm.name")} *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 text-lg"
                placeholder={t("userForm.namePlaceholder")}
              />
              <FaUser className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t("userForm.email")} *
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 text-lg"
                placeholder={t("userForm.emailPlaceholder")}
              />
              <FaEnvelope className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t("userForm.phone")} *
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 text-lg"
                placeholder={t("userForm.phonePlaceholder")}
              />
              <FaPhone className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t("userForm.website")} *
            </label>
            <div className="relative">
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 text-lg"
                placeholder={t("userForm.websitePlaceholder")}
              />
              <FaGlobe className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md font-semibold flex items-center justify-center text-lg"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                {user ? t("userForm.updating") : t("userForm.creating")}
              </>
            ) : (
              <>
                <FaSave className="w-5 h-5 mr-3" />
                {user ? t("update") : t("create")}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4 px-6 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center text-lg"
          >
            <FaTimes className="w-5 h-5 mr-3" />
            {t("cancel")}
          </button>
        </div>
      </form>
    </div>
  );
};
