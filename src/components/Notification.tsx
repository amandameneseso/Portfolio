// src/components/Notification.tsx
import React, { useEffect, useRef } from "react";
import "./Notification.css";
import { type ReactNode } from "react";

interface NotificationProps {
  message: ReactNode;
  onClose: () => void;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose, duration = 6000 }) => {
  const playedSound = useRef(false);

  useEffect(() => {
    // Tocar som apenas na primeira montagem
    if (!playedSound.current) {
      const notificationSound = new Audio("/sounds/notification.mp3");
      notificationSound.play();
      playedSound.current = true;
    }

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="notification">
      <span>{message}</span>
    </div>
  );
};

export default Notification;