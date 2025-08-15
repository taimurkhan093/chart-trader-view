import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 animate-fade-in py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to partner with us? We're here to assist you with any inquiries, orders, 
              or support you may need. Let's discuss how we can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="card-premium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Call us directly</p>
                  <p className="text-lg font-semibold">(326) 123-5456</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for urgent inquiries</p>
                </CardContent>
              </Card>

              <Card className="card-premium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Send us a message</p>
                  <p className="text-lg font-semibold">info@hstraderspk.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="card-premium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Visit our facility</p>
                  <p className="text-lg font-semibold">Khewra Salt Mines, Pakistan</p>
                  <p className="text-sm text-muted-foreground">Factory tours available by appointment</p>
                </CardContent>
              </Card>

              <Card className="card-premium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-premium border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Enter your company name"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What can we help you with?"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      placeholder="Tell us more about your requirements..."
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <Button className="btn-hero w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Trading?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied businesses worldwide. Get a custom quote 
                for your Himalayan pink salt requirements today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero px-8">
                  Request Wholesale Quote
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-2 hover:bg-primary/10">
                  Download Product Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;