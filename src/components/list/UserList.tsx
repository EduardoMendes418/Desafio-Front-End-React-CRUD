
import React from 'react';

import { FaUsers } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';

import { useTranslation } from 'react-i18next';
import { User } from '../../types/user';
import { UserCard } from '../cards/UserCard';

interface UserListProps {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUser: (id: number) => void;
  isLoading?: boolean;
}

export const UserList: React.FC<UserListProps> = ({ 
  users, 
  onEditUser, 
  onDeleteUser, 
  isLoading = false 
}) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <ImSpinner2 className="animate-spin h-16 w-16 text-blue-500 mb-4" />
        <p className="text-gray-600 text-lg font-medium">{t('loadingUsers')}</p>
        <p className="text-gray-400 text-sm mt-2">{t('pleaseWait')}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-32 h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <FaUsers className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-3">{t('noUsersFound')}</h3>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          {window.location.search ? 
            t('noSearchResults') : 
            t('startAdding')
          }
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEditUser}
          onDelete={onDeleteUser}
        />
      ))}
    </div>
  );
};