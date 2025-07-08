// src/components/StatusBar.tsx
import React, { useState, useEffect } from 'react';
import './StatusBar.css';

const StatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  // Valores fixos, sem useState se não houver lógica para atualizá-los
  const batteryPercentage = 85;
  const wifiSignal = true;

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
        day: 'numeric',  // Dia do mês (ex: "8")
        month: 'long',   // Nome completo do mês (ex: "julho")
        // year: 'numeric' // Opcional: se quiser incluir o ano
      };
      // Altera 'en-US' para 'pt-BR' para o locale brasileiro
      setCurrentDate(now.toLocaleDateString('pt-BR', optionsDate));
    };

    updateDateTime(); // Atualiza imediatamente ao montar
    const intervalId = setInterval(updateDateTime, 60000); // Atualiza a cada minuto

    // Limpeza ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <span className="time">{currentTime}</span>
        <span className="date">{currentDate}</span>
      </div>
      <div className="status-bar-center">
        {/* Adicione um título ou logo central aqui se desejar */}
      </div>
      <div className="status-bar-right">
        {wifiSignal && <span className="icon wifi-icon"></span>} {/* Ícone de Wi-Fi */}
        <span className="battery-icon">
          {batteryPercentage}%
          <div className="battery-level" style={{ width: `${batteryPercentage}%` }}></div>
        </span>
      </div>
    </div>
  );
};

export default StatusBar;