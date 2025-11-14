'use client';

import { Award, Users, Target, TrendingUp } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Award,
      label: 'Professional Excellence',
      description: 'Years of proven expertise',
    },
    {
      icon: Users,
      label: 'Expert Team',
      description: 'Certified professionals',
    },
    {
      icon: Target,
      label: 'Client Focused',
      description: 'Tailored solutions',
    },
    {
      icon: TrendingUp,
      label: 'Growth Oriented',
      description: 'Scalable systems',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Your Trusted Partner in Technology & Engineering
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a full-service engineering and technology partner dedicated
              to delivering integrated solutions across IT infrastructure,
              cyber-security, CCTV systems, web development and electrical
              engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of professional experience and a commitment to quality,
              we help organisations improve operational efficiency, protect
              their assets, and scale for growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border hover:border-primary transition-all hover:shadow-lg group"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
