"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExecutiveBioProps {
  name: string;
  title: string;
  organization: string;
  netWorth: string;
  netWorthDelta: string;
  rankNote: string;
  asOf: string;
  imageSrc: string;
}

export default function ExecutiveBio({
  name,
  title,
  organization,
  netWorth,
  netWorthDelta,
  rankNote,
  asOf,
  imageSrc,
}: ExecutiveBioProps) {
  return (
    <section className="relative w-full bg-white font-body overflow-hidden">
      {/* 1. Top Black Stage: Height 340px */}
      <div className="bg-obsidian h-[340px] w-full" />

      {/* 2. Content Wrapper: max-width 680px for that tight Forbes column look */}
      <div className="relative max-w-[680px] mx-auto px-4">
        <div className="flex flex-col items-center">

          {/* 3. Profile Image: 440px x 440px 
              -mt-[220px] pulls it exactly halfway into the black stage
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-[440px] h-[440px] z-20"
          >
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* 4. Info Card: Removing the max-height constraint so it can grow */}
          <div className="w-full bg-white pt-12 pb-10">

            {/* Forbes 'F' Branding */}
            <div className="flex items-center justify-center gap-2">
              <div className="bg-obsidian text-white font-black px-2 py-0.5 text-[14px] leading-none">
                F
              </div>
              <span className="uppercase tracking-[0.3em] text-[12px] font-bold text-obsidian">
                Profile
              </span>
            </div>

            {/* Name & Title: Font sizes matched to Forbes header scale */}
            <div className="text-center px-6">
              <h1 className="text-[30px] font-display text-obsidian mb-2 tracking-tight leading-tight">
                {name}
              </h1>
              <p className="text-[17px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                {title}, <span className="text-obsidian">{organization}</span>
              </p>
            </div>

            {/* 5. Metrics Layout: 2-column grid with vertical divider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100 pt-12">

              {/* Left Column: The Big Number (64px) */}
              <div className="flex flex-col items-start md:items-end md:pr-12 md:border-r border-gray-100 pb-8 md:pb-0">
                <div className="text-[64px] font-display font-medium leading-none text-obsidian mb-2 tracking-tighter">
                  {netWorth}
                </div>
                <div className="flex items-center text-lg font-bold text-obsidian">
                  <span className="mr-2 text-2xl text-green-700">▲</span> {netWorthDelta}
                </div>
              </div>

              {/* Right Column: The Stats */}
              <div className="flex flex-col justify-center md:pl-12">
                <div className="text-[14px] font-bold text-obsidian mb-1">
                  Real Time Net Worth
                </div>
                <div className="text-sm text-gray-400 mb-4 italic font-light">
                  as of {asOf}
                </div>
                <div className="text-[#005587] font-semibold text-[12px] hover:underline cursor-pointer">
                  {rankNote}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
