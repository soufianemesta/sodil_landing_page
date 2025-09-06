'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { FileText, Phone, Users, Package } from 'lucide-react';

const HowItWorks = () => {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: 'Comment ça marche',
            subtitle: 'Rejoignez Sodil et découvrez comment notre service fonctionne en quelques étapes simples.',
            steps: [
                {
                    icon: FileText,
                    title: 'Remplissez le formulaire',
                    description: 'Complétez notre formulaire d\'inscription avec vos informations personnelles.'
                },
                {
                    icon: Phone,
                    title: 'Nous vous contactons',
                    description: 'Notre équipe vous contacte pour discuter de votre candidature.'
                },
                {
                    icon: Users,
                    title: 'Explication mutuelle',
                    description: 'Nous vous expliquons nos attentes et ce que vous pouvez attendre de nous.'
                },
                {
                    icon: Package,
                    title: 'Commencez à livrer',
                    description: 'Recevez vos premières commandes et commencez à être payé immédiatement après chaque livraison.'
                }
            ]
        },
        ar: {
            title: 'كيف يعمل',
            subtitle: 'انضم إلى سوديل واكتشف كيف تعمل خدمتنا في خطوات بسيطة.',
            steps: [
                {
                    icon: FileText,
                    title: 'املأ النموذج',
                    description: 'أكمل نموذج التسجيل الخاص بنا بمعلوماتك الشخصية.'
                },
                {
                    icon: Phone,
                    title: 'نحن نتواصل معك',
                    description: 'يتواصل فريقنا معك لمناقشة طلبك.'
                },
                {
                    icon: Users,
                    title: 'توضيح متبادل',
                    description: 'نوضح لك توقعاتنا وما يمكنك توقعه منا.'
                },
                {
                    icon: Package,
                    title: 'ابدأ التوصيل',
                    description: 'استقبل طلباتك الأولى وابدأ في الحصول على الدفع فورًا بعد كل توصيل.'
                }
            ]
        }
    };

    const t = content[language];

    return (
        <section style={{
            padding: 'clamp(3rem, 8vw, 5rem) 1rem',
            backgroundColor: '#FFFFFF'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center' as const
            }}>
                <h2 style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                    fontWeight: '800',
                    color: '#C81010',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em'
                }}>
                    {t.title}
                </h2>
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: '#64748b',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    lineHeight: '1.6'
                }}>
                    {t.subtitle}
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(3rem, 6vw, 4rem)',
                    alignItems: 'start',
                    marginTop: '2rem'
                }}>
                    {t.steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                position: 'relative'
                            }}>
                                {/* Step number badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-0.5rem',
                                    right: '2rem',
                                    width: '2rem',
                                    height: '2rem',
                                    background: 'linear-gradient(135deg, #FFC300, #E6AF00)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#333333',
                                    fontWeight: '700',
                                    fontSize: '0.875rem',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                    boxShadow: '0 4px 12px rgba(255, 195, 0, 0.4)',
                                    border: '2px solid #FFC300'
                                }}>
                                    {index + 1}
                                </div>
                                
                                {/* Icon */}
                                <div style={{
                                    width: '5rem',
                                    height: '5rem',
                                    backgroundColor: 'rgba(255, 195, 0, 0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem',
                                    border: '3px solid rgba(255, 195, 0, 0.3)'
                                }}>
                                    <IconComponent size={32} style={{ color: '#C81010' }} />
                                </div>
                                
                                <h3 style={{
                                    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                                    fontWeight: '600',
                                    color: '#1a202c',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                    marginBottom: '1rem',
                                    lineHeight: '1.3'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                    color: '#64748b',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                    lineHeight: '1.6',
                                    margin: 0,
                                    maxWidth: '280px'
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;