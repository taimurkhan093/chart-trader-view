import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/10 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="H&S Traders" className="h-12 w-12 rounded-lg" />
                <div className="text-2xl font-bold text-gradient">H&S TRADERS</div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Your trusted partner in premium Himalayan pink salt. Sourcing the finest 
                natural salt products from the world-renowned Khewra Salt Mines since 2023.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(326) 123-5456</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@hstraderspk.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Khewra Salt Mines, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#mission" className="text-muted-foreground hover:text-primary transition-colors">
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-muted-foreground">Edible Salt</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Salt Bricks</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Salt Licks</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Salt Lamps</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Custom Products</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-border/50 pt-8 mb-8">
            <h4 className="text-lg font-semibold mb-6 text-center">Quality Certifications</h4>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-success font-bold text-xs">HACCP</span>
                </div>
                <span className="text-xs text-muted-foreground">Food Safety</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold text-xs">HALAL</span>
                </div>
                <span className="text-xs text-muted-foreground">Certified</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-success font-bold text-xs">ISO</span>
                </div>
                <span className="text-xs text-muted-foreground">Quality</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold text-xs">FDA</span>
                </div>
                <span className="text-xs text-muted-foreground">Approved</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2023 H&S Traders. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Serving 50+ countries worldwide</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;