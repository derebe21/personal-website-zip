'use client';

import { ClipboardCheck, Wrench, Headphones } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Consultation & Planning',
      description:
        'We assess your needs and craft a custom solution tailored to your business requirements and goals.',
      number: '01',
    },
    {
      icon: Wrench,
      title: 'Design & Deployment',
      description:
        'Our engineers build and install with minimal disruption, ensuring quality at every stage.',
      number: '02',
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description:
        'We provide ongoing monitoring, updates and support to keep things running smoothly.',
      number: '03',
    },
  ];

  return (
    <section
      id="process"
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our Proven Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing support, we're with you every
            step of the way
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
