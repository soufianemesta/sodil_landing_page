import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from '../components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sodil - Livraison à Casablanca',
  description: 'Rejoignez Sodil, la startup de e-commerce pour les agents de livraison à Casablanca.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}