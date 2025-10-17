import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/hstraders/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

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
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="story-link hover-scale text-foreground cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="story-link hover-scale text-foreground cursor-pointer">About</a>
            <a href="#products" onClick={(e) => handleNavClick(e, "products")} className="story-link hover-scale text-foreground cursor-pointer">Products</a>
            <a href="#mission" onClick={(e) => handleNavClick(e, "mission")} className="story-link hover-scale text-foreground cursor-pointer">Mission</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="story-link hover-scale text-foreground cursor-pointer">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(326) 123-5456</span>
            </div>
            <Button variant="default" className="btn-hero" onClick={() => scrollToSection("contact")}>
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
              <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="story-link hover-scale text-foreground py-2 cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="story-link hover-scale text-foreground py-2 cursor-pointer">About</a>
              <a href="#products" onClick={(e) => handleNavClick(e, "products")} className="story-link hover-scale text-foreground py-2 cursor-pointer">Products</a>
              <a href="#mission" onClick={(e) => handleNavClick(e, "mission")} className="story-link hover-scale text-foreground py-2 cursor-pointer">Mission</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="story-link hover-scale text-foreground py-2 cursor-pointer">Contact</a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
                <Phone className="h-4 w-4" />
                <span>(326) 123-5456</span>
              </div>
              <Button variant="default" className="btn-hero w-full" onClick={() => scrollToSection("contact")}>
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