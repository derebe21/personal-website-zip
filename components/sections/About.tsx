'use client';

import { Award, Users, Target, TrendingUp } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Target,
      label: 'Vision',
      description:
        'To be Africa’s most trusted technology partner, enabling secure, innovative, and sustainable digital transformation that drives growth, efficiency, and long-term organizational excellence.',
    },
    {
      icon: Award,
      label: 'Mission',
      description:
        'To empower organizations across Africa with secure, scalable, and innovative technology solutions that deliver measurable value through technical excellence, international best practices, and a deep understanding of regional and local operational needs.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              ITSEC Technology PLC is an African-based and Ethiopian technology
              company dedicated to delivering secure, scalable, and future-ready
              digital solutions for organizations operating in dynamic and evolving
              environments. Founded by internationally certified IT professionals,
              the company is driven by a strong commitment to quality, security, and
              innovation, aligned with international best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work closely with organizations to design and implement reliable
              technology solutions that support operational efficiency, strengthen
              information security, and enable sustainable growth. Our approach
              combines local and regional understanding with global standards to
              ensure that solutions are practical, compliant, and future-ready.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through technical expertise, structured methodologies, and a
              client-focused mindset, ITSEC Technology PLC helps organizations
              strengthen their digital capabilities and adapt to changing
              technological demands. We emphasize professionalism, continuous
              improvement, and long-term partnership in every engagement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an African-based company, ITSEC Technology PLC is committed to
              becoming a trusted technology partner by delivering dependable
              solutions, responsive support, and measurable value to organizations
              across Ethiopia and Africa. Our practices are designed to meet
              international standards, ensuring reliability, security, and
              organizational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border hover:border-primary transition-all hover:shadow-lg group"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-xl">{item.label}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
