export default function StrategicGallery() {
  const images = [
    { id: 1, src: "/gfa-asset-1.jpg", title: "Digital Integration" },
    { id: 2, src: "/gfa-asset-2.jpg", title: "Investment Partnerships" },
    { id: 3, src: "/gfa-asset-3.jpg", title: "Sustainability Initiatives" },
    { id: 4, src: "/gfa-asset-4.jpg", title: "Innovation Culture" },
    { id: 5, src: "/gfa-asset-5.jpg", title: "Strategic Growth" },
    { id: 6, src: "/gfa-asset-6.jpg", title: "Wealth Acceleration" },
    { id: 7, src: "/gfa-asset-7.jpg", title: "Global Reach" },
    { id: 8, src: "/gfa-asset-8.jpg", title: "Corporate Excellence" },
  ];

  return (
    <section className="bg-bone py-20 border-t border-obsidian/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        {/* Layout Engine */}
        <div className="grid gap-3 
          /* Small (Top Layout): Horizontal Mini-Grid Blend */
          grid-cols-4 grid-rows-1 h-[120px] 
          
          /* Medium (Bottom Layout): Centered Hub Strategy */
          md:grid-cols-3 md:grid-rows-1 md:h-[400px]
          
          /* Large (Desktop): Asymmetrical Bento Layout */
          lg:grid-cols-4 lg:grid-rows-2 lg:h-[700px]">
          
          {/* Primary Featured Image */}
          <div className="relative group overflow-hidden bg-obsidian rounded-sm
            col-span-2 row-span-1 
            md:col-start-2 md:col-span-1 
            lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1">
            <img 
              src={images[0].src} 
              alt={images[0].title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
            />
          </div>

          {/* Supporting Asset 1 */}
          <div className="relative group overflow-hidden bg-obsidian rounded-sm
            col-span-1
            md:col-start-1 md:row-start-1
            lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-1">
            <img src={images[1].src} className="w-full h-full object-cover" />
          </div>

          {/* Supporting Asset 2 */}
          <div className="relative group overflow-hidden bg-obsidian rounded-sm
            col-span-1
            md:col-start-3 md:row-start-1
            lg:col-span-1 lg:row-span-1 lg:col-start-4 lg:row-start-1">
            <img src={images[2].src} className="w-full h-full object-cover" />
          </div>

          {/* Desktop Fillers (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block relative group overflow-hidden bg-obsidian rounded-sm lg:col-start-3 lg:row-start-2 lg:col-span-2">
            <img src={images[3].src} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
