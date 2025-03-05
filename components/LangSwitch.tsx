import React, { useState, useRef } from 'react';
import styles from './../styles/page.module.css';
import { useTranslation, LanguageSwitcher, useLanguageQuery } from 'next-export-i18n';
import ReactCountryFlag from 'react-country-flag';

export const LangSwitch: React.FC = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isRTL = query?.lang === 'fa';

  return (
    <div 
      className={`${styles.langSwitcherContainer} ${isRTL ? styles.rtl : ''}`} 
      ref={dropdownRef}
    >
      <div className={styles.langSwitcherButton}>
        <ReactCountryFlag
          countryCode={isRTL ? 'IR' : 'US'}
          svg
          style={{
            width: '1.2em',
            height: '1.2em',
          }}
        />
      </div>
      
      <div className={styles.langDropdown}>
        <LanguageSwitcher lang="fa">
          <div className={styles.langOption}>
            <ReactCountryFlag
              countryCode="IR"
              svg
              style={{
                width: '1.2em',
                height: '1.2em',
              }}
            />
            <span>فا</span>
          </div>
        </LanguageSwitcher>
        
        <LanguageSwitcher lang="en">
          <div className={styles.langOption}>
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: '1.2em',
                height: '1.2em',
              }}
            />
            <span>EN</span>
          </div>
        </LanguageSwitcher>
      </div>
    </div>
  );
}; 