import { Button } from "@/components/ui/button";
import { Star, Award, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hstraders/about-2.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden animate-fade-in">

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Trust Indicators */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm font-medium">Trusted by 500+ Businesses</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your Trusted Partner in{" "}
            <span className="text-gradient">Premium Himalayan</span>{" "}
            Pink Salt
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            Sourced directly from the world-renowned Khewra Salt Mines, we deliver 
            100% natural, food-grade Himalayan pink salt products to businesses worldwide.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-medium">100% Natural & Pure</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-6 w-6 text-primary" />
              <span className="font-medium">International Certified</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-medium">Global Export</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              View Our Products
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-primary/10">
              Request Wholesale Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 hover:bg-primary/10"
              onClick={() => window.open('/catalogue.pdf', '_blank')}
            >
              Download Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Natural Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2023</div>
              <div className="text-sm text-muted-foreground">Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;