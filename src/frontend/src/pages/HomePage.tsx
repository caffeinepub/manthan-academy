import { Link } from '@tanstack/react-router';
import { BookOpen, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';

export default function HomePage() {
  const offerings = [
    {
      icon: GraduationCap,
      title: 'CBSE Support',
      description: 'Comprehensive English curriculum support for CBSE students with focused exam preparation and concept clarity.',
    },
    {
      icon: MessageCircle,
      title: 'Spoken English',
      description: 'Build confidence in speaking English fluently with practical conversation skills and pronunciation training.',
    },
    {
      icon: BookOpen,
      title: 'English Grammar',
      description: 'Master the fundamentals of English grammar with clear explanations and practical exercises.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Excellence in English Education
              </span>
            </div>
            <h1 className="font-display">
              Welcome to <span className="text-primary">Manthan Academy</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Empowering CBSE students with expert English language education. Learn spoken English, master grammar, and excel in your academic journey with personalized guidance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/courses">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/manthan-hero-illustration.dim_1600x700.png"
              alt="Students learning English at Manthan Academy"
              className="w-full rounded-lg shadow-soft"
            />
          </div>
        </div>
      </Section>

      {/* Offerings Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display mb-4">Our Offerings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive English language programs designed to help you succeed
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <Card key={offering.title} className="border-2 transition-all hover:shadow-soft hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {offering.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="rounded-lg border bg-card p-8 text-center md:p-12">
          <h2 className="font-display mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join Manthan Academy today and take the first step towards mastering English with expert guidance from Digvijay Karn.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
