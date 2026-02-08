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

      {/* Top Black Stage */}
      <div className="bg-black h-[420px]" />

      {/* Bottom White Stage */}
      <div className="bg-gray-50 pb-32">
        <div className="relative max-w-5xl mx-auto px-6">

          {/* White Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white shadow-2xl pt-40 pb-12 px-10"
          >

            {/* Floating Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 -top-24 -translate-x-1/2 bg-white p-4 shadow-2xl"
            >
              <Image
                src={imageSrc}
                alt={`${name} profile`}
                width={360}
                height={360}
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Profile Label */}
            <div className="uppercase tracking-widest text-xs text-gray-500 mb-4 text-center">
              Profile
            </div>

            {/* Name */}
            <h2 className="text-4xl font-serif mb-2 text-center">
              {name}
            </h2>

            {/* Title */}
            <p className="text-gray-700 mb-10 text-center">
              {title}, {organization}
            </p>

            {/* Metrics */}
            <div className="grid md:grid-cols-2 gap-10 border-t pt-8">
              <div>
                <div className="text-sm text-gray-500 mb-1">
                  Real Time Net Worth
                </div>
                <div className="text-3xl font-semibold">
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
                <div className="text-lg font-medium">
                  {rankNote}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  as of {asOf}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}