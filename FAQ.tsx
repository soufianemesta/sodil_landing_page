'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const FAQ: React.FC = () => {
    const { language } = useLanguage();
    const faqs = [
        {
            question: {
                fr: "Quels types de véhicules puis-je utiliser ?",
                ar: "ما هي أنواع المركبات التي يمكنني استخدامها؟"
            },
            answer: {
                fr: "Vous pouvez utiliser une moto, une voiture, un vélo, une draisine électrique ou une trottinette électrique.",
                ar: "يمكنك استخدام دراجة نارية أو سيارة أو دراجة أو دراجة كهربائية أو سكوتر كهربائي."
            }
        },
        {
            question: {
                fr: "Comment puis-je m'inscrire ?",
                ar: "كيف يمكنني التسجيل؟"
            },
            answer: {
                fr: "Remplissez le formulaire d'inscription sur notre site.",
                ar: "املأ نموذج التسجيل على موقعنا."
            }
        },
        {
            question: {
                fr: "Y a-t-il des frais d'inscription ?",
                ar: "هل هناك رسوم تسجيل؟"
            },
            answer: {
                fr: "Non, l'inscription est gratuite.",
                ar: "لا، التسجيل مجاني."
            }
        },
        {
            question: {
                fr: "Quand puis-je commencer à travailler ?",
                ar: "متى يمكنني البدء في العمل؟"
            },
            answer: {
                fr: "Vous pouvez commencer dès que votre inscription est approuvée.",
                ar: "يمكنك البدء بمجرد الموافقة على تسجيلك."
            }
        }
    ];

    const content = {
        fr: {
            title: "Questions fréquemment posées"
        },
        ar: {
            title: "الأسئلة الشائعة"
        }
    };

    const t = content[language];

    return (
        <section style={{
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            backgroundColor: '#ffffff'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '800',
                    marginBottom: 'clamp(2rem, 6vw, 3rem)',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #C81010, #E74C3C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                }}>
                    {t.title}
                </h2>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            padding: 'clamp(1.5rem, 4vw, 2rem)',
                            backgroundColor: '#f8fafc',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                            e.currentTarget.style.borderColor = '#FFC300';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                            e.currentTarget.style.borderColor = '#e2e8f0';
                        }}>
                            <h3 style={{
                                fontWeight: '600',
                                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                                marginBottom: '1rem',
                                color: '#2d3748',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                lineHeight: '1.4'
                            }}>
                                {language === 'fr' ? faq.question.fr : faq.question.ar}
                            </h3>
                            <p style={{
                                color: '#4a5568',
                                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                lineHeight: '1.6'
                            }}>
                                {language === 'fr' ? faq.answer.fr : faq.answer.ar}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;