import { Award, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';

export default function AboutTeacherPage() {
  const focusAreas = [
    {
      icon: Users,
      title: 'CBSE Students',
      description: 'Specialized coaching for CBSE curriculum with exam-focused strategies',
    },
    {
      icon: BookOpen,
      title: 'English Grammar',
      description: 'Comprehensive grammar instruction from basics to advanced concepts',
    },
    {
      icon: Target,
      title: 'Spoken English',
      description: 'Practical speaking skills for real-world communication',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <img
              src="/assets/generated/manthan-hero-illustration.dim_1600x700.png"
              alt="Digvijay Karn - English Teacher at Manthan Academy"
              className="w-full rounded-lg shadow-soft"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Meet Your Teacher
              </span>
            </div>
            <h1 className="font-display">
              <span className="text-primary">Digvijay Karn</span>
            </h1>
            <p className="text-xl font-medium text-muted-foreground">
              Founder & Lead Teacher at Manthan Academy
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-5 w-5 text-primary" />
              <span>Expert English Language Educator</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Bio Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display mb-6 text-center">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a passion for English language education and years of experience teaching CBSE students, I founded Manthan Academy to provide quality English instruction that goes beyond textbooks. My teaching philosophy centers on building strong fundamentals while making learning engaging and practical.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              I specialize in helping students develop confidence in both written and spoken English, ensuring they not only excel in their exams but also gain skills that serve them throughout their lives. At Manthan Academy, every student receives personalized attention and a supportive learning environment.
            </p>
          </div>
        </div>
      </Section>

      {/* Focus Areas Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="font-display mb-4">Teaching Focus Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise in key areas of English language education
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card key={area.title} className="border-2">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
