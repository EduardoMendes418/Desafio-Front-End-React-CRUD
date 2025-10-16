import React from 'react';
import { User } from '../types/user';
import { FaUsers, FaUserCheck, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface StatsCardsProps {
  users: User[];
}

export const StatsCards: React.FC<StatsCardsProps> = ({ users }) => {
  const { t } = useTranslation();
  
  const stats = {
    total: users.length,
    active: users.length, 
    withEmail: users.filter(u => u.email).length,
    withWebsite: users.filter(u => u.website).length,
  };

  const cards = [
    {
      icon: FaUsers,
      label: t('totalUsers'),
      value: stats.total,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaUserCheck,
      label: t('activeUsers'),
      value: stats.active,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaEnvelope,
      label: t('withEmail'),
      value: stats.withEmail,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaGlobe,
      label: t('withWebsite'),
      value: stats.withWebsite,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{card.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
            </div>
            <div className={`p-3 bg-gradient-to-r ${card.color} rounded-xl shadow-lg`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};