import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Search, Calendar, Plane } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // This is where you would send the contact form data to your backend
    toast.success('Thank you for your message! We\'ll get back to you within 24 hours.');
    console.log('Contact form submission:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  const contactMethods = [
    {
      icon: User,
      title: 'Customer Service',
      description: 'General inquiries and support',
      contact: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 8AM-8PM EST'
    },
    {
      icon: Calendar,
      title: 'Booking Assistance',
      description: 'Help with reservations and changes',
      contact: '+1 (555) 123-4568',
      hours: '24/7 Available'
    },
    {
      icon: Search,
      title: 'Group Travel',
      description: 'Corporate and group bookings',
      contact: 'groups@wanderways.com',
      hours: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Plane,
      title: 'Emergency Support',
      description: 'Travel emergencies and urgent help',
      contact: '+1 (555) 911-HELP',
      hours: '24/7 Emergency Line'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Travel Street, Suite 100\nNew York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@wanderways.com'
    },
    {
      city: 'Los Angeles',
      address: '456 Adventure Blvd, Floor 5\nLos Angeles, CA 90210',
      phone: '+1 (555) 123-4568',
      email: 'la@wanderways.com'
    },
    {
      city: 'Miami',
      address: '789 Ocean Drive, Building A\nMiami, FL 33139',
      phone: '+1 (555) 123-4569',
      email: 'miami@wanderways.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help make your travel dreams a reality. 
              Get in touch with our expert team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-travel rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <p className="font-semibold text-travel-600 mb-1">
                    {method.contact}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {method.hours}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Booking Assistance</SelectItem>
                          <SelectItem value="group">Group Travel</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-travel hover:opacity-90">
                    <User className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Offices
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit us in person at any of our convenient locations
                </p>
              </div>

              {offices.map((office, index) => (
                <Card key={index} className="border-0 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {office.city} Office
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-sm whitespace-pre-line">{office.address}</p>
                      </div>
                      <div>
                        <p className="font-medium">Phone:</p>
                        <p className="text-sm">{office.phone}</p>
                      </div>
                      <div>
                        <p className="font-medium">Email:</p>
                        <p className="text-sm text-travel-600">{office.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-0 bg-gradient-travel text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    24/7 Emergency Support
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Travel emergencies don't wait for business hours. 
                    We're always here when you need us most.
                  </p>
                  <Button variant="secondary" className="bg-white text-travel-600 hover:bg-blue-50">
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How far in advance should I book my flight?',
                answer: 'We recommend booking domestic flights 1-3 months in advance and international flights 2-6 months ahead for the best prices.'
              },
              {
                question: 'What happens if my flight is canceled?',
                answer: 'We provide 24/7 support to help rebook your flight at no additional cost. We also assist with hotel and meal vouchers when applicable.'
              },
              {
                question: 'Do you offer travel insurance?',
                answer: 'Yes, we partner with leading insurance providers to offer comprehensive travel protection for your peace of mind.'
              },
              {
                question: 'Can I make changes to my booking?',
                answer: 'Changes depend on the airline and fare type. Our team will help you understand your options and make changes with minimal fees.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
