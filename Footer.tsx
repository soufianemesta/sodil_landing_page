'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  
  const content = {
    fr: {
      company: 'Sodil',
      tagline: 'Livraison rapide et fiable à Casablanca',
      rights: '© 2024 Sodil. Tous droits réservés.',
      contact: 'Contact',
      supportEmail: 'support@sodil.ma',
      phone: '+212 708 275 589',
      address: 'Casablanca, Maroc',
      whatsappText: 'Contactez-nous sur WhatsApp'
    },
    ar: {
      company: 'سوديل',
      tagline: 'توصيل سريع وموثوق في الدار البيضاء',
      rights: '© 2024 سوديل. جميع الحقوق محفوظة.',
      contact: 'اتصل بنا',
      supportEmail: 'support@sodil.ma',
      phone: '+212 708 275 589',
      address: 'الدار البيضاء، المغرب',
      whatsappText: 'تواصل معنا على واتساب'
    }
  };

  const t = content[language];

  return (
    <footer style={{
      backgroundColor: '#FAFAFA',
      borderTop: '1px solid #f0f0f0',
      padding: '40px 24px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '16px' }}>
          <Image 
            src="/sodil-logo.png" 
            alt="Sodil Logo" 
            width={100} 
            height={35}
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
        
        <p style={{
          fontSize: '14px',
          color: '#666666',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          marginBottom: '24px',
          lineHeight: '1.5'
        }}>
          {t.tagline}
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
          maxWidth: '600px',
          margin: '0 auto 24px auto'
        }}>
          <a 
            href={`mailto:${t.supportEmail}`}
            style={{
              fontSize: '14px',
              color: '#C81010',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              lineHeight: '1.5'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#A00D0D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#C81010';
            }}
          >
            <Mail size={16} />
            {t.supportEmail}
          </a>
          <a 
            href={`https://wa.me/212708275589?text=${encodeURIComponent(language === 'fr' ? 'Bonjour, je souhaiterais devenir agent de livraison Sodil.' : 'مرحبا، أود أن أصبح عامل توصيل سوديل.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              color: '#25D366',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              lineHeight: '1.5'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#128C7E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#25D366';
            }}
          >
            <Phone size={16} />
            {t.phone} ({t.whatsappText})
          </a>
          <span style={{
            fontSize: '14px',
            color: '#666666',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            lineHeight: '1.5'
          }}>
            <MapPin size={16} />
            {t.address}
          </span>
        </div>
        
        <p style={{
          fontSize: '12px',
          color: '#999999',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          borderTop: '1px solid #f0f0f0',
          paddingTop: '16px',
          lineHeight: '1.5'
        }}>
          {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
