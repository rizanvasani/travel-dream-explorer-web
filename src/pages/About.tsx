import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, Search, Plane } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      experience: '15 years in travel industry',
      description: 'Passionate about creating unforgettable travel experiences and building lasting relationships with our clients.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      experience: '12 years in tourism',
      description: 'Ensures seamless travel operations and maintains our high standards of customer service excellence.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Travel Consultant',
      experience: '8 years in destination planning',
      description: 'Specializes in custom itineraries and helps travelers discover hidden gems around the world.'
    },
    {
      name: 'David Park',
      role: 'Technology Director',
      experience: '10 years in travel tech',
      description: 'Leads our digital innovation efforts to provide cutting-edge booking and planning tools.'
    }
  ];

  const values = [
    {
      icon: User,
      title: 'Customer First',
      description: 'Every decision we make puts our travelers\' needs and satisfaction at the forefront.'
    },
    {
      icon: Search,
      title: 'Transparency',
      description: 'Clear pricing, honest recommendations, and upfront communication in every interaction.'
    },
    {
      icon: Calendar,
      title: 'Reliability',
      description: 'Consistent service delivery and support you can count on, wherever you are.'
    },
    {
      icon: Plane,
      title: 'Innovation',
      description: 'Continuously improving our services with the latest technology and industry insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              About WanderWays
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Born from a love of exploration and a commitment to exceptional service, 
              WanderWays has been connecting travelers with their dream destinations since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  WanderWays began as a small startup founded by travel enthusiasts who believed that 
                  everyone deserves access to incredible travel experiences. What started as a simple 
                  booking service has evolved into a comprehensive travel platform serving thousands 
                  of adventurers worldwide.
                </p>
                <p>
                  Our founder, Sarah Johnson, started the company after experiencing firsthand the 
                  challenges of planning complex international trips. She envisioned a service that 
                  would combine cutting-edge technology with personalized human expertise to make 
                  travel planning effortless and enjoyable.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for travelers seeking authentic experiences, 
                  whether they're planning a romantic getaway, a family vacation, or a solo adventure 
                  to the far corners of the earth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-travel rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">10+</div>
                      <div className="text-blue-100">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">100K+</div>
                      <div className="text-blue-100">Happy Travelers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">150+</div>
                      <div className="text-blue-100">Destinations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-blue-100">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape every interaction we have with our travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-travel rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team of travel professionals is dedicated to making your journey extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-travel rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-travel-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-travel text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            "To inspire and enable meaningful travel experiences that connect people with the world's 
            diverse cultures, natural wonders, and hidden treasures, while providing exceptional service 
            that exceeds expectations every step of the journey."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
