'use client';

import { servicesData } from '@/lib/services-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Services() {
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
            Meeting the complex needs of modern enterprises across our specialized domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`}>
              <Card
                className="h-full group hover:shadow-xl transition-all duration-300 hover:border-primary border-slate-200 dark:border-slate-800 cursor-pointer"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    {service.logoImage ? (
                      <img
                        src={service.logoImage}
                        alt={`${service.title} logo`}
                        className="w-14 h-14 object-contain"
                      />
                    ) : (
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg">
              Discuss Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
