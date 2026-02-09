import React from 'react';

// Define the shape of our grid item
interface GridItem {
  id: number;
  src: string;
  alt: string;
  className?: string; 
}

// Placeholder data - Replace 'src' with your actual image URLs
const gridItems: GridItem[] = [
  // COLUMN 1
  { id: 1, src: '/img/car-retro.jpg', alt: 'Retro Car', className: 'h-64' },
  { id: 2, src: '/img/forest.jpg', alt: 'Forest Texture', className: 'h-64' },
  { id: 3, src: '/img/desk.jpg', alt: 'Minimal Workspace', className: 'h-64' },
  { id: 4, src: '/img/giraffe.jpg', alt: 'Wildlife', className: 'h-64' },

  // COLUMN 2 (Contains the Hero Portrait)
  { 
    id: 5, 
    src: '/img/hero-portrait.jpg', 
    alt: 'Hero Portrait', 
    // SPAN: Spans 2 rows on Desktop to create the "Anchor"
    className: 'h-[33rem] md:row-span-2 object-top' 
  },
  { id: 6, src: '/img/van.jpg', alt: 'Sunset Van', className: 'h-64' },
  { id: 7, src: '/img/laptop.jpg', alt: 'Dark Mode Laptop', className: 'h-64' },

  // COLUMN 3
  { id: 8, src: '/img/flowers.jpg', alt: 'Macro Flowers', className: 'h-64' },
  { id: 9, src: '/img/beach.jpg', alt: 'Moody Beach', className: 'h-64' },
  { id: 10, src: '/img/garage.jpg', alt: 'Modern Garage', className: 'h-64' },
  { id: 11, src: '/img/bedroom.jpg', alt: 'Wood Interior', className: 'h-64' },

  // COLUMN 4
  { id: 12, src: '/img/balcony.jpg', alt: 'Cliff House', className: 'h-64' },
  { id: 13, src: '/img/buggy.jpg', alt: 'Dune Buggy', className: 'h-64' },
  { 
    id: 14, 
    src: '/img/snow-lake.jpg', 
    alt: 'Snowy Lake House', 
    // A wider/larger shot at the end to ground the layout
    className: 'h-64' 
  },
];

const HeroGrid: React.FC = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto p-4">
      {/* GRID CONFIGURATION:
        - Mobile: 1 Column (grid-cols-1)
        - Tablet: 2 Columns (md:grid-cols-2)
        - Desktop: 4 Columns (lg:grid-cols-4)
        - Dense flow helps fill gaps if heights vary slightly
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
        
        {/* MAPPING STRATEGY: 
           To replicate the vertical columns exactly as seen in the image,
           we need to be careful with CSS Grid 'auto-flow'. 
           
           Standard CSS Grid fills Row 1 (Left->Right) then Row 2.
           The reference image is organized by COLUMNS (Top->Bottom).
           
           To achieve the Masonry look without complex JS libraries, 
           we map them into 4 distinct flexible columns for Desktop,
           but combine them for smaller screens.
        */}

        {/* --- COLUMN 1 (Desktop) --- */}
        <div className="flex flex-col gap-4">
          <GridCard item={gridItems[0]} /> {/* Car */}
          <GridCard item={gridItems[1]} /> {/* Forest */}
          <GridCard item={gridItems[2]} /> {/* Desk */}
          <GridCard item={gridItems[3]} /> {/* Giraffe */}
        </div>

        {/* --- COLUMN 2 (Desktop) --- */}
        <div className="flex flex-col gap-4">
          {/* This is the Hero Portrait. On mobile, we might want it larger. */}
          <GridCard item={gridItems[4]} priority={true} /> 
          <GridCard item={gridItems[5]} /> {/* Van */}
          <GridCard item={gridItems[6]} /> {/* Laptop */}
        </div>

        {/* --- COLUMN 3 (Desktop) --- */}
        <div className="flex flex-col gap-4">
          <GridCard item={gridItems[7]} /> {/* Flowers */}
          <GridCard item={gridItems[8]} /> {/* Beach */}
          <GridCard item={gridItems[9]} /> {/* Garage */}
          <GridCard item={gridItems[10]} /> {/* Bedroom */}
        </div>

        {/* --- COLUMN 4 (Desktop) --- */}
        <div className="flex flex-col gap-4">
          <GridCard item={gridItems[11]} /> {/* Balcony */}
          <GridCard item={gridItems[12]} /> {/* Buggy */}
          <GridCard item={gridItems[13]} /> {/* Snow Lake */}
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual cards
const GridCard: React.FC<{ item: GridItem; priority?: boolean }> = ({ item, priority }) => {
  return (
    <div 
      className={`relative overflow-hidden group rounded-sm ${priority ? 'flex-grow-[2]' : ''}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.className || 'h-64'}`}
        loading="lazy"
      />
      {/* Optional Overlay on Hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default HeroGrid;
