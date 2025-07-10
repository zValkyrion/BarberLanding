
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const galleryItems = [
    { id: 1, category: "haircuts", title: "Modern Fade" },
    { id: 2, category: "beards", title: "Sculpted Beard" },
    { id: 3, category: "haircuts", title: "Classic Pompadour" },
    { id: 4, category: "beards", title: "Full Beard Trim" },
    { id: 5, category: "haircuts", title: "Textured Crop" },
    { id: 6, category: "styles", title: "Complete Makeover" },
    { id: 7, category: "haircuts", title: "Slicked Back" },
    { id: 8, category: "beards", title: "Mustache Style" }
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "haircuts", label: "Haircuts" },
    { id: "beards", label: "Beards" },
    { id: "styles", label: "Styling" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 scroll-reveal">
            OUR <span className="text-gradient">PORTFOLIO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 scroll-reveal">
            Witness the transformation. Every cut tells a story of precision, artistry, and pure luxury craftsmanship.
          </p>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 magnetic-hover relative overflow-hidden group
                  ${activeFilter === filter.id
                    ? "bg-primary text-black pulse-glow"
                    : "bg-secondary text-foreground hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/30"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{filter.label}</span>
                {activeFilter !== filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={`${item.id}-${activeFilter}`} 
              className={`group overflow-hidden luxury-card hover:border-accent/50 transition-all duration-500 relative
                ${isLoaded ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Luxury Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <div className="w-12 h-1 bg-primary mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      Premium styling with attention to every detail
                    </p>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-12 scroll-reveal">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer group">
            <span className="font-semibold">View Complete Portfolio</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black font-bold">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
