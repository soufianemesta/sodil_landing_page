import React from 'react';
import Hero from '../components/Hero';
import WhyJoin from '../components/WhyJoin';
import HowItWorks from '../components/HowItWorks';
import ApplicationForm from '../components/ApplicationForm';
import FAQ from '../components/FAQ';

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyJoin />
      <HowItWorks />
      <ApplicationForm />
      <FAQ />
    </div>
  );
};

export default Page;