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
    <section className="relative">

      {/* ===== BLACK STAGE ===== */}
      <div className="relative bg-black h-[520px]">

        {/* Floating Portrait anchored to black stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 bg-white p-4 shadow-2xl z-20"
        >
          <Image
            src={imageSrc}
            alt={`${name} profile`}
            width={400}
            height={400}
            priority
            className="object-cover"
          />
        </motion.div>

      </div>

      {/* ===== WHITE EDITORIAL ZONE ===== */}
      <div className="relative bg-white pt-40 pb-32">

        {/* Offset Info Panel (NOT centered card) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            relative
            max-w-4xl
            ml-auto
            mr-auto
            lg:mr-24
            bg-white
            px-10
            py-12
            border-l-4
            border-black
          "
        >
          {/* Editorial Label */}
          <div className="uppercase tracking-widest text-xs text-gray-500 mb-4">
            Executive Profile
          </div>

          {/* Name */}
          <h2 className="text-5xl font-serif leading-tight mb-3">
            {name}
          </h2>

          {/* Role */}
          <p className="text-lg text-gray-700 mb-10">
            {title}, {organization}
          </p>

          {/* Metrics — stacked editorial, not grid marketing */}
          <div className="space-y-8 border-t pt-8">

            <div>
              <div className="text-sm text-gray-500 mb-1">
                Real Time Net Worth
              </div>
              <div className="text-4xl font-semibold">
                {netWorth}
              </div>
              <div className="text-green-600 text-sm mt-1">
                ▲ {netWorthDelta}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">
                Ranking
              </div>
              <div className="text-xl font-medium">
                {rankNote}
              </div>
              <div className="text-xs text-gray-400 mt-2">
                as of {asOf}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}