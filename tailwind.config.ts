import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all files inside src
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1A1A', // Deep, matte black
        bone: '#F5F5F4',     // Off-white, soft stone
        gold: '#C5A059',     // Muted metallic executive gold
        slate: '#4A4A4A',    // Mature grey for secondary text
        ash: '#7A7A7A',      // Optional lighter grey for text
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Headers
        body: ['Inter', 'sans-serif'],          // Body text
      },
      spacing: {
        'section': '6rem',   // Custom spacing between sections
        'section-lg': '10rem',
      },
    },
  },
  plugins: [],
}

export default config;