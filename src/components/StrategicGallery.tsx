import { useState } from "react";

export default function StrategicGallery() {
  const images = [
    { id: 1, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/684082b08064a259b26c8ac3_final.jpg", title: "GFA Building" },
    { id: 2, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Fachada-1-Banco-Atlantida.webp", title: "Investment Partnerships" },
    { id: 3, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/683c906b73a0abb8064ee03f__DAS1362.jpg", title: "Sustainability Initiatives" },
    { id: 4, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida.jpg", title: "Innovation Culture" },
    { id: 5, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/honduras-bancas_11242238_20250701164910.jpg", title: "Strategic Growth" },
    { id: 6, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/images%20%283%29.jpeg", title: "Wealth Acceleration" },
    { id: 7, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/portada-09-02-2024-111-juntos.jpg", title: "Global Reach" },
    { id: 8, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/images.jpeg", title: "Corporate Excellence" },
  ];
  
  const [active, setActive] = useState(0);
  
  const prev = () =>
    setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === images.length - 1 ? 0 : i + 1));
  
  return (
    <section className="bg-bone py-20 border-t border-obsidian/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">

        {/* ========================= */}
        {/* SMALL SCREENS */}
        {/* Centered Card Carousel */}
        {/* ========================= */}
        <div className="md:hidden relative h-[320px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((img, index) => {
              const offset = index - active;

              return (
                <div
                  key={img.id}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${offset * 220}px) scale(${
                      index === active ? 1 : 0.85
                    })`,
                    filter: index === active ? "blur(0px)" : "blur(6px)",
                    opacity: index === active ? 1 : 0.4,
                    zIndex: index === active ? 10 : 1,
                  }}
                >
                  <div className="w-[220px] h-[300px] overflow-hidden rounded-md shadow-lg">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            ›
          </button>
        </div>

        {/* ========================= */}
        {/* MEDIUM SCREENS */}
        {/* Full-Bleed Overlapping */}
        {/* ========================= */}
        <div className="hidden md:block lg:hidden relative h-[420px] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700"
            style={{
              transform: `translateX(-${active * 75}%)`,
            }}
          >
            {images.map((img) => (
              <div
                key={img.id}
                className="min-w-[75%] mr-[-15%] h-full overflow-hidden rounded-sm"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
          >
            ›
          </button>
        </div>

        {/* ========================= */}
        {/* LARGE SCREENS */}
        {/* Horizontal Gallery */}
        {/* ========================= */}
        <div className="hidden lg:grid grid-cols-8 gap-4 h-[420px]">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden bg-obsidian rounded-sm group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}