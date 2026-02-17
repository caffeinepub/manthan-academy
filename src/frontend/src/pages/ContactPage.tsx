import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Inquiry from Manthan Academy Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    // Open mail client
    window.location.href = `mailto:contact@manthanacademy.com?subject=${subject}&body=${body}`;
    
    // Show confirmation
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      description: 'Call us during business hours',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@manthanacademy.com',
      description: 'Send us an email anytime',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Your City, State, India',
      description: 'Visit us for in-person consultation',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Have questions about our courses? Ready to start your learning journey? We're here to help!
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out to us through any of the following channels. We'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.label}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{info.label}</CardTitle>
                          <CardDescription className="mt-1">
                            {info.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond to your inquiry promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="rounded-lg bg-primary/10 p-6 text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    Your default email client should open. If not, please email us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your learning goals or ask any questions..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
