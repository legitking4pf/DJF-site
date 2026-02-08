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
    <section className="relative w-full bg-white font-body">
      {/* Top Stage - Using your 'obsidian' color */}
      <div className="bg-obsidian h-[320px] w-full" />

      {/* Content Wrapper */}
      <div className="max-w-[80%] mx-auto px-4 -mt-[220px]">
        <div className="flex flex-col items-center">
          
          {/* Profile Image - Large Forbes Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-[50%] z-10"
          >
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Info Section */}
          <div className="w-full max-w-[800px] bg-white pt-10 pb-16">
            
            {/* Forbes 'F' Branding */}
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="bg-obsidian text-white font-black px-2 py-0.5 text-sm">F</div>
              <span className="uppercase tracking-[0.3em] text-[11px] font-bold text-obsidian">
                Profile
              </span>
            </div>

            {/* Name & Title */}
            <div className="text-center mb-16 px-6">
              <h1 className="text-[16px] md:text-2xl font-display text-obsidian mb-4 tracking-tight">
                {name}
              </h1>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                {title}, <span className="text-obsidian">{organization}</span>
              </p>
            </div>

            {/* Metrics Layout - Matches the reference grid exactly */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100 pt-12">
              
              {/* Left Column: The Big Number */}
              <div className="flex flex-col items-start md:items-end md:pr-12 md:border-r border-gray-100 pb-8 md:pb-0">
                <div className="text-[64px] font-display font-medium leading-none text-obsidian mb-3">
                  {netWorth}
                </div>
                <div className="flex items-center text-green-700 font-bold text-xl">
                  <span className="mr-2 text-2xl">▲</span> {netWorthDelta}
                </div>
              </div>

              {/* Right Column: The Stats */}
              <div className="flex flex-col justify-center md:pl-12">
                <div className="text-xl font-bold text-obsidian mb-1">
                  Real Time Net Worth
                </div>
                <div className="text-sm text-gray-500 mb-4 italic">
                  as of {asOf}
                </div>
                <div className="text-[#005587] font-semibold text-lg hover:underline cursor-pointer">
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
