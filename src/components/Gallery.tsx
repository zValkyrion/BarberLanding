
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const galleryItems = [
    { id: 1, category: "haircuts", title: "Modern Fade", rating: 5, artist: "Marcus" },
    { id: 2, category: "beards", title: "Sculpted Beard", rating: 5, artist: "David" },
    { id: 3, category: "haircuts", title: "Classic Pompadour", rating: 4, artist: "James" },
    { id: 4, category: "beards", title: "Full Beard Trim", rating: 5, artist: "Alex" },
    { id: 5, category: "haircuts", title: "Textured Crop", rating: 5, artist: "Marcus" },
    { id: 6, category: "styles", title: "Complete Makeover", rating: 5, artist: "David" },
    { id: 7, category: "haircuts", title: "Slicked Back", rating: 4, artist: "James" },
    { id: 8, category: "beards", title: "Mustache Style", rating: 5, artist: "Alex" }
  ];

  const filters = [
    { id: "all", label: "All Work", icon: "✨" },
    { id: "haircuts", label: "Haircuts", icon: "✂️" },
    { id: "beards", label: "Beards", icon: "🧔" },
    { id: "styles", label: "Styling", icon: "💫" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden liquid-bg">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)] animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-primary rounded-full floating-element opacity-70"></div>
      <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-accent rounded-full floating-element-slow opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full floating-element-fast opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 scroll-reveal line-draw">
            OUR <span className="text-morphing">PORTFOLIO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 scroll-reveal typewriter">
            Witness the transformation. Every cut tells a story of precision, artistry, and pure luxury craftsmanship.
          </p>

          {/* Ultra Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 relative overflow-hidden group morph-button micro-bounce
                  ${activeFilter === filter.id
                    ? "glass-card text-primary pulse-glow"
                    : "neuro-card text-foreground hover:clay-card hover:text-primary tilt-hover"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{filter.icon}</span>
                  {filter.label}
                </span>
                {activeFilter !== filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                )}
                
                {/* Progress bar for active filter */}
                {activeFilter === filter.id && (
                  <div className="absolute bottom-0 left-0 right-0 progress-bar h-0.5">
                    <div className="progress-fill bg-gradient-to-r from-primary to-accent"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Ultra Enhanced Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={`${item.id}-${activeFilter}`} 
              className={`group overflow-hidden relative transition-all duration-700 cursor-pointer
                ${isLoaded ? 'fade-in-up' : ''}
                ${hoveredItem === item.id ? 'card-3d scale-105 z-10' : 'neuro-card'}
                ${hoveredItem !== null && hoveredItem !== item.id ? 'scale-95 opacity-70' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="image-reveal">
                  <img 
                    src="/placeholder.svg" 
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-120 group-hover:rotate-2"
                  />
                </div>
                
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-6 liquid-bg">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold text-lg text-morphing">{item.title}</h3>
                      <Badge className="bg-primary text-black pulse-glow">
                        {item.rating}★
                      </Badge>
                    </div>
                    <div className="progress-bar h-1 mb-2 bg-white/20">
                      <div className="progress-fill bg-gradient-to-r from-primary to-accent" style={{ width: `${item.rating * 20}%` }}></div>
                    </div>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      Crafted by <span className="text-primary font-semibold">{item.artist}</span>
                    </p>
                    <p className="text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                      Premium styling with attention to every detail
                    </p>
                  </div>
                </div>

                {/* Multiple Shimmer Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 delay-200"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 delay-400"></div>
                
                {/* Animated Corner Accents */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-in"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-in delay-200"></div>
                
                {/* Floating Rating Stars */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-primary rounded-full floating-element-fast" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Badge className="glass-card text-xs pulse-ring">
                    {item.category}
                  </Badge>
                </div>

                {/* Loading Skeleton Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 skeleton-loading"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ultra Enhanced View More Section */}
        <div className="text-center mt-12 scroll-reveal">
          <div className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full hover:neuro-card transition-all duration-700 cursor-pointer group morph-button tilt-hover">
            <span className="font-semibold text-liquid">View Complete Portfolio</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 pulse-ring">
              <span className="text-black font-bold floating-element-fast">→</span>
            </div>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
