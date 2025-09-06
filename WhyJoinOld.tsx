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
  return (
    <section className="py-12 bg-red-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          {language === 'fr' ? 'Pourquoi rejoindre Sodil ?' : 'لماذا تنضم إلى سوديل؟'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="p-4 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <IconComponent size={48} style={{ color: '#C81010' }} />
                </div>
                <h3 className="text-xl font-semibold">
                  {language === 'fr' ? benefit.title.fr : benefit.title.ar}
                </h3>
                <p className="mt-2">
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