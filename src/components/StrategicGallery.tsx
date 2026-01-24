"use client";
import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";

export default function StrategicGallery() {
  const images = [
    { id: 1, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/684082b08064a259b26c8ac3_final.jpg", title: "GFA Headquarters", span: "lg:col-span-1 lg:row-span-1" },
    { id: 2, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Fachada-1-Banco-Atlantida.webp", title: "Strategic Infrastructure", span: "lg:col-span-1 lg:row-span-2" },
    { id: 3, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/683c906b73a0abb8064ee03f__DAS1362.jpg", title: "Digital Integration", span: "lg:col-span-1 lg:row-span-1" },
    { id: 4, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida.jpg", title: "Corporate Excellence", span: "lg:col-span-1 lg:row-span-1" },
    { id: 5, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/honduras-bancas_11242238_20250701164910.jpg", title: "Primary Asset Growth", span: "lg:col-span-2 lg:row-span-2" },
    { id: 6, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/images%20%283%29.jpeg", title: "Wealth Acceleration", span: "lg:col-span-1 lg:row-span-1" },
    { id: 7, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/portada-09-02-2024-111-juntos.jpg", title: "Global Reach", span: "lg:col-span-1 lg:row-span-1" },
    { id: 8, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/images.jpeg", title: "Sustainability", span: "lg:col-span-1 lg:row-span-1" },
  ];
  
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const autoplayRef = useRef<number | null>(null);
  
  const prev = () => setActive(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive(i => (i === images.length - 1 ? 0 : i + 1));
  
  const getOffset = (index: number, activeIndex: number, length: number) => {
    let diff = index - activeIndex;
    const half = Math.floor(length / 2);
    if (diff > half) diff -= length;
    if (diff < -half) diff += length;
    return diff;
  };
  
  useEffect(() => {
    if (paused) {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      return;
    }
    autoplayRef.current = window.setInterval(next, 4000);
    return () => { if (autoplayRef.current) window.clearInterval(autoplayRef.current); };
  }, [paused, next]); // Added next to dependencies

  // Touch Handlers for mobile "Wealth Acceleration" feel
  const onTouchStart = (e: React.TouchEvent) => { setPaused(true); touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e: React.TouchEvent) => { if (touchStartX.current !== null) touchDeltaX.current = e.touches[0].clientX - touchStartX.current; };
  const onTouchEnd = () => {
    if (touchDeltaX.current > 50) prev();
    else if (touchDeltaX.current < -50) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setTimeout(() => setPaused(false), 2000);
  };
  
  return (
    <section className="bg-bone py-24 border-t border-obsidian/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        {/* Header - Fixed SEO structure */}
        <div className="mb-12 text-center">
          <h2 id="gallery-heading" className="text-4xl md:text-6xl font-display text-obsidian mb-4 tracking-tight">
            Strategic Environments
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-6" />
          <p className="text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light text-ash">
            A visual manifestation of the GFA Strategic Vision — mapping digital integration, investment partnerships, and sustainable design across our global reach.
          </p>
        </div>

        {/* MOBILE & TABLET CAROUSEL (Now covers md view as well) */}
        <div 
          className="lg:hidden relative h-[500px] w-full flex items-center justify-center overflow-hidden"
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        >
          {images.map((img, index) => {
            const offset = getOffset(index, active, images.length);
            return (
              <div
                key={img.id}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transform: `translateX(${offset * 260}px) scale(${index === active ? 1 : 0.8})`,
                  filter: index === active ? "none" : "blur(4px)",
                  opacity: index === active ? 1 : 0.4,
                  zIndex: index === active ? 30 : 10,
                }}
              >
                <div className="w-[260px] h-[380px] relative rounded-lg overflow-hidden shadow-2xl border border-obsidian/10 bg-white">
                  <NextImage 
                    src={img.src} 
                    alt={img.title} 
                    fill 
                    className="object-cover" 
                    sizes="260px"
                  />
                </div>
              </div>
            );
          })}

          {/* RESTORED CONTROLS: Progress Bar and Navigation */}
          <div className="absolute bottom-4 z-40 flex flex-col items-center gap-6">
            <div className="flex gap-8 items-center">
              <button
                onClick={() => { setPaused(true); prev(); }}
                className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur border border-obsidian/10 rounded-full shadow-sm text-obsidian active:scale-95 transition-all hover:bg-white"
                aria-label="Previous image"
              >
                ‹
              </button>
              
              {/* Pagination Dots (The Progress Bar) */}
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 transition-all duration-500 rounded-full ${i === active ? "w-8 bg-gold" : "w-2 bg-obsidian/20"}`} 
                  />
                ))}
              </div>

              <button
                onClick={() => { setPaused(true); next(); }}
                className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur border border-obsidian/10 rounded-full shadow-sm text-obsidian active:scale-95 transition-all hover:bg-white"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP BENTO GRID (Large screens only) */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-6 h-[850px]">
          {images.map((img, idx) => (
            <div key={img.id} className={`relative overflow-hidden rounded-xl shadow-sm border border-obsidian/5 group ${img.span}`}>
              <NextImage 
                src={img.src} 
                alt={img.title}
                fill
                priority={idx < 3} 
                className="object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                sizes="(max-width: 1280px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
