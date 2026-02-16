"use client";
import Image from "next/image";

const gridItems = [
  { id: 1, src: "/api/placeholder/400/300", alt: "Car" },
  { id: 2, src: "/api/placeholder/400/600", alt: "Forest" },
  { id: 3, src: "/api/placeholder/800/1000", alt: "Portrait" },
  { id: 4, src: "/api/placeholder/400/300", alt: "Macro" },
  { id: 5, src: "/api/placeholder/400/300", alt: "Modern House" },
  { id: 6, src: "/api/placeholder/400/300", alt: "Lighthouse" },
  { id: 7, src: "/api/placeholder/400/300", alt: "UTV" },
  { id: 8, src: "/api/placeholder/400/300", alt: "Desk" },
  { id: 9, src: "/api/placeholder/400/300", alt: "Van" },
  { id: 10, src: "/api/placeholder/400/300", alt: "Garage" },
  { id: 11, src: "/api/placeholder/400/300", alt: "Giraffe" },
  { id: 12, src: "/api/placeholder/400/300", alt: "Laptop" },
  { id: 13, src: "/api/placeholder/1200/800", alt: "Snow Cabin" },
  { id: 14, src: "/api/placeholder/400/300", alt: "Bedroom" },
];

export default function ExecutiveImage() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="bento-grid-layer">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`bento-item grid-item-${item.id}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}