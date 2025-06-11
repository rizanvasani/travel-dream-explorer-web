
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Airplane, Calendar, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: Airplane,
      title: 'Flight Bookings',
      description: 'Search and book flights from hundreds of airlines worldwide with our advanced booking platform.',
      features: [
        'Real-time flight availability and pricing',
        'Flexible date searches and price alerts',
        'Multi-city and round-trip options',
        'Seat selection and special meal requests',
        'Mobile boarding passes',
        '24/7 booking support'
      ],
      benefits: 'Save up to 40% on flights compared to direct airline bookings'
    },
    {
      icon: Calendar,
      title: 'Hotel & Accommodation',
      description: 'From luxury resorts to budget-friendly hostels, find the perfect place to stay for your trip.',
      features: [
        'Over 1 million hotels worldwide',
        'Verified guest reviews and ratings',
        'Best price guarantee',
        'Free cancellation on most bookings',
        'Exclusive member-only deals',
        'Virtual hotel tours'
      ],
      benefits: 'Access to exclusive rates not available to the public'
    },
    {
      icon: User,
      title: 'Group Tours & Packages',
      description: 'Join our expertly crafted group tours or create a custom package for your perfect getaway.',
      features: [
        'Small group sizes (max 16 people)',
        'Expert local guides',
        'All-inclusive pricing',
        'Cultural immersion experiences',
        'Photography workshops',
        'Flexible itineraries'
      ],
      benefits: 'Meet like-minded travelers and create lasting friendships'
    },
    {
      icon: Search,
      title: 'Visa & Documentation',
      description: 'Navigate complex visa requirements with our comprehensive assistance and documentation services.',
      features: [
        'Visa requirement analysis',
        'Document preparation assistance',
        'Application tracking system',
        'Express processing options',
        'Travel insurance guidance',
        'Passport renewal services'
      ],
      benefits: '95% success rate with visa applications'
    }
  ];

  const additionalServices = [
    'Travel Insurance',
    'Airport Transfers',
    'Car Rentals',
    'Travel WiFi',
    'Currency Exchange',
    'Travel Gear Rental',
    'Emergency Assistance',
    'Trip Planning Consultation'
  ];

  const packages = [
    {
      title: 'Honeymoon Special',
      description: 'Romantic getaways designed for couples',
      price: 'From $2,499',
      duration: '7-14 days',
      includes: 'Flights, hotels, romantic dinners, spa treatments'
    },
    {
      title: 'Family Adventure',
      description: 'Kid-friendly destinations with exciting activities',
      price: 'From $1,899',
      duration: '5-10 days',
      includes: 'Flights, family rooms, activity passes, meals'
    },
    {
      title: 'Solo Explorer',
      description: 'Safe and enriching solo travel experiences',
      price: 'From $1,299',
      duration: '3-7 days',
      includes: 'Flights, accommodations, guided tours, safety support'
    },
    {
      title: 'Corporate Retreat',
      description: 'Team building and business travel solutions',
      price: 'Custom Pricing',
      duration: 'Flexible',
      includes: 'Group rates, meeting facilities, team activities'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive travel solutions designed to make your journey seamless, 
              memorable, and perfectly tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-travel rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-travel-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-travel-700 mb-2">Key Benefits</h4>
                    <p className="text-travel-600 text-sm">{service.benefits}</p>
                  </div>

                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-gradient-travel hover:opacity-90 w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Popular Travel Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-designed packages for different travel styles and preferences, 
              or let us create a custom itinerary just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="text-sm font-medium">{pkg.duration}</span>
                    </div>
                    <div className="text-travel-600 font-bold text-lg">{pkg.price}</div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-4">
                    Includes: {pkg.includes}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete travel support with all the extras you need for a worry-free journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-gradient-travel rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-medium text-foreground">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-travel text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let our travel experts help you create the perfect itinerary. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-travel-600 hover:bg-blue-50">
              <Link to="/flights">
                <Search className="w-5 h-5 mr-2" />
                Start Planning
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-travel-600">
              <Link to="/contact">
                <User className="w-5 h-5 mr-2" />
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
