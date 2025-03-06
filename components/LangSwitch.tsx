import React, { useRef } from 'react';
import styles from './../styles/page.module.css';
import { LanguageSwitcher, useLanguageQuery } from 'next-export-i18n';
import ReactCountryFlag from 'react-country-flag';

export const LangSwitch: React.FC = () => {
  const [query] = useLanguageQuery();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isRTL = query?.lang === 'fa';

  const faBox = (
    <LanguageSwitcher lang="fa">
      <div className={styles.langOption}>
        <ReactCountryFlag
          countryCode="IR"
          svg
          style={{
            width: '1.8em',
            height: '1.8em',
          }}
        />
        <span>فا</span>
      </div>
    </LanguageSwitcher>
  );

  const enBox = (
    <LanguageSwitcher lang="en">
      <div className={styles.langOption}>
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            width: '1.8em',
            height: '1.8em',
          }}
        />
        <span>EN</span>
      </div>
    </LanguageSwitcher>
  );

  return (
    <div 
      className={`${styles.langSwitcherContainer} ${isRTL ? styles.rtl : ''}`} 
      ref={dropdownRef}
    >
      <div className={styles.langSwitcherButton} style={{ backgroundColor: 'inherit' }}>
        <ReactCountryFlag
          countryCode={isRTL ? 'IR' : 'US'}
          svg
          style={{
            width: '1.8em',
            height: '1.8em',
          }}
        />
        <span style={{ margin: '0.4em' }}>{isRTL ? 'فا' : 'EN'}</span>
      </div>
      
      <div className={styles.langDropdown}>
        {/* Fixed the ternary operator syntax */}
        {isRTL ? (
          <>
            {enBox}
            {faBox}
          </>
        ) : (
          <>
            {faBox}
            {enBox}
          </>
        )}
      </div>
    </div>
  );
};