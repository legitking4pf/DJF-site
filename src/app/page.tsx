import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExecutiveBio from '@/components/ExecutiveBio'
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
      <ExecutiveBio
  name="David Jackson"
  title="CAO"
  organization="Atlantida"
  netWorth="$780.2M"
  netWorthDelta="$62M (1.06%)"
  rankNote="Real Time Net Worth"
  asOf="07/12/2025"
  imageSrc="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/profile%20image"
/>
      <ExecutiveProfile /> 
      <StrategicGallery /> 
      <WhatIDo />
      <CareerFeed />
      <Footer />
    </main>
  );
}