"use client";
import { useEffect, useRef, useState } from "react";

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

  // Helper: compute minimal offset (so the carousel wraps visually)
  const getOffset = (index: number, activeIndex: number, length: number) => {
    let diff = index - activeIndex;
    const half = Math.floor(length / 2);
    if (diff > half) diff -= length;
    if (diff < -half) diff += length;
    return diff;
  };

  // Autoplay effect (2 seconds)
  useEffect(() => {
    if (paused) {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      setActive(i => (i === images.length - 1 ? 0 : i + 1));
    }, 2000);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [paused, images.length]);

  // Touch handlers for mobile carousel
  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchDeltaX.current = 0;
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    touchDeltaX.current = currentX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    const threshold = 50; // px
    if (delta > threshold) {
      prev();
    } else if (delta < -threshold) {
      next();
    }
    // briefly pause after user interaction to avoid immediate autoplay
    setTimeout(() => setPaused(false), 1200);
  };

  // Pause on mouse enter for desktop/tablet controls
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <section
      className="bg-bone py-24 border-t border-obsidian/5"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        {/* Header / Intro */}
        <div className="mb-8 text-center">
          <h2 id="gallery-heading" className="text-3xl md:text-4xl font-semibold text-obsidian mb-2">
             Galeria
          </h2>
          <p className="text-sm md:text-base text-obsidian/60 max-w-3xl mx-auto">
            A curated editorial layout on large screens, an immersive full-bleed carousel on tablets,
            and a focused centered-card experience on phones. Swipe or use arrows to navigate.
          </p>
        </div>

        {/* MOBILE: Centered Card Carousel */}
        <div
          className="md:hidden relative h-[380px] flex items-center justify-center overflow-visible"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((img, index) => {
            const offset = getOffset(index, active, images.length);
            const cardWidth = 260; // px, used for translateX
            return (
              <div
                key={img.id}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transform: `translateX(${offset * cardWidth}px) scale(${index === active ? 1 : 0.82})`,
                  filter: index === active ? "blur(0px)" : "blur(4px)",
                  opacity: index === active ? 1 : 0.35,
                  zIndex: index === active ? 30 : 10,
                  pointerEvents: index === active ? "auto" : "none",
                }}
                aria-hidden={index === active ? "false" : "true"}
              >
                <div className="w-[240px] h-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-obsidian">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}

          {/* Controls */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-6 items-center">
            <button
              onClick={() => { setPaused(true); prev(); setTimeout(() => setPaused(false), 1200); }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-2xl leading-none"
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 1200); }}
                  className={`w-2 h-2 rounded-full ${i === active ? "bg-obsidian" : "bg-obsidian/20"}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => { setPaused(true); next(); setTimeout(() => setPaused(false), 1200); }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-2xl leading-none"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>

        {/* TABLET: Full-Bleed Overlapping Carousel */}
        <div
          className="hidden md:block lg:hidden relative h-[500px] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex h-full transition-transform duration-900 ease-in-out"
            style={{ transform: `translateX(-${active * 65}%)` }}
          >
            {images.map((img) => (
              <div
                key={img.id}
                className="min-w-[70%] mr-[-12%] h-[450px] overflow-hidden rounded-xl shadow-xl transition-all duration-500"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <button
            onClick={() => { setPaused(true); prev(); setTimeout(() => setPaused(false), 1200); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => { setPaused(true); next(); setTimeout(() => setPaused(false), 1200); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* DESKTOP: Editorial Bento Grid */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-6 h-[850px]">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-2xl shadow-sm border border-obsidian/5 group transition-all duration-500 ${img.span}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                style={{ willChange: "transform, opacity" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm tracking-widest font-light uppercase">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}