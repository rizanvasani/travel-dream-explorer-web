
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Search, User, Plane, Phone, Star, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Plane,
      title: 'Flight Bookings',
      description: 'Premium flight booking services with competitive rates and 24/7 support.',
      features: ['Global airline partnerships', 'Best price guarantee', 'Instant confirmation']
    },
    {
      icon: Globe,
      title: 'Tour Packages',
      description: 'Curated domestic and international packages for unforgettable experiences.',
      features: ['Custom itineraries', 'Expert guides', 'All-inclusive options']
    },
    {
      icon: User,
      title: 'Visa Services',
      description: 'Complete visa assistance and documentation support for hassle-free travel.',
      features: ['Document verification', 'Fast processing', 'Expert consultation']
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive travel protection for peace of mind during your journey.',
      features: ['Medical coverage', 'Trip cancellation', '24/7 emergency support']
    }
  ];

  const destinations = [
    { name: 'Dubai', country: 'UAE', image: '🏙️', packages: '15+ packages' },
    { name: 'Paris', country: 'France', image: '🗼', packages: '12+ packages' },
    { name: 'Maldives', country: 'Maldives', image: '🏝️', packages: '8+ packages' },
    { name: 'Goa', country: 'India', image: '🏖️', packages: '20+ packages' },
    { name: 'Singapore', country: 'Singapore', image: '🌆', packages: '10+ packages' },
    { name: 'Kerala', country: 'India', image: '🌴', packages: '18+ packages' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Journey to
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
            <span className="block">Begins Here</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Discover the world with Wisdom Tours & Travels - Your trusted partner for domestic and international travel experiences since 2010
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 shadow-xl">
              <Link to="/packages">
                <Globe className="w-5 h-5 mr-2" />
                Explore Packages
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/flights">
                <Plane className="w-5 h-5 mr-2" />
                Book Flights
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-gray-300">Destinations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive travel solutions designed to exceed your expectations at every step of your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center">
                        <Star className="w-3 h-3 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our most loved destinations with specially curated packages
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {destination.image}
                  </div>
                  <h3 className="font-semibold text-primary text-lg mb-1">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{destination.country}</p>
                  <p className="text-xs text-yellow-600 font-medium">{destination.packages}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-hero hover:opacity-90 shadow-lg">
              <Link to="/packages">
                View All Destinations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                Why Choose Wisdom Tours & Travels?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of excellence in the travel industry, we've built our reputation on trust, reliability, and exceptional service.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">Trusted & Reliable</h3>
                    <p className="text-muted-foreground">Licensed travel agency with IATA certification and government approvals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">Premium Experience</h3>
                    <p className="text-muted-foreground">Handcrafted itineraries and personalized service for memorable journeys</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock assistance wherever you are in the world</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square gradient-hero rounded-3xl p-8 text-white shadow-2xl">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8">
                    <Globe className="w-12 h-12" />
                  </div>
                  <h4 className="font-display text-3xl font-semibold mb-4">50,000+</h4>
                  <p className="text-xl mb-2">Happy Travelers</p>
                  <p className="text-gray-300">Trust us for their dream vacations</p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8 w-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">4.9/5</div>
                      <div className="text-sm text-gray-300">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">100+</div>
                      <div className="text-sm text-gray-300">Destinations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Next Adventure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let our travel experts craft the perfect journey for you. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
              <Link to="/packages">
                <Globe className="w-5 h-5 mr-2" />
                Explore Packages
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
