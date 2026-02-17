import { Link } from '@tanstack/react-router';
import { GraduationCap, MessageCircle, BookOpen, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';

export default function CoursesPage() {
  const courses = [
    {
      icon: GraduationCap,
      title: 'CBSE Support',
      description: 'Comprehensive English curriculum support tailored for CBSE students',
      features: [
        'Complete syllabus coverage',
        'Exam-focused preparation',
        'Regular assessments and feedback',
        'Doubt clearing sessions',
        'Study materials and resources',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Spoken English',
      description: 'Build confidence and fluency in speaking English naturally',
      features: [
        'Conversation practice sessions',
        'Pronunciation training',
        'Vocabulary building',
        'Real-world scenarios',
        'Public speaking skills',
      ],
    },
    {
      icon: BookOpen,
      title: 'English Grammar',
      description: 'Master English grammar from fundamentals to advanced concepts',
      features: [
        'Comprehensive grammar rules',
        'Practical exercises',
        'Common mistakes correction',
        'Writing improvement',
        'Progressive learning approach',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display mb-6">Our Courses</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Choose from our specialized English language programs designed to help you achieve your learning goals
          </p>
        </div>
      </Section>

      {/* Courses Section */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.title} className="flex flex-col border-2 transition-all hover:shadow-soft hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full" size="lg">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="rounded-lg border bg-card p-8 text-center md:p-12">
          <h2 className="font-display mb-4">Not Sure Which Course to Choose?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us to discuss your learning goals and we'll help you find the perfect course for your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Get Personalized Guidance
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
