import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'manthan-academy'
  );

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/manthan-academy-logo.dim_512x512.png"
                alt="Manthan Academy Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg font-bold">
                Manthan Academy
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Excellence in English education for CBSE students. Learn spoken English and grammar with expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About Teacher
              </Link>
              <Link
                to="/courses"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Courses
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Ready to start your learning journey? Contact us today to learn more about our courses and enrollment.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Manthan Academy. Built with{' '}
            <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
