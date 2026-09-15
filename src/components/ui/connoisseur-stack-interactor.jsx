import { cn } from "../../lib/utils";
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const defaultItems = [
  {
    num: "01",
    name: "NOBROKER PACKERS",
    image: "/nobroker_behance.jpg",
    tag: "CASE STUDY",
    linkUrl: "/work/nobroker-packers-movers-ux"
  },
  {
    num: "02",
    name: "HOZATRA STOREFRONT",
    image: "/real_aftter.png",
    tag: "CASE STUDY",
    linkUrl: "/work/hozatra-corporate-web-ui"
  },
  {
    num: "03",
    name: "SEED TO SOUL",
    image: "/real_seedtosoul.png",
    tag: "LIVE WEBSITE ↗",
    externalUrl: "https://www.seedtosoul.co/",
    linkUrl: "https://www.seedtosoul.co/"
  }
];

export const ConnoisseurStackInteractor = ({
  items = defaultItems,
  className,
  onItemSelect
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    if (onItemSelect) onItemSelect(index);
  };

  const activeItem = items[activeIndex] || items[0];

  const handleItemClick = (item) => {
    if (!item.linkUrl) return;
    if (item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = item.linkUrl;
    }
  };

  return (
    <div 
      className={cn(
        "flex flex-col md:flex-row items-center justify-between w-full p-4 md:p-8 overflow-hidden transition-colors duration-500",
        "bg-transparent", 
        className
      )}
    >
      
      {/* LEFT SIDE: HIGH CONTRAST MENU */}
      <div className="z-20 w-full md:w-1/2">
        <nav>
          <ul className="flex flex-col gap-6 md:gap-8">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <li
                  key={item.num || index}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleItemClick(item)}
                  className="group cursor-pointer select-none"
                >
                  <div className="flex items-start gap-5">
                    <span className={cn(
                      "text-xl md:text-2xl font-bold transition-all duration-500 mt-1.5 font-mono",
                      isActive 
                        ? "text-[#A93207] scale-110" 
                        : "text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-400" 
                    )}>
                      {item.num}
                    </span>
                    
                    <div className="space-y-1">
                      <h2 className={cn(
                        "text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.95] transition-all duration-500 font-display flex items-center gap-2",
                        isActive 
                          ? "text-white opacity-100 translate-x-2" 
                          : "opacity-40 translate-x-0 text-zinc-400 group-hover:opacity-70"
                      )}>
                        <span>
                          {item.name.split(' ')[0]} {item.name.split(' ').slice(1).join(' ')}
                        </span>
                        {isActive && (
                          <ArrowUpRight className="w-5 h-5 text-[#A93207] shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        )}
                      </h2>

                      {isActive && item.tag && (
                        <span className="inline-block text-[10px] font-mono tracking-widest text-[#A93207] font-semibold uppercase pl-0.5">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* RIGHT SIDE: CLEAN FULL IMAGE PREVIEW */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="absolute w-[110%] h-[110%] bg-[#A93207]/15 blur-[120px] rounded-full transition-opacity duration-1000" />
        
        <div 
          onClick={() => handleItemClick(activeItem)}
          className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/80 shadow-2xl z-10 group cursor-pointer"
        >
          {items.map((item, index) => (
            <img
              key={item.num || index}
              src={item.image}
              alt={item.name}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105",
                activeIndex === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20 pointer-events-none" />

          {/* Minimal Live Site Floating Pill */}
          {activeItem?.externalUrl && (
            <div className="absolute top-4 right-4 z-30 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg group-hover:bg-[#A93207] group-hover:border-[#A93207] transition-all">
              <span>LIVE SITE</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
