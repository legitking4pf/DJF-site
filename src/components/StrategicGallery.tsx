"use client";
import { useState } from "react";

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
  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));
  
  return (
    <section className="bg-bone py-24 border-t border-obsidian/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        {/* MOBILE: Centered Card Carousel */}
        <div className="md:hidden relative h-[380px] flex items-center justify-center overflow-hidden">
          {images.map((img, index) => {
            const offset = index - active;
            return (
              <div key={img.id} className="absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transform: `translateX(${offset * 240}px) scale(${index === active ? 1 : 0.8})`,
                  filter: index === active ? "blur(0px)" : "blur(4px)",
                  opacity: index === active ? 1 : 0.3,
                  zIndex: index === active ? 20 : 10,
                }}>
                <div className="w-[240px] h-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
          <div className="absolute bottom-0 flex gap-8">
            <button onClick={prev} className="p-4 text-obsidian/60 hover:text-obsidian text-2xl">‹</button>
            <button onClick={next} className="p-4 text-obsidian/60 hover:text-obsidian text-2xl">›</button>
          </div>
        </div>

        {/* TABLET: Full-Bleed Overlapping Carousel */}
        <div className="hidden md:block lg:hidden relative h-[500px] overflow-hidden">
          <div className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${active * 65}%)` }}>
            {images.map((img) => (
              <div key={img.id} className="min-w-[70%] mr-[-10%] h-[450px] overflow-hidden rounded-xl shadow-xl transition-all duration-500">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button onClick={next} className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">›</button>
        </div>

        {/* DESKTOP: Editorial Bento Grid */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-6 h-[850px]">
          {images.map((img) => (
            <div key={img.id} className={`relative overflow-hidden rounded-2xl shadow-sm border border-obsidian/5 group transition-all duration-500 ${img.span}`}>
              <img src={img.src} alt={img.title} 
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" />
              {/* Minimal Overlay for "Executive-level privacy" */}
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
"use client";
import { useState } from "react";

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
  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));
  
  return (
    <section className="bg-bone py-24 border-t border-obsidian/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        {/* MOBILE: Centered Card Carousel */}
        <div className="md:hidden relative h-[380px] flex items-center justify-center overflow-hidden">
          {images.map((img, index) => {
            const offset = index - active;
            return (
              <div key={img.id} className="absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transform: `translateX(${offset * 240}px) scale(${index === active ? 1 : 0.8})`,
                  filter: index === active ? "blur(0px)" : "blur(4px)",
                  opacity: index === active ? 1 : 0.3,
                  zIndex: index === active ? 20 : 10,
                }}>
                <div className="w-[240px] h-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
          <div className="absolute bottom-0 flex gap-8">
            <button onClick={prev} className="p-4 text-obsidian/60 hover:text-obsidian text-2xl">‹</button>
            <button onClick={next} className="p-4 text-obsidian/60 hover:text-obsidian text-2xl">›</button>
          </div>
        </div>

        {/* TABLET: Full-Bleed Overlapping Carousel */}
        <div className="hidden md:block lg:hidden relative h-[500px] overflow-hidden">
          <div className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${active * 65}%)` }}>
            {images.map((img) => (
              <div key={img.id} className="min-w-[70%] mr-[-10%] h-[450px] overflow-hidden rounded-xl shadow-xl transition-all duration-500">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button onClick={next} className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">›</button>
        </div>

        {/* DESKTOP: Editorial Bento Grid */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-6 h-[850px]">
          {images.map((img) => (
            <div key={img.id} className={`relative overflow-hidden rounded-2xl shadow-sm border border-obsidian/5 group transition-all duration-500 ${img.span}`}>
              <img src={img.src} alt={img.title} 
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" />
              {/* Minimal Overlay for "Executive-level privacy" */}
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
