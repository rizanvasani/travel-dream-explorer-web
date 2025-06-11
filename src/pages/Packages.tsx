
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Star, Users, Plane, Phone } from 'lucide-react';

const Packages = () => {
  const [activeTab, setActiveTab] = useState('international');

  const internationalPackages = [
    {
      id: 1,
      title: 'Dubai Luxury Experience',
      destination: 'Dubai, UAE',
      duration: '5 Days / 4 Nights',
      price: '₹75,000',
      originalPrice: '₹85,000',
      rating: 4.8,
      reviews: 245,
      image: '🏙️',
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Luxury Hotels'],
      includes: ['Flights', 'Hotels', 'Transfers', 'Breakfast'],
      groupSize: '2-6 People'
    },
    {
      id: 2,
      title: 'Paris Romance Package',
      destination: 'Paris, France',
      duration: '7 Days / 6 Nights',
      price: '₹1,25,000',
      originalPrice: '₹1,40,000',
      rating: 4.9,
      reviews: 189,
      image: '🗼',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise', 'Versailles'],
      includes: ['Flights', 'Hotels', 'City Tours', 'Meals'],
      groupSize: '2-4 People'
    },
    {
      id: 3,
      title: 'Maldives Paradise',
      destination: 'Maldives',
      duration: '4 Days / 3 Nights',
      price: '₹95,000',
      originalPrice: '₹1,10,000',
      rating: 4.9,
      reviews: 156,
      image: '🏝️',
      highlights: ['Water Villa', 'Snorkeling', 'Spa', 'Private Beach'],
      includes: ['Flights', 'Resort', 'All Meals', 'Activities'],
      groupSize: '2 People'
    },
    {
      id: 4,
      title: 'Singapore Explorer',
      destination: 'Singapore',
      duration: '5 Days / 4 Nights',
      price: '₹65,000',
      originalPrice: '₹75,000',
      rating: 4.7,
      reviews: 203,
      image: '🌆',
      highlights: ['Marina Bay', 'Universal Studios', 'Gardens by Bay', 'Sentosa'],
      includes: ['Flights', 'Hotels', 'City Pass', 'Transfers'],
      groupSize: '2-6 People'
    }
  ];

  const domesticPackages = [
    {
      id: 5,
      title: 'Kerala Backwaters',
      destination: 'Kerala, India',
      duration: '6 Days / 5 Nights',
      price: '₹35,000',
      originalPrice: '₹42,000',
      rating: 4.8,
      reviews: 312,
      image: '🌴',
      highlights: ['Houseboat', 'Munnar Hills', 'Kochi', 'Ayurveda Spa'],
      includes: ['Transport', 'Hotels', 'Houseboat', 'Meals'],
      groupSize: '2-8 People'
    },
    {
      id: 6,
      title: 'Goa Beach Holiday',
      destination: 'Goa, India',
      duration: '4 Days / 3 Nights',
      price: '₹25,000',
      originalPrice: '₹30,000',
      rating: 4.6,
      reviews: 428,
      image: '🏖️',
      highlights: ['Beach Resorts', 'Water Sports', 'Old Goa', 'Night Markets'],
      includes: ['Flights', 'Hotels', 'Transfers', 'Breakfast'],
      groupSize: '2-6 People'
    },
    {
      id: 7,
      title: 'Rajasthan Royal Tour',
      destination: 'Rajasthan, India',
      duration: '8 Days / 7 Nights',
      price: '₹55,000',
      originalPrice: '₹65,000',
      rating: 4.9,
      reviews: 267,
      image: '🏰',
      highlights: ['Jaipur Palaces', 'Udaipur Lakes', 'Desert Safari', 'Heritage Hotels'],
      includes: ['Transport', 'Hotels', 'Meals', 'Guided Tours'],
      groupSize: '4-12 People'
    },
    {
      id: 8,
      title: 'Himachal Adventure',
      destination: 'Himachal Pradesh, India',
      duration: '7 Days / 6 Nights',
      price: '₹40,000',
      originalPrice: '₹48,000',
      rating: 4.7,
      reviews: 189,
      image: '🏔️',
      highlights: ['Manali', 'Shimla', 'Adventure Sports', 'Hill Stations'],
      includes: ['Transport', 'Hotels', 'Activities', 'Meals'],
      groupSize: '4-10 People'
    }
  ];

  const PackageCard = ({ pkg }: { pkg: any }) => (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {pkg.image}
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 text-white">{Math.round(((pkg.originalPrice.replace('₹', '').replace(',', '') - pkg.price.replace('₹', '').replace(',', '')) / pkg.originalPrice.replace('₹', '').replace(',', '')) * 100)}% OFF</Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-primary border-primary">
              {pkg.groupSize}
            </Badge>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{pkg.rating}</span>
              <span className="text-sm text-muted-foreground">({pkg.reviews})</span>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
            {pkg.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {pkg.destination}
          </p>

          <div className="flex items-center text-muted-foreground mb-4">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{pkg.duration}</span>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm text-primary mb-2">Highlights:</h4>
            <div className="flex flex-wrap gap-1">
              {pkg.highlights.slice(0, 3).map((highlight: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {highlight}
                </Badge>
              ))}
              {pkg.highlights.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{pkg.highlights.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Includes */}
          <div className="mb-6">
            <h4 className="font-semibold text-sm text-primary mb-2">Includes:</h4>
            <div className="flex flex-wrap gap-1">
              {pkg.includes.map((item: string, index: number) => (
                <span key={index} className="text-xs text-muted-foreground bg-slate-100 px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
              </div>
              <span className="text-xs text-muted-foreground">per person</span>
            </div>
            <Button className="gradient-hero hover:opacity-90">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Tour Packages
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated travel packages for domestic and international destinations. 
              Each package is designed to create unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                <TabsTrigger value="international" className="text-sm font-semibold">
                  International
                </TabsTrigger>
                <TabsTrigger value="domestic" className="text-sm font-semibold">
                  Domestic
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="international" className="space-y-8">
              <div className="text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                  International Packages
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore the world with our premium international travel packages
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {internationalPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="domestic" className="space-y-8">
              <div className="text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                  Domestic Packages
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover the incredible beauty and diversity of India
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {domesticPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our travel experts can create a personalized itinerary just for you. 
            Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-hero hover:opacity-90 shadow-lg">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp for Custom Package
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
