'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ApplicationForm = () => {
    const { language } = useLanguage();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('moto');
    const [availability, setAvailability] = useState('full-time');
    const [isLoading, setIsLoading] = useState(false);
    const city = 'Casablanca'; // Pre-filled and not editable

    const content = {
        fr: {
            title: 'Postulez maintenant',
            subtitle: 'Remplissez ce formulaire pour rejoindre notre équipe de livraison à Casablanca.',
            fullName: 'Nom complet',
            phone: 'Numéro de téléphone',
            city: 'Ville',
            vehicleType: 'Type de véhicule',
            availability: 'Disponibilité',
            vehicleOptions: {
                moto: 'Moto',
                voiture: 'Voiture',
                velo: 'Vélo',
                bike: 'Vélo',
                electric_bike: 'Vélo électrique',
                electric_scooter: 'Trottinette électrique'
            },
            availabilityOptions: {
                'full-time': 'Temps plein',
                'part-time': 'Temps partiel'
            },
            submit: 'Soumettre la candidature',
            submitting: 'Envoi en cours...',
            success: 'Candidature soumise avec succès!',
            error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
        },
        ar: {
            title: 'قدم الآن',
            subtitle: 'املأ هذا النموذج للانضمام إلى فريق التوصيل في الدار البيضاء.',
            fullName: 'الاسم الكامل',
            phone: 'رقم الهاتف',
            city: 'المدينة',
            vehicleType: 'نوع المركبة',
            availability: 'التوفر',
            vehicleOptions: {
                moto: 'دراجة نارية',
                voiture: 'سيارة',
                velo: 'دراجة هوائية',
                bike: 'دراجة',
                electric_bike: 'دراجة كهربائية',
                electric_scooter: 'سكوتر كهربائي'
            },
            availabilityOptions: {
                'full-time': 'دوام كامل',
                'part-time': 'دوام جزئي'
            },
            submit: 'إرسال الطلب',
            submitting: 'جاري الإرسال...',
            success: 'تم إرسال الطلب بنجاح!',
            error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
        }
    };

    const t = content[language];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Prevent multiple submissions
        if (isLoading) return;
        
        setIsLoading(true);
        
        const formData = {
            fullName,
            phoneNumber,
            city,
            vehicleType,
            availability,
        };

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            
            // Reset form fields after successful submission
            setFullName('');
            setPhoneNumber('');
            setVehicleType('moto');
            setAvailability('full-time');
            
            alert(t.success);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(t.error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="application-form" style={{
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            backgroundColor: '#f8fafc'
        }}>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <div style={{
                    textAlign: 'center' as const,
                    marginBottom: '3rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #C81010, #E74C3C)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        marginBottom: '1rem',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em'
                    }}>
                        {t.title}
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                        color: '#4a5568',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.6',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {t.subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{
                    backgroundColor: '#FFFFFF',
                    padding: 'clamp(2rem, 5vw, 3rem)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2d3748',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            marginBottom: '8px'
                        }}>
                            {t.fullName}
                        </label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                color: '#2d3748',
                                backgroundColor: '#FFFFFF',
                                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                outline: 'none'
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = '#FFC300';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 195, 0, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = '#e2e8f0';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2d3748',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            marginBottom: '8px'
                        }}>
                            {t.phone}
                        </label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                color: '#2d3748',
                                backgroundColor: '#FFFFFF',
                                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                outline: 'none'
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = '#FFC300';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 195, 0, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = '#e2e8f0';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2d3748',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            marginBottom: '8px'
                        }}>
                            {t.city}
                        </label>
                        <input
                            type="text"
                            value={city}
                            readOnly
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                color: '#718096',
                                backgroundColor: '#f7fafc'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2d3748',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            marginBottom: '8px'
                        }}>
                            {t.vehicleType}
                        </label>
                        <select
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                color: '#2d3748',
                                backgroundColor: '#FFFFFF',
                                outline: 'none'
                            }}
                        >
                            <option value="moto">{t.vehicleOptions.moto}</option>
                            <option value="voiture">{t.vehicleOptions.voiture}</option>
                            <option value="velo">{t.vehicleOptions.velo}</option>
                            <option value="bike">{t.vehicleOptions.bike}</option>
                            <option value="electric_bike">{t.vehicleOptions.electric_bike}</option>
                            <option value="electric_scooter">{t.vehicleOptions.electric_scooter}</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2d3748',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            marginBottom: '8px'
                        }}>
                            {t.availability}
                        </label>
                        <select
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                color: '#2d3748',
                                backgroundColor: '#FFFFFF',
                                outline: 'none'
                            }}
                        >
                            <option value="full-time">{t.availabilityOptions['full-time']}</option>
                            <option value="part-time">{t.availabilityOptions['part-time']}</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            background: isLoading 
                                ? 'linear-gradient(135deg, #9CA3AF, #6B7280)' 
                                : 'linear-gradient(135deg, #C81010, #E74C3C)',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '16px',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: isLoading 
                                ? '0 2px 8px rgba(156, 163, 175, 0.3)' 
                                : '0 4px 12px rgba(200, 16, 16, 0.3)',
                            transform: 'translateY(0)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}
                        onMouseEnter={(e) => {
                            if (!isLoading) {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(200, 16, 16, 0.4)';
                                e.currentTarget.style.background = 'linear-gradient(135deg, #E74C3C, #C81010)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isLoading) {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(200, 16, 16, 0.3)';
                                e.currentTarget.style.background = 'linear-gradient(135deg, #C81010, #E74C3C)';
                            }
                        }}
                    >
                        {isLoading && (
                            <Loader2 
                                size={20} 
                                style={{
                                    animation: 'spin 1s linear infinite'
                                }}
                            />
                        )}
                        {isLoading ? t.submitting : t.submit}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ApplicationForm;