import { createContext, useContext, useState, type ReactNode } from 'react';

interface NotificationContextType {
  areNotificationsEnabled: boolean;
  toggleNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [areNotificationsEnabled, setAreNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setAreNotificationsEnabled(prev => !prev);
  };

  return (
    <NotificationContext.Provider value={{ areNotificationsEnabled, toggleNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};