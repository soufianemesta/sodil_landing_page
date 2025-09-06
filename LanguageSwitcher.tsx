'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#f8f8f8',
            borderRadius: '6px',
            padding: '4px',
            border: '1px solid #FFC300'
        }}>
            <button
                onClick={() => language !== 'fr' && toggleLanguage()}
                style={{
                    fontSize: '14px',
                    fontWeight: language === 'fr' ? '600' : 'normal',
                    color: language === 'fr' ? '#C81010' : '#666666',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    backgroundColor: language === 'fr' ? '#FFC300' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                FR
            </button>
            <button
                onClick={() => language !== 'ar' && toggleLanguage()}
                style={{
                    fontSize: '14px',
                    fontWeight: language === 'ar' ? '600' : 'normal',
                    color: language === 'ar' ? '#C81010' : '#666666',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    backgroundColor: language === 'ar' ? '#FFC300' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                AR
            </button>
        </div>
    );
};

export default LanguageSwitcher;