import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import MissionVision from "@/components/MissionVision";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GallerySection />
        <MissionVision />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;