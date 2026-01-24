// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#A67C00', // Institutional Gold
          light: '#C5A059',
          dark: '#856404',
        },
        obsidian: '#050505',
        bone: '#FDFBF7',
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;