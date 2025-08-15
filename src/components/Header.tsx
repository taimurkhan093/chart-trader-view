import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/hstraders/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="H&S Traders" className="h-10 w-10 rounded-lg" />
            <div className="text-xl font-bold text-gradient">H&S TRADERS</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="story-link hover-scale text-foreground">Home</a>
            <a href="#about" className="story-link hover-scale text-foreground">About</a>
            <a href="#products" className="story-link hover-scale text-foreground">Products</a>
            <a href="#mission" className="story-link hover-scale text-foreground">Mission</a>
            <a href="#contact" className="story-link hover-scale text-foreground">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(326) 123-5456</span>
            </div>
            <Button variant="default" className="btn-hero">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 p-4 animate-slide-in-right">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="story-link hover-scale text-foreground py-2">Home</a>
              <a href="#about" className="story-link hover-scale text-foreground py-2">About</a>
              <a href="#products" className="story-link hover-scale text-foreground py-2">Products</a>
              <a href="#mission" className="story-link hover-scale text-foreground py-2">Mission</a>
              <a href="#contact" className="story-link hover-scale text-foreground py-2">Contact</a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
                <Phone className="h-4 w-4" />
                <span>(326) 123-5456</span>
              </div>
              <Button variant="default" className="btn-hero w-full">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;