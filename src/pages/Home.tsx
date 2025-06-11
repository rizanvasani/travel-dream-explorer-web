
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Search, User, Airplane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Airplane,
      title: 'Flight Bookings',
      description: 'Find and book the best flights at competitive prices with our advanced search technology.',
      features: ['Global airline partnerships', 'Real-time price comparison', '24/7 booking support']
    },
    {
      icon: Calendar,
      title: 'Hotel Packages',
      description: 'Comfortable accommodations from budget-friendly to luxury resorts worldwide.',
      features: ['Verified hotel reviews', 'Best price guarantee', 'Flexible cancellation']
    },
    {
      icon: User,
      title: 'Group Tours',
      description: 'Curated group travel experiences with expert guides and unique itineraries.',
      features: ['Small group sizes', 'Cultural immersion', 'All-inclusive packages']
    },
    {
      icon: Search,
      title: 'Visa Assistance',
      description: 'Complete visa processing support to make your international travel hassle-free.',
      features: ['Document verification', 'Application tracking', 'Expert consultation']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-travel-500 via-ocean-500 to-travel-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Journey
            <span className="block text-ocean-200">Begins Here</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-300">
            Discover the world with WanderWays - Your trusted travel companion for unforgettable adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button asChild size="lg" className="bg-white text-travel-600 hover:bg-blue-50 text-lg px-8 py-3">
              <Link to="/flights">
                <Search className="w-5 h-5 mr-2" />
                Search Flights
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-travel-600 text-lg px-8 py-3">
              <Link to="/services">
                <Calendar className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About WanderWays
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a passion for travel and a commitment to exceptional service, WanderWays has been helping adventurers explore the world for over a decade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To make travel accessible, affordable, and unforgettable for everyone. We believe that exploring new cultures, meeting new people, and creating lasting memories should be within reach for all travelers.
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Why Choose Us</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-travel-500 rounded-full mr-3"></div>
                    10+ years of travel industry experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-travel-500 rounded-full mr-3"></div>
                    24/7 customer support worldwide
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-travel-500 rounded-full mr-3"></div>
                    Best price guarantee on all bookings
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-travel-500 rounded-full mr-3"></div>
                    Trusted by over 100,000 happy travelers
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-travel rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="w-10 h-10" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold mb-4">100,000+</h4>
                  <p className="text-lg">Happy Travelers</p>
                  <p className="text-blue-100 mt-2">and counting...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From flights to accommodations, we offer comprehensive travel services to make your journey seamless and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-travel rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-travel hover:opacity-90">
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-travel text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of satisfied travelers who trust WanderWays for their journey planning. 
            Let us help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-travel-600 hover:bg-blue-50">
              <Link to="/flights">
                <Search className="w-5 h-5 mr-2" />
                Search Flights Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-travel-600">
              <Link to="/contact">
                <User className="w-5 h-5 mr-2" />
                Speak to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
