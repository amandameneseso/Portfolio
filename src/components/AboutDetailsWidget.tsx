import React from 'react';
 import type { ReactNode } from 'react';
 import Widget from './Widget';
 import './AboutDetailsWidget.css';

 interface AboutDetailsWidgetProps {
   title: string;
   children?: ReactNode;
   detailsPoints?: string[];
   imageSrc?: string; // Nova prop para a URL da imagem
 }

 const AboutDetailsWidget: React.FC<AboutDetailsWidgetProps> = ({ title, children, detailsPoints, imageSrc }) => {
   return (
     <Widget title={title} className="about-details-widget">
       {imageSrc && (
         <div className="about-me-image-container">
           <img src={imageSrc} alt="" className="about-me-image" />
         </div>
       )}

       {children}

       {detailsPoints && detailsPoints.length > 0 && (
         <ul className="details-list">
           {detailsPoints.map((point, index) => (
             <li key={index} className="details-item">
               <span className="bullet-icon">●</span> {point}
             </li>
           ))}
         </ul>
       )}
     </Widget>
   );
 };

 export default AboutDetailsWidget;