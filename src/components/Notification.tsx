// src/components/Notification.tsx
import React, { useEffect } from "react";
import "./Notification.css";

interface NotificationProps {
  message: string;
  onClose: () => void;
  duration?: number; // tempo em ms antes de desaparecer
}

const Notification: React.FC<NotificationProps> = ({ message, onClose, duration = 5000 }) => {
  useEffect(() => {
    const notificationSound = new Audio("/sounds/notification.mp3"); // Substitua pelo caminho do seu som
    notificationSound.play();
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
