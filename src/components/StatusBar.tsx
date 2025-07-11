// src/components/StatusBar.tsx
import React, { useState, useEffect } from 'react';
import './StatusBar.css';

const StatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Formata a hora (ex: 9:41)
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);

      // Formata a data no modelo brasileiro (ex: Terça-feira, 18 de Janeiro)
      const optionsDate: Intl.DateTimeFormatOptions = {
        weekday: 'long', // Nome completo do dia da semana (ex: "terça-feira")
        day: 'numeric',  // Dia do mês
        month: 'long',   // mês
      };
      setCurrentDate(now.toLocaleDateString('pt-BR', optionsDate));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Atualiza a cada minuto

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <span className="time">{currentTime}</span>
        <span className="date">{currentDate}</span>
      </div>
      <div className="status-bar-center">
        {/* título ou logo central */}
      </div>
      <div className="status-bar-right">
        <i className="fas fa-wifi icon wifi-icon icon"></i>
        <i className="fa-solid fa-signal icon"></i>
        <i className="fa-solid fa-battery-three-quarters icon icon"></i>
      </div>
    </div>
  );
};

export default StatusBar;