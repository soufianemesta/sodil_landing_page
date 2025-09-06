'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const FinalCTA: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: 'Prêt à commencer ?',
            subtitle: 'Rejoignez des centaines d\'agents de livraison qui font déjà confiance à Sodil à Casablanca.',
            cta: 'Postulez maintenant',
            note: 'Inscription gratuite • Formation incluse • Support 24/7'
        },
        ar: {
            title: 'هل أنت مستعد للبدء؟',
            subtitle: 'انضم إلى مئات عمال التوصيل الذين يثقون بالفعل في سوديل في الدار البيضاء.',
            cta: 'قدم الآن',
            note: 'التسجيل مجاني • التدريب مشمول • الدعم 24/7'
        }
    };

    const t = content[language];

    const scrollToForm = () => {
        const formElement = document.getElementById('application-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    {t.title}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                    {t.subtitle}
                </p>
                <button
                    onClick={scrollToForm}
                    className="bg-yellow-500 text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-yellow-400 transform hover:scale-105 btn-hover"
                >
                    {t.cta}
                </button>
                <p className="text-sm mt-6 opacity-75">
                    {t.note}
                </p>
            </div>
        </section>
    );
};

export default FinalCTA;
