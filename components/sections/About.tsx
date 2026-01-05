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
      className="relative py-20 md:py-32 overflow-hidden bg-slate-900"
    >
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-bg.png"
          alt="About Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/40 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Trusted Partner in Technology & Engineering
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed font-light">
              We are a full-service engineering and technology partner dedicated
              to delivering integrated solutions across IT infrastructure,
              cyber-security, CCTV systems, web development and electrical
              engineering.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed font-light">
              With years of professional experience and a commitment to quality,
              we help organisations improve operational efficiency, protect
              their assets, and scale for growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-inherit" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">{item.label}</h3>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
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
