'use client';

import { Layers, Users, TrendingUp, MapPin } from 'lucide-react';

export function WhyChoose() {
  const reasons = [
    {
      icon: Layers,
      title: 'Integrated Solutions',
      description:
        'We offer integrated solutions across technology and engineering — one partner, multiple services.',
    },
    {
      icon: Users,
      title: 'Deep Expertise',
      description:
        'Our team brings deep expertise in both IT and physical systems.',
    },
    {
      icon: TrendingUp,
      title: 'Security & Scalability',
      description:
        'We focus on security and scalability, so your business grows without compromise.',
    },
    {
      icon: MapPin,
      title: 'Local Service, Global Standards',
      description:
        'We deliver local service with global standards, ensuring quality and reliability.',
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20 md:py-32 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your Success is Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with personalized service to deliver
            results that matter
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
