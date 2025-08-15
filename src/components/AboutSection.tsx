import { Card, CardContent } from "@/components/ui/card";
import aboutImg from "@/assets/hstraders/about-2.jpeg";
import { Mountain, Factory, Truck, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Mountain,
      title: "Premium Source",
      description: "Sourced from Khewra Salt Mines, the world's second-largest salt reserve"
    },
    {
      icon: Factory,
      title: "Expert Processing",
      description: "State-of-the-art processing and packaging facilities with international standards"
    },
    {
      icon: Truck,
      title: "Global Reach",
      description: "Efficient supply chain serving businesses in 50+ countries worldwide"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated to building lasting relationships with exceptional service"
    }
  ];

  return (
    <section id="about" className="scroll-mt-24 animate-fade-in py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">H&S Traders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Established in 2023, we specialize in sourcing, processing, packaging, and exporting 
              high-quality Himalayan pink salt products to businesses worldwide.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Our Commitment to Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                H&S Trader specializes in sourcing, processing, packaging, and exporting high-quality 
                Himalayan pink salt. We source our salt from the Khewra Salt Mines, the world's 
                second-largest salt reserve, known for producing some of the finest Himalayan pink salt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our products are certified to international standards. With our premium-quality offerings, 
                competitive pricing, bulk manufacturing capabilities, and expert services, we enable your 
                business to operate more efficiently while benefiting from our industry expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing exceptional customer service, recognizing the importance 
                of strong, lasting relationships for our clients' success.
              </p>
            </div>

            <div className="relative">
              <div className="card-premium p-0 overflow-hidden"> 
                <img src={aboutImg} alt="About H&S Traders - Himalayan Pink Salt" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-premium border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;