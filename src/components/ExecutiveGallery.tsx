"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import NextImage from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  type ? : 'hero' | 'normal' | 'wide' | 'standard';
}

const galleryData: GalleryItem[] = [
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
  // Logic to map your HTML classes to Tailwind grid spans
  const getSpan = (type ? : string) => {
    switch (type) {
      case 'hero':
        return 'col-span-2 md:col-span-3 row-span-2 md:row-span-3';
      case 'normal':
        return 'col-span-2 md:col-span-2 row-span-2 md:row-span-2';
      case 'wide':
        return 'col-span-2 md:col-span-3 row-span-1 md:row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };
  
  return (
    <section className="bg-bone py-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Header to match your Profile style */}
        <div className="flex items-center gap-4 mb-12">
          <Camera className="text-gold w-5 h-5" />
          <h3 className="font-display uppercase tracking-widest text-obsidian text-sm font-bold">
            Visual Documentation <span className="text-gold/40 ml-2 font-mono">// DJF-ARCHIVE</span>
          </h3>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] md:auto-rows-[180px] grid-flow-dense gap-2 md:gap-1.5 overflow-hidden">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden bg-obsidian/5 border border-gold/5 ${getSpan(item.type)}`}
            >
              {/* Image with hover scaling */}
              <NextImage 
                src={item.src} 
                alt={`Executive Archive ${item.id}`} 
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110
                  ${item.type === 'wide' ? 'object-top' : 'object-center'}`}
                loading="lazy" 
              />
              
              {/* Ref label appearing on hover */}
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