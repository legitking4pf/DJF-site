"use client";
import {
  useState,
  useEffect
} from 'react';
import {
  motion,
  AnimatePresence
} from 'framer-motion';

const videos = [
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background-P51XsIl1YPox7tNRCZLrxRKES9if7c",
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background%202-NfCSrQzlEgyjm9E1s0Ag6XOLVMFnMJ"
];

export default function Hero() {
  const [index,
    setIndex] = useState(0);

  // Switch videos every 8 seconds for a calm, executive pace
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1: 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-obsidian text-bone overflow-hidden">
      {/* 1. Cross-Fading Video Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={ { opacity: 0 }}
            animate={ { opacity: 0.4 }} // Keeping opacity low for text readability
            exit={ { opacity: 0 }}
            transition={ { duration: 3, ease: "easeInOut" }} // Soft 3-second transition
            className="absolute inset-0 w-full h-full"
            >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover object-center grayscale"
              >
              <source src={videos[index]} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* 2. Professional Overlays (Spotlight Effect) */}
    <div className="absolute inset-0 z-10 bg-radial-gradient from-transparent via-obsidian/20 to-obsidian/90" />

    {/* 3. The Content (Static and Sharp) */}
    <motion.div
      initial={ { opacity: 0, y: 20 }}
      animate={ { opacity: 1, y: 0 }}
      transition={ { duration: 1.5, delay: 0.5 }}
      className="relative z-20 text-center px-6"
      ><h2 className="text-5xl md:text-8xl font-display mb-8 tracking-tighter uppercase leading-[0.9] text-left">
        AT THE INTERSECTION OF <br />
      FIN<span className="text-gold italic">TECH</span> & CORPORATE <br />
    STRATEGY AND DESIGN
  </h2>


  <div className="flex flex-col items-center gap-6">
    <div className="h-px w-24 bg-gold/50" />
    <div className="space-y-1">
      <p className="text-gold tracking-[0.5em] uppercase text-sm font-bold">
        David Jackson Fernandez
      </p>
      <p className="text-bone/40 text-[10px] uppercase tracking-[0.3em] font-light">
        Strategic Growth • Digital Integration • Aesthetic Innovation
      </p>
    </div>
  </div>
</motion.div>

  {/* 4. Elegant Line Detail */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-gold/40 to-transparent z-20" />
</section>
);
}