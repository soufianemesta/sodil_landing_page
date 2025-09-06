import React from 'react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    return (
        <header style={{
            backgroundColor: '#FFFFFF',
            padding: '15px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '3px solid #FFC300',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            position: 'sticky',
            top: '0',
            zIndex: 1000
        }}>
            {/* Yellow accent line */}
            <div style={{
                position: 'absolute',
                bottom: '-3px',
                left: '0',
                right: '0',
                height: '3px',
                background: 'linear-gradient(90deg, #FFC300 0%, #E6AF00 100%)'
            }} />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Image 
                    src="/sodil-logo.png" 
                    alt="Sodil Logo" 
                    width={120} 
                    height={40}
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </div>
            <LanguageSwitcher />
        </header>
    );
};

export default Header;