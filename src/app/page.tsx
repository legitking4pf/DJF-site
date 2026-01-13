/* import Header from '@/components/Header';
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
*/
export default function LandingPage() {
  return (
    <main>
      <section className="section bg-obsidian text-bone text-center">
        <h1 className="text-5xl md:text-6xl mb-4">Test Global Styles</h1>
        <p className="text-lg md:text-xl">This confirms colors, fonts, and spacing are working.</p>
        <a href="#" className="mt-4 inline-block">Test Link</a>
        <div className="mt-6">
          <button>Test Button</button>
        </div>
      </section>
    </main>
  )
}