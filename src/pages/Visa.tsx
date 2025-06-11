
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, FileText, Phone, Shield, Star, Users } from 'lucide-react';

const Visa = () => {
  const visaServices = [
    {
      country: 'Dubai (UAE)',
      flag: '🇦🇪',
      processingTime: '3-5 Working Days',
      price: '₹8,500',
      validity: '30 Days',
      type: 'Tourist Visa',
      features: ['Online Application', 'Express Processing', 'Document Support'],
      successRate: '99%'
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      processingTime: '5-7 Working Days',
      price: '₹6,200',
      validity: '30 Days',
      type: 'Tourist Visa',
      features: ['Multiple Entry', 'Fast Track', 'Complete Assistance'],
      successRate: '98%'
    },
    {
      country: 'Thailand',
      flag: '🇹🇭',
      processingTime: '4-6 Working Days',
      price: '₹4,800',
      validity: '60 Days',
      type: 'Tourist Visa',
      features: ['Easy Process', 'Quick Approval', 'Travel Insurance'],
      successRate: '99%'
    },
    {
      country: 'Malaysia',
      flag: '🇲🇾',
      processingTime: '3-4 Working Days',
      price: '₹3,500',
      validity: '30 Days',
      type: 'Tourist Visa',
      features: ['Online Process', 'Same Day', 'Photo Service'],
      successRate: '100%'
    },
    {
      country: 'Europe (Schengen)',
      flag: '🇪🇺',
      processingTime: '10-15 Working Days',
      price: '₹12,500',
      validity: '90 Days',
      type: 'Tourist Visa',
      features: ['Multiple Countries', 'Interview Support', 'Documentation'],
      successRate: '95%'
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      processingTime: '15-30 Working Days',
      price: '₹18,000',
      validity: '10 Years',
      type: 'Tourist Visa',
      features: ['Interview Preparation', 'DS-160 Form', 'Complete Support'],
      successRate: '92%'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Document Collection',
      description: 'Our experts will guide you on required documents based on your destination',
      icon: FileText
    },
    {
      step: 2,
      title: 'Application Processing',
      description: 'We handle the complete application process and submission to embassy',
      icon: Users
    },
    {
      step: 3,
      title: 'Tracking & Updates',
      description: 'Regular updates on your application status and processing timeline',
      icon: Clock
    },
    {
      step: 4,
      title: 'Visa Collection',
      description: 'Safe delivery of your approved visa with complete travel guidance',
      icon: CheckCircle
    }
  ];

  const requiredDocuments = [
    'Valid Passport (minimum 6 months validity)',
    'Recent passport-size photographs',
    'Completed visa application form',
    'Flight itinerary and hotel bookings',
    'Bank statements (last 6 months)',
    'Employment letter and salary slips',
    'Travel insurance (where required)',
    'Additional country-specific documents'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Visa Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional visa assistance with 95%+ success rate. We handle the complexity, 
              you focus on planning your dream vacation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Visa Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">15+ Years</h3>
              <p className="text-muted-foreground">Visa Processing Experience</p>
            </div>
            <div>
              <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">95%+</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div>
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">25,000+</h3>
              <p className="text-muted-foreground">Visas Processed</p>
            </div>
            <div>
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">50+</h3>
              <p className="text-muted-foreground">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Visa Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Popular Visa Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast, reliable, and hassle-free visa processing for your favorite destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((visa, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{visa.flag}</div>
                  <CardTitle className="text-xl font-bold text-primary">{visa.country}</CardTitle>
                  <Badge className="w-fit mx-auto gradient-hero text-white">{visa.type}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Processing:</span>
                      <p className="font-semibold">{visa.processingTime}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Validity:</span>
                      <p className="font-semibold">{visa.validity}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Features:</h4>
                    {visa.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-2xl font-bold text-primary">{visa.price}</div>
                      <div className="text-xs text-muted-foreground">Success: {visa.successRate}</div>
                    </div>
                    <Button className="gradient-hero hover:opacity-90">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Visa Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent, and efficient visa processing in 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 gradient-hero rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              General Document Requirements
            </h2>
            <p className="text-xl text-muted-foreground">
              Basic documents required for most visa applications
            </p>
          </div>

          <Card className="border-0 bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{doc}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Document requirements may vary by country and visa type. 
                  Our experts will provide you with a complete checklist specific to your destination.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply for Your Visa?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Get expert assistance and ensure your visa approval. Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Consultation
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call for Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visa;
