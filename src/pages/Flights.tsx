
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Search, Airplane, User } from 'lucide-react';
import { toast } from 'sonner';

const Flights = () => {
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1',
    class: 'economy'
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    if (!searchForm.from || !searchForm.to || !searchForm.departure) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // This is where you would integrate with your chosen flight API
    toast.success('Searching for flights... (API integration needed)');
    console.log('Flight search parameters:', searchForm);
  };

  // Sample flight results for demonstration
  const sampleFlights = [
    {
      id: 1,
      airline: 'WanderAir',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departure: '08:30',
      arrival: '20:45',
      duration: '7h 15m',
      stops: 'Non-stop',
      price: '$649',
      class: 'Economy'
    },
    {
      id: 2,
      airline: 'SkyConnect',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departure: '14:20',
      arrival: '02:35+1',
      duration: '7h 15m',
      stops: 'Non-stop',
      price: '$729',
      class: 'Economy'
    },
    {
      id: 3,
      airline: 'GlobalWings',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departure: '22:15',
      arrival: '10:30+1',
      duration: '7h 15m',
      stops: 'Non-stop',
      price: '$589',
      class: 'Economy'
    }
  ];

  const popularDestinations = [
    { city: 'Paris', country: 'France', code: 'CDG', image: '🇫🇷' },
    { city: 'Tokyo', country: 'Japan', code: 'NRT', image: '🇯🇵' },
    { city: 'London', country: 'UK', code: 'LHR', image: '🇬🇧' },
    { city: 'Dubai', country: 'UAE', code: 'DXB', image: '🇦🇪' },
    { city: 'Sydney', country: 'Australia', code: 'SYD', image: '🇦🇺' },
    { city: 'New York', country: 'USA', code: 'JFK', image: '🇺🇸' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Search */}
      <section className="relative py-20 bg-gradient-to-br from-travel-500 via-ocean-500 to-travel-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Flight
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Search and compare flights from hundreds of airlines worldwide. 
              Get the best deals with our advanced flight search technology.
            </p>
          </div>

          {/* Flight Search Form */}
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Search className="w-5 h-5 mr-2" />
                Search Flights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <Input
                    id="from"
                    placeholder="Departure city or airport"
                    value={searchForm.from}
                    onChange={(e) => handleInputChange('from', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <Input
                    id="to"
                    placeholder="Destination city or airport"
                    value={searchForm.to}
                    onChange={(e) => handleInputChange('to', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="departure">Departure Date</Label>
                  <Input
                    id="departure"
                    type="date"
                    value={searchForm.departure}
                    onChange={(e) => handleInputChange('departure', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="return">Return Date (Optional)</Label>
                  <Input
                    id="return"
                    type="date"
                    value={searchForm.return}
                    onChange={(e) => handleInputChange('return', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passengers">Passengers</Label>
                  <Select value={searchForm.passengers} onValueChange={(value) => handleInputChange('passengers', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Passenger</SelectItem>
                      <SelectItem value="2">2 Passengers</SelectItem>
                      <SelectItem value="3">3 Passengers</SelectItem>
                      <SelectItem value="4">4 Passengers</SelectItem>
                      <SelectItem value="5+">5+ Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <Select value={searchForm.class} onValueChange={(value) => handleInputChange('class', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="premium-economy">Premium Economy</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="first">First Class</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSearch} className="w-full bg-gradient-travel hover:opacity-90 text-white font-semibold py-3">
                <Search className="w-5 h-5 mr-2" />
                Search Flights
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick access to flights for the world's most visited cities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((destination, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{destination.image}</div>
                  <h3 className="font-semibold text-foreground text-sm">{destination.city}</h3>
                  <p className="text-xs text-muted-foreground">{destination.country}</p>
                  <p className="text-xs text-travel-600 font-medium">{destination.code}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Flight Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flight Results Preview
            </h2>
            <p className="text-lg text-muted-foreground">
              Sample results showing how flights will be displayed after API integration
            </p>
          </div>

          <div className="space-y-4">
            {sampleFlights.map((flight) => (
              <Card key={flight.id} className="border-0 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    <div className="lg:col-span-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-travel rounded-full flex items-center justify-center">
                          <Airplane className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{flight.airline}</h3>
                          <p className="text-sm text-muted-foreground">{flight.class}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-3">
                      <div>
                        <p className="font-semibold text-lg">{flight.departure}</p>
                        <p className="text-sm text-muted-foreground">{flight.from}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-travel-500 rounded-full"></div>
                        <div className="w-8 border-t border-muted-foreground"></div>
                        <Airplane className="w-4 h-4 text-travel-500" />
                        <div className="w-8 border-t border-muted-foreground"></div>
                        <div className="w-2 h-2 bg-travel-500 rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{flight.duration}</p>
                      <p className="text-xs text-muted-foreground">{flight.stops}</p>
                    </div>

                    <div className="lg:col-span-2">
                      <div>
                        <p className="font-semibold text-lg">{flight.arrival}</p>
                        <p className="text-sm text-muted-foreground">{flight.to}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 text-right">
                      <p className="text-2xl font-bold text-travel-600">{flight.price}</p>
                      <Button className="mt-2 bg-gradient-travel hover:opacity-90">
                        Select Flight
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Ready to integrate with your preferred flight API? Popular options include:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-3 py-1 bg-travel-100 text-travel-700 rounded-full text-sm">Amadeus</span>
              <span className="px-3 py-1 bg-travel-100 text-travel-700 rounded-full text-sm">Skyscanner</span>
              <span className="px-3 py-1 bg-travel-100 text-travel-700 rounded-full text-sm">Sabre</span>
              <span className="px-3 py-1 bg-travel-100 text-travel-700 rounded-full text-sm">Travelport</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Flight Search?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-travel rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Real-Time Search</h3>
                <p className="text-muted-foreground">Live flight data from hundreds of airlines worldwide</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-travel rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Flexible Dates</h3>
                <p className="text-muted-foreground">Find the best prices across multiple dates</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-travel rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock assistance for all your bookings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flights;
