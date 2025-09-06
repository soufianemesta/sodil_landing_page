'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Rocket, DollarSign, Clock, CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: 'Rejoignez Sodil à Casablanca',
            subtitle: 'Devenez un agent de livraison et profitez de nombreux avantages.',
            cta: 'Postulez maintenant',
            features: [
                { icon: DollarSign, text: 'Jusqu\'à 30 DH par livraison' },
                { icon: Zap, text: 'Paiement immédiat' },
                { icon: Clock, text: 'Pas d\'attente, commandes prêtes' }
            ]
        },
        ar: {
            title: 'انضم إلى سوديل في الدار البيضاء',
            subtitle: 'كن عامل توصيل واستفد من العديد من المزايا.',
            cta: 'قدم الآن',
            features: [
                { icon: DollarSign, text: 'حتى 30 درهم لكل توصيل' },
                { icon: Zap, text: 'دفع فوري' },
                { icon: Clock, text: 'لا انتظار، طلبات جاهزة' }
            ]
        }
    };

    const t = content[language];

    return (
        <section style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, #C81010, #FFC300)',
                borderRadius: '50%',
                opacity: '0.1',
                filter: 'blur(40px)',
                zIndex: 1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '5%',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, #FFC300, #C81010)',
                borderRadius: '50%',
                opacity: '0.1',
                filter: 'blur(30px)',
                zIndex: 1
            }} />

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Title */}
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #C81010, #E74C3C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                }}>
                    {t.title}
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    color: '#4a5568',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    marginBottom: '3rem',
                    lineHeight: '1.6',
                    fontWeight: '400',
                    maxWidth: '700px',
                    margin: '0 auto 3rem auto'
                }}>
                    {t.subtitle}
                </p>

                {/* Features */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
                    flexWrap: 'wrap',
                    marginBottom: '3rem'
                }}>
                    {t.features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                                fontWeight: '600',
                                color: '#2d3748',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                            }}>
                                <div style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    backgroundColor: '#FFC300',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid #E6AF00',
                                    flexShrink: 0
                                }}>
                                    <IconComponent size={18} style={{ color: '#C81010' }} />
                                </div>
                                {feature.text}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <a 
                    href="#application-form" 
                    style={{
                        background: 'linear-gradient(135deg, #C81010, #A50E0E)',
                        color: '#ffffff',
                        fontWeight: '600',
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2.5rem, 5vw, 3rem)',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: '3px solid #FFC300',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(200, 16, 16, 0.3)',
                        transform: 'translateY(0)',
                        marginBottom: '2rem'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(200, 16, 16, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #A50E0E, #C81010)';
                        e.currentTarget.style.borderColor = '#E6AF00';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(200, 16, 16, 0.3)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #C81010, #A50E0E)';
                        e.currentTarget.style.borderColor = '#FFC300';
                    }}
                >
                    {t.cta}
                    <ArrowRight size={20} />
                </a>

                {/* Trust indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 'clamp(1.5rem, 4vw, 2.5rem)',
                    flexWrap: 'wrap',
                    opacity: '0.8'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        color: '#4a5568',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                        <CheckCircle size={18} style={{ color: '#FFC300' }} />
                        {language === 'fr' ? 'Inscription gratuite' : 'تسجيل مجاني'}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        color: '#4a5568',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                        <Zap size={18} style={{ color: '#FFC300' }} />
                        {language === 'fr' ? 'Démarrage rapide' : 'بداية سريعة'}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        color: '#4a5568',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                        <Shield size={18} style={{ color: '#FFC300' }} />
                        {language === 'fr' ? 'Données sécurisées' : 'بيانات آمنة'}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;