'use client';

import {
  Server,
  Shield,
  Code,
  Cpu,
  Video,
  Database,
  Cloud,
  Zap,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protecting digital assets through advanced security architecture, risk management, and threat mitigation.',
      features: ['Security architecture', 'Risk management', 'Threat mitigation'],
    },
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Designing and deploying scalable, secure, and high-performance network and IT environments.',
      features: ['Scalable networks', 'Secure hardware', 'High-performance setup'],
    },
    {
      icon: Code,
      title: 'Enterprise Software Development',
      description: 'Building reliable, secure, and customized enterprise applications that support business growth.',
      features: ['Custom applications', 'Enterprise scale', 'Reliable code'],
    },
    {
      icon: Cpu,
      title: 'Smart Technology Solutions',
      description: 'Delivering IoT-driven and intelligent systems for automation, monitoring, and efficiency.',
      features: ['IoT integration', 'Automation systems', 'Intelligent monitoring'],
    },
    {
      icon: Video,
      title: 'Physical Security Systems',
      description: 'Integrating CCTV, access control, and surveillance solutions for complete physical protection.',
      features: ['CCTV systems', 'Access control', 'Complete surveillance'],
    },
    {
      icon: Database,
      title: 'Data Center Facility Engineering',
      description: 'Engineering resilient data center facilities with optimized power, cooling, and redundancy.',
      features: ['Facility design', 'Power optimization', 'Cooling systems'],
    },
    {
      icon: Cloud,
      title: 'Cloud Services Implementation',
      description: 'Implementing secure public, private, and hybrid cloud solutions for modern enterprises.',
      features: ['Public & Private cloud', 'Hybrid setups', 'Secure migration'],
    },
    {
      icon: Zap,
      title: 'Power & System Engineering',
      description: 'Providing UPS, backup power, and system engineering for uninterrupted operations.',
      features: ['UPS solutions', 'Backup power', 'Uninterrupted systems'],
    },
    {
      icon: Lightbulb,
      title: 'Integrated Technology Consulting',
      description: 'Advising organizations on digital transformation, system optimization, and technology strategy.',
      features: ['Digital transformation', 'Strategy consulting', 'System optimization'],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Core Domains
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Delivering end-to-end technology solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meeting the complex needs of modern enterprises across nine specialized domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-primary border-slate-200 dark:border-slate-800"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
