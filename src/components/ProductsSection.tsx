import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, Zap, Shield } from "lucide-react";
import edibleImg from "@/assets/hstraders/product-edible.jpg";
import bricksImg from "@/assets/hstraders/product-bricks.png";
import licksImg from "@/assets/hstraders/product-licks.png";
import lampsImg from "@/assets/hstraders/product-lamps.png";
import heroProducts from "@/assets/hstraders/about-1.jpeg";

const ProductsSection = () => {
  const products = [
    {
      title: "Edible Salt",
      description:
        "100% natural, rich in essential minerals, and sourced directly from the Khewra Salt Mines. Known for its distinctive pink hue and purity, this salt enhances flavor while offering health benefits.",
      features: [
        "Food Grade Certified",
        "Rich in Minerals",
        "Premium Quality",
        "Various Sizes",
      ],
      icon: Heart,
      rating: 5,
      color: "from-pink-500 to-rose-500",
      image: edibleImg,
    },
    {
      title: "Salt Bricks",
      description:
        "Crafted from pure, natural pink salt, making them ideal for decorative and wellness applications. Perfect for salt walls, spas, and cooking surfaces.",
      features: [
        "Decorative Use",
        "Spa Applications",
        "Cooking Surface",
        "Wellness Benefits",
      ],
      icon: Shield,
      rating: 5,
      color: "from-orange-500 to-red-500",
      image: bricksImg,
    },
    {
      title: "Salt Licks",
      description:
        "100% natural mineral-rich salt blocks, specially designed to support the health and well-being of livestock. Help improve hydration and promote healthy growth.",
      features: [
        "Livestock Health",
        "Mineral Rich",
        "Natural Hydration",
        "Growth Support",
      ],
      icon: Zap,
      rating: 5,
      color: "from-amber-500 to-orange-500",
      image: licksImg,
    },
    {
      title: "Salt Lamps",
      description:
        "Handcrafted from natural pink salt crystals, offering a warm, soothing glow. Known for their calming ambiance and potential air-purifying properties.",
      features: ["Air Purifying", "Calming Ambiance", "Handcrafted", "Unique Designs"],
      icon: Star,
      rating: 5,
      color: "from-yellow-500 to-amber-500",
      image: lampsImg,
    },
  ];

  return (
    <section id="products" className="scroll-mt-24 animate-fade-in py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Premium <span className="text-gradient">Product Range</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive collection of high-quality Himalayan pink salt products, 
              each carefully crafted to meet international standards and diverse business needs.
            </p>
          </div>

          {/* Hero Product Image */}
          <div className="relative mb-16 rounded-3xl overflow-hidden">
            <img 
              src={heroProducts} 
              alt="Premium Himalayan Salt Products" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Premium Quality, Naturally Pure
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                Every product is sourced from the pristine Khewra Salt Mines and processed 
                with the highest quality standards to ensure purity and excellence.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="card-premium border-0 group hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                  <div className="flex items-center space-x-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">5/5</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src={product.image}
                    alt={`${product.title} - Himalayan Pink Salt`}
                    className="w-full h-36 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full hover:bg-primary/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Quality Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-success font-bold">HACCP</span>
                </div>
                <span className="text-sm text-muted-foreground">Food Safety</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">HALAL</span>
                </div>
                <span className="text-sm text-muted-foreground">Certified</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-success font-bold">ISO</span>
                </div>
                <span className="text-sm text-muted-foreground">Quality</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">FDA</span>
                </div>
                <span className="text-sm text-muted-foreground">Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;