// src/components/QuoteWidget.tsx
import React from 'react';
import Widget from './Widget';
import './QuoteWidget.css';

interface QuoteWidgetProps {
  quote: string;
  onClick?: () => void;
//   author: string;
}

const QuoteWidget: React.FC<QuoteWidgetProps> = ({ quote, onClick }) => {
  return (
    <Widget className="quote-widget" onClick={onClick}>
      <p className="quote-text">"{quote}"</p>
    </Widget>
  );
};

export default QuoteWidget;