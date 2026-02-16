import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExecutiveImage from '@/components/ExecutiveImage';
import ExecutiveProfile from '@/components/ExecutiveProfile';
import StrategicGallery from '@/components/StrategicGallery'
import WhatIDo from '@/components/WhatIDo';
import CareerFeed from '@/components/CareerFeed';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ExecutiveImage />
      <ExecutiveProfile /> 
      <StrategicGallery /> 
      <WhatIDo />
      <CareerFeed />
      <Footer />
    </main>
  );
}