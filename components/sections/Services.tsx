'use client';

import {
  Server,
  Video,
  Globe,
  Shield,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Services() {
  const services = [
    {
      icon: Server,
      title: 'IT Infrastructure',
      description:
        'We design, deploy and manage robust IT infrastructure that serves as the backbone of your operations — from servers and networks to cloud integration and ongoing maintenance.',
      features: [
        'Server deployment & management',
        'Network design & optimization',
        'Cloud integration',
        'Ongoing maintenance & support',
      ],
    },
    {
      icon: Video,
      title: 'CCTV & Physical Security Systems',
      description:
        'From CCTV camera installations to monitoring systems and access control integration, we provide end-to-end solutions to secure your premises.',
      features: [
        'CCTV installation & setup',
        'Monitoring systems',
        'Access control integration',
        'Remote viewing capabilities',
      ],
    },
    {
      icon: Globe,
      title: 'Website & Digital Services',
      description:
        "Build your digital presence with tailored website design, hosting, maintenance, and optimisation services. Whether you're starting fresh or need a refresh, we've got you covered.",
      features: [
        'Custom website design',
        'Hosting & domain management',
        'SEO optimization',
        'Maintenance & updates',
      ],
    },
    {
      icon: Shield,
      title: 'Cyber-Security',
      description:
        'Protect your data, networks and users with proactive cyber-security services including vulnerability assessments, firewalls, encryption and incident response planning.',
      features: [
        'Vulnerability assessments',
        'Firewall configuration',
        'Data encryption',
        'Incident response planning',
      ],
    },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description:
        'From wiring and power systems to automation and lighting, our electrical engineering division ensures your infrastructure is safe, compliant and efficient.',
      features: [
        'Electrical wiring & installation',
        'Power system design',
        'Automation solutions',
        'Compliance & safety checks',
      ],
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From infrastructure to security, we provide integrated services
            that work together seamlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-primary"
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
