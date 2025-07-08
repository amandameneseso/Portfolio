// src/components/QuoteWidget.tsx
import React from 'react';
import Widget from './Widget';
import './QuoteWidget.css';

interface QuoteWidgetProps {
  quote: string;
//   author: string;
}

const QuoteWidget: React.FC<QuoteWidgetProps> = ({ quote }) => {
  return (
    <Widget className="quote-widget">
      <p className="quote-text">"{quote}"</p>
      {/* <p className="quote-author">– {author}</p> */}
    </Widget>
  );
};

export default QuoteWidget;