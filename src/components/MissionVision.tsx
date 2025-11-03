import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Globe } from "lucide-react";
import founderImage from "@/assets/hstraders/founder-1.jpg";
import coFounderImage from "@/assets/hstraders/founder-2.jpg";
import facilityImage from "@/assets/hstraders/about-1.jpeg";

const MissionVision = () => {
  return (
    <section id="mission" className="scroll-mt-24 animate-fade-in py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Mission & Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Driven by passion and commitment to excellence, we strive to make the natural 
              goodness of Himalayan pink salt accessible to people across the globe.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission Card */}
            <Card className="card-premium border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Our mission is to raise awareness about the many benefits of Himalayan salt 
                  while offering a wide selection of premium-quality Himalayan pink rock salt products.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Promote natural health benefits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Deliver premium quality products</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Build lasting customer relationships</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="card-premium border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Established in 2023, H&S Traders aims to be a trusted manufacturer, wholesaler, 
                  and exporter of high-quality Himalayan salt products, promoting healthier lifestyles 
                  and creating natural, sustainable solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Become the global leader in Himalayan salt</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Create sustainable business solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Foster healthier lifestyle choices</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Founder Section with Real Images */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Meet Our Leadership</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Founder */}
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={founderImage} 
                    alt="H&S Traders Founder" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-medium"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-2">CEO & Founder</h4>
                  <p className="text-primary font-semibold">H&S Trading Co.</p>
                </div>
              </div>
              
              {/* Co-Founder */}
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={coFounderImage} 
                    alt="H&S Traders Co-Founder" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-medium"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-2">Co-Founder</h4>
                  <p className="text-primary font-semibold">H&S Trading Co.</p>
                </div>
              </div>
            </div>
            
            {/* Founder Quote and Description */}
            <div className="space-y-6">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                "At H&S Trading Co., we are dedicated to extracting 100% natural, unadulterated 
                Himalayan pink salt from the renowned Khewra Salt Mines in Pakistan. As the world's 
                largest and only source of this rare pink salt, our mission is to make its natural 
                goodness accessible to people across the globe."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                Since day one, our goal has been simple: to produce high-quality Himalayan salt 
                products and distribute them to both individuals and businesses worldwide. Through 
                extensive research and by carefully analyzing customer needs, we have developed an 
                exclusive range of products designed to meet diverse demands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For us, it's not just about profit—we aim to be your partner in success. With a 
                focus on mutual growth, profitability, and guaranteed customer satisfaction, we are 
                here to help you thrive every step of the way.
              </p>
            </div>
          </div>

          {/* Our Facility */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our State-of-the-Art Facility</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Located at the heart of the Khewra Salt Mines, our facility combines traditional 
                mining expertise with modern processing technology.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={facilityImage} 
                alt="H&S Traders Facility at Khewra Salt Mines" 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl md:text-3xl font-bold mb-2">
                  World-Class Processing & Quality Control
                </h4>
                <p className="text-muted-foreground max-w-2xl">
                  Our facility at Khewra Salt Mines ensures every product meets international 
                  standards with rigorous quality control and modern processing techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Partnership Focus</h4>
              <p className="text-muted-foreground">
                For us, it's not just about profit—we aim to be your partner in success with 
                a focus on mutual growth and profitability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Global Reach</h4>
              <p className="text-muted-foreground">
                Committed to making natural goodness accessible to people across the globe 
                through our extensive distribution network.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Customer Satisfaction</h4>
              <p className="text-muted-foreground">
                Guaranteed customer satisfaction with exceptional service, recognizing the 
                importance of strong, lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;