// tailwind.config.ts
import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
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
        body: ["Inter", "sans-serif", "Roboto Mono"],
        display: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAgMAAADNEp7UAAAADFBMVEUAAAD///////8clp9WAAAAAnRSTlMAAHaTzTgAAAAXSURBVAjXY2hgYGBgYGCYwcDAwMCgAQA87AKB4M0mOQAAAABJRU5ErkJggg==')",
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.text-balanced-justify': {
          textAlign: 'justify',
          textJustify: 'inter-word',
          hyphens: 'auto',
        },
      })
    }),
  ],
};

export default config;