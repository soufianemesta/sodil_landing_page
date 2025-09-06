'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { DollarSign, Zap, Clock, TrendingUp } from 'lucide-react';

const WhyJoin = () => {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: 'Pourquoi rejoindre Sodil ?',
            benefits: [
                {
                    icon: DollarSign,
                    title: 'Revenus élevés',
                    description: 'Gagnez jusqu\'à 30 DH par livraison avec un minimum garanti de 15 DH.'
                },
                {
                    icon: Zap,
                    title: 'Paiement immédiat',
                    description: 'Recevez votre paiement directement après chaque livraison effectuée.'
                },
                {
                    icon: Clock,
                    title: 'Pas d\'attente',
                    description: 'Les commandes e-commerce sont toujours prêtes, contrairement aux apps de livraison de nourriture.'
                },
                {
                    icon: TrendingUp,
                    title: 'Croissance assurée',
                    description: 'Profitez de la croissance du secteur e-commerce à Casablanca.'
                }
            ]
        },
        ar: {
            title: 'لماذا تنضم إلى سوديل؟',
            benefits: [
                {
                    icon: DollarSign,
                    title: 'دخل مرتفع',
                    description: 'اكسب حتى 30 درهم لكل توصيل مع ضمان أدنى 15 درهم.'
                },
                {
                    icon: Zap,
                    title: 'دفع فوري',
                    description: 'احصل على أجرك مباشرة بعد كل توصيل تقوم به.'
                },
                {
                    icon: Clock,
                    title: 'لا انتظار',
                    description: 'طلبات التجارة الإلكترونية جاهزة دائماً، على عكس تطبيقات توصيل الطعام.'
                },
                {
                    icon: TrendingUp,
                    title: 'نمو مضمون',
                    description: 'استفد من نمو قطاع التجارة الإلكترونية في الدار البيضاء.'
                }
            ]
        }
    };

    const t = content[language];

    return (
        <section style={{
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            backgroundColor: '#f8fafc',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #C81010, #E74C3C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                }}>
                    {t.title}
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(2rem, 5vw, 4rem)',
                    alignItems: 'start'
                }}>
                    {t.benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div key={index} style={{
                                textAlign: 'center',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}>
                                {/* Icon Container */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div style={{
                                        width: '5rem',
                                        height: '5rem',
                                        backgroundColor: 'rgba(200, 16, 16, 0.1)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid rgba(200, 16, 16, 0.2)'
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
                                    {benefit.title}
                                </h3>
                                
                                <p style={{
                                    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                                    color: '#4a5568',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                    lineHeight: '1.6',
                                    maxWidth: '300px',
                                    margin: '0 auto'
                                }}>
                                    {benefit.description}
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