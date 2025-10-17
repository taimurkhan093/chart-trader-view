import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import all gallery images
import saltHandsWhite from "@/assets/gallery/salt-hands-white.jpg";
import saltBowlsPink from "@/assets/gallery/salt-bowls-pink.jpg";
import saltVarietyColors from "@/assets/gallery/salt-variety-colors.jpg";
import saltPinkPile from "@/assets/gallery/salt-pink-pile.jpg";
import saltPinkFine from "@/assets/gallery/salt-pink-fine.jpg";
import saltPinkSpoon from "@/assets/gallery/salt-pink-spoon.jpg";
import saltContainerBags from "@/assets/gallery/salt-container-bags.jpg";
import saltChunksPink from "@/assets/gallery/salt-chunks-pink.jpg";
import saltChunksCloseup from "@/assets/gallery/salt-chunks-closeup.jpg";
import saltSlabsArranged from "@/assets/gallery/salt-slabs-arranged.jpg";
import saltGranularPink from "@/assets/gallery/salt-granular-pink.jpg";
import saltSlabsOutdoor from "@/assets/gallery/salt-slabs-outdoor.jpg";
import saltBowlPink from "@/assets/gallery/salt-bowl-pink.jpg";
import saltBlackChunks from "@/assets/gallery/salt-black-chunks.jpg";
import saltRedChunks from "@/assets/gallery/salt-red-chunks.jpg";
import saltBlackGranular from "@/assets/gallery/salt-black-granular.jpg";
import saltRedChunks2 from "@/assets/gallery/salt-red-chunks-2.jpg";
import saltPinkWhiteMix from "@/assets/gallery/salt-pink-white-mix.jpg";
import saltRedGranular from "@/assets/gallery/salt-red-granular.jpg";
import saltLamps from "@/assets/gallery/salt-lamps.jpg";

const galleryImages = [
  { src: saltHandsWhite, alt: "Pure White Himalayan Salt Crystals", category: "White Salt" },
  { src: saltBowlsPink, alt: "Pink Salt in Decorative Bowls", category: "Pink Salt" },
  { src: saltVarietyColors, alt: "Variety of Salt Colors", category: "Mixed Varieties" },
  { src: saltPinkPile, alt: "Pink Himalayan Salt Crystals", category: "Pink Salt" },
  { src: saltPinkFine, alt: "Fine Ground Pink Salt", category: "Pink Salt" },
  { src: saltPinkSpoon, alt: "Pink Salt with Wooden Spoon", category: "Pink Salt" },
  { src: saltContainerBags, alt: "Bulk Salt Storage and Shipping", category: "Bulk Supply" },
  { src: saltChunksPink, alt: "Natural Pink Salt Chunks", category: "Pink Salt" },
  { src: saltChunksCloseup, alt: "Pink Salt Chunks Close-up", category: "Pink Salt" },
  { src: saltSlabsArranged, alt: "Himalayan Salt Slabs", category: "Salt Slabs" },
  { src: saltGranularPink, alt: "Granular Pink Salt", category: "Pink Salt" },
  { src: saltSlabsOutdoor, alt: "Natural Salt Slabs", category: "Salt Slabs" },
  { src: saltBowlPink, alt: "Pink Salt in Bowl", category: "Pink Salt" },
  { src: saltBlackChunks, alt: "Black Himalayan Salt Chunks", category: "Black Salt" },
  { src: saltRedChunks, alt: "Red Himalayan Salt Chunks", category: "Red Salt" },
  { src: saltBlackGranular, alt: "Black Salt Granules", category: "Black Salt" },
  { src: saltRedChunks2, alt: "Natural Red Salt Rocks", category: "Red Salt" },
  { src: saltPinkWhiteMix, alt: "Pink and White Salt Mix", category: "Mixed Varieties" },
  { src: saltRedGranular, alt: "Red Salt Granules", category: "Red Salt" },
  { src: saltLamps, alt: "Himalayan Salt Lamps", category: "Salt Products" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Pink Salt", "Black Salt", "Red Salt", "White Salt", "Salt Slabs", "Mixed Varieties", "Bulk Supply", "Salt Products"];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Product Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium collection of Himalayan salt products, showcasing the natural beauty and variety of our offerings
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-accent text-foreground hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in hover-scale"
              onClick={() => setSelectedImage(index)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-square overflow-hidden bg-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm mb-1">{image.alt}</p>
                <span className="text-primary text-xs font-medium">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            {selectedImage !== null && (
              <div className="relative flex items-center justify-center min-h-[80vh] p-8">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="max-h-[85vh] max-w-full object-contain rounded-lg"
                />
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <p className="text-white text-lg font-semibold mb-2">
                    {filteredImages[selectedImage].alt}
                  </p>
                  <span className="text-primary text-sm font-medium">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
