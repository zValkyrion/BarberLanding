
import { useState } from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            OUR <span className="text-gradient">PORTFOLIO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Witness the transformation. Every cut tells a story of precision and artistry.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-black glow-gold"
                    : "bg-secondary text-foreground hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <div className="w-8 h-1 bg-primary mt-2"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
