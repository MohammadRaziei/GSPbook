import React from 'react';
import styles from './../styles/page.module.css';
import { useLanguageQuery } from 'next-export-i18n';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
//   background?: string; // اضافه کردن پراپ برای بک‌گراند
}

export const Container: React.FC<ContainerProps> = ({ 
  children,
  className = ''
}) => {
  const [query] = useLanguageQuery();
  const isRTL = query?.lang === 'fa';

  return (
    <div className={`
      min-h-screen 
      ${className} 
      ${isRTL ? `${styles.containerFa} rtl` : `${styles.containerEn} ltr`}
    `}>
      {children}
    </div>
  );
};