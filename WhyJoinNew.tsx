'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { DollarSign, Zap, Clock, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: {
      fr: 'Revenus élevés',
      ar: 'دخل مرتفع',
    },
    description: {
      fr: 'Gagnez jusqu\'à 30 DH par livraison avec un minimum garanti de 15 DH.',
      ar: 'اكسب حتى 30 درهم لكل توصيل مع ضمان أدنى 15 درهم.',
    },
  },
  {
    icon: Zap,
    title: {
      fr: 'Paiement immédiat',
      ar: 'دفع فوري',
    },
    description: {
      fr: 'Recevez votre paiement directement après chaque livraison effectuée.',
      ar: 'احصل على أجرك مباشرة بعد كل توصيل تقوم به.',
    },
  },
  {
    icon: Clock,
    title: {
      fr: 'Pas d\'attente',
      ar: 'لا انتظار',
    },
    description: {
      fr: 'Les commandes e-commerce sont toujours prêtes, contrairement aux apps de livraison de nourriture.',
      ar: 'طلبات التجارة الإلكترونية جاهزة دائماً، على عكس تطبيقات توصيل الطعام.',
    },
  },
  {
    icon: TrendingUp,
    title: {
      fr: 'Croissance assurée',
      ar: 'نمو مضمون',
    },
    description: {
      fr: 'Profitez de la croissance du secteur e-commerce à Casablanca.',
      ar: 'استفد من نمو قطاع التجارة الإلكترونية في الدار البيضاء.',
    },
  },
];

const WhyJoin = () => {
  const { language } = useLanguage();

  const sectionTitle = {
    fr: 'Pourquoi rejoindre Sodil ?',
    ar: 'لماذا تنضم إلى سوديل؟'
  };

  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#FFFFFF'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center' as const
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#C81010',
          fontFamily: 'Arial, Helvetica, sans-serif',
          marginBottom: '48px'
        }}>
          {sectionTitle[language]}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          marginTop: '3rem'
        }}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} style={{
                textAlign: 'center' as const,
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {/* Icon Container */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '5rem',
                    height: '5rem',
                    backgroundColor: 'rgba(255, 195, 0, 0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255, 195, 0, 0.3)'
                  }}>
                    <IconComponent size={32} style={{ color: '#C81010' }} />
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  fontWeight: '700',
                  color: '#2d3748',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>
                  {language === 'fr' ? benefit.title.fr : benefit.title.ar}
                </h3>
                
                <p style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  color: '#4a5568',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.6',
                  maxWidth: '300px',
                  margin: '0 auto'
                }}>
                  {language === 'fr' ? benefit.description.fr : benefit.description.ar}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
