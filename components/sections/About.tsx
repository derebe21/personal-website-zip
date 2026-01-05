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
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-bg.png"
          alt="About Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Your Trusted Partner in Technology & Engineering
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              We are a full-service engineering and technology partner dedicated
              to delivering integrated solutions across IT infrastructure,
              cyber-security, CCTV systems, web development and electrical
              engineering.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              With years of professional experience and a commitment to quality,
              we help organisations improve operational efficiency, protect
              their assets, and scale for growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary transition-all hover:shadow-2xl group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{item.label}</h3>
                <p className="text-sm text-slate-400 font-medium">
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
