"use client";
import { motion } from 'framer-motion';

export default function ProfileFactSheet() {
  return (
    <section className="relative py-24 bg-bone text-obsidian overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-obsidian/[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Section Header: The "Vertical Anchor" */}
          <div className="lg:col-span-4 border-l-2 border-gold pl-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4"
            >
              Leadership Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter leading-none mb-6">
              Executive <br /> Profile
            </h2>
            <div className="space-y-2">
               <p className="text-obsidian/40 text-[10px] uppercase tracking-widest font-bold">Current Tenure</p>
               <p className="text-obsidian font-medium">Grupo Financiero Atlántida</p>
            </div>
          </div>

          {/* Narrative Content: The "Strategic Vision" */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed text-obsidian/80">
                As the <span className="text-gold font-medium">Chief Technology Officer</span> and 
                <span className="text-gold font-medium"> Chief Administrative Officer</span> of Grupo Financiero Atlántida, 
                David Jackson Fernandez orchestrates the intersection of large-scale digital banking 
                infrastructure and strategic corporate governance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-obsidian/10">
                {/* Pillar 1: Digital Integration */}
                <div>
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Digital Integration</h4>
                  <p className="text-sm text-obsidian/60 leading-relaxed">
                    Driving the GFA Strategic Vision 2030 through the implementation of cloud-native 
                    digital banking cores and AI-driven financial analytics to accelerate regional growth.
                  </p>
                </div>

                {/* Pillar 2: Design Culture */}
                <div>
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Aesthetic Innovation</h4>
                  <p className="text-sm text-obsidian/60 leading-relaxed">
                    Founder of <span className="italic">KONCEPTO Décor</span>, bridging the gap between 
                    high-end Spanish minimalist design and the functional requirements of modern 
                    corporate environments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
