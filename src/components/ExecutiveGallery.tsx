"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import NextImage from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  type?: 'hero' | 'normal' | 'wide' | 'standard';
}

const galleryData: GalleryItem[] = [
  // Image 1 is now our "Author Hero"
  { id: 1, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/main.png', type: 'hero' },
  { id: 2, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/2.jpg', type: 'standard' },
  { id: 3, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/3.jpg', type: 'standard' },
  { id: 4, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/4.jpg', type: 'standard' },
  { id: 5, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/5.jpg', type: 'standard' },
  { id: 6, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/6.jpg', type: 'normal' },
  { id: 7, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/7.jpg', type: 'standard' },
  { id: 8, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/8.png', type: 'standard' },
  { id: 9, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/9.jpg', type: 'standard' },
  { id: 10, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/10.jpg', type: 'wide' },
  { id: 11, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/11.jpg', type: 'standard' },
  { id: 12, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/12.jpg', type: 'standard' },
  { id: 13, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/13.jpg', type: 'standard' },
  { id: 14, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/14.jpg', type: 'standard' },
];

export default function ExecutiveGallery() {
  const getSpan = (type?: string) => {
    switch (type) {
      case 'normal':
        return 'col-span-2 md:col-span-2 row-span-2 md:row-span-2';
      case 'wide':
        return 'col-span-2 md:col-span-3 row-span-1 md:row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  // Separate the hero from the rest of the grid items
  const heroItem = galleryData.find(item => item.type === 'hero');
  const otherItems = galleryData.filter(item => item.type !== 'hero');

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: Author Definition & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          
          {/* Text Definition */}
          <div className="lg:col-span-5 pb-4">
            <div className="flex items-center gap-4 mb-8">
              <Camera className="text-gold w-4 h-4" />
              <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
                The CAO Gallery
              </span>
            </div>
            
            <h1 className="text-4xl font-light text-obsidian mb-2 tracking-tight">
              David Jackson Fernandez
            </h1>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80 mb-8 font-medium">
              Chief Administrative Officer
            </p>

            <div className="space-y-6 text-obsidian/70 text-sm leading-relaxed">
              <p className="content-justify" lang="en">
                As the Chief Administrative Officer, David Jackson Fernandez 
                stewards the institutional legacy and operational integrity 
                of the organization. His leadership is defined by a commitment 
                to structural clarity and the seamless integration of 
                administrative strategy within the corporate landscape.
              </p>
              <p className="text-justify hyphens-auto" lang="en">
                This archive serves as a formal visual record of his tenure, 
                capturing the precision, environment, and perspective that 
                shape the modern institutional experience.
              </p>
            </div>
          </div>

          {/* Featured Hero Image */}
          {heroItem && (
            <div className="lg:col-span-7 h-[500px] relative overflow-hidden bg-obsidian/5 border border-gold/10">
              <NextImage 
                src={heroItem.src} 
                alt="Executive Portrait" 
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
            </div>
          )}
        </div>

        {/* SECTION 2: The Grid (The Archive) */}
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] md:auto-rows-[180px] grid-flow-dense gap-2 md:gap-1.5 overflow-hidden">
          {otherItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className={`group relative overflow-hidden bg-obsidian/5 border border-gold/5 ${getSpan(item.type)}`}
            >
              <NextImage 
                src={item.src} 
                alt={`Executive Archive ${item.id}`} 
                fill
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110
                  ${item.type === 'wide' ? 'object-top' : 'object-center'}`}
                loading="lazy" 
              />
              
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] font-mono text-white tracking-[0.3em] uppercase">
                  Ref: {item.id.toString().padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
