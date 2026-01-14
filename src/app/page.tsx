import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProfileFactSheet from '@/components/ProfileFactSheet';
import WhatIDo from '@/components/WhatIDo';
import CareerFeed from '@/components/CareerFeed';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProfileFactSheet /> 
      <WhatIDo />
      <CareerFeed />
      <Footer />
    </main>
  );
}
