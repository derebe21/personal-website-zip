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
            <Link key={index} href={`/services/${service.slug}`} className="block group perspective-1000">
              <Card
                className="h-full overflow-hidden border-none shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:rotate-y-6 group-hover:scale-[1.02] bg-white dark:bg-slate-800 flex flex-col"
              >
                {/* Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.bannerImage || '/images/header-bg.jpg'}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Overlapping Icon Box */}
                <div className="relative flex justify-center -mt-10 z-10">
                  <div
                    className="w-20 h-20 rounded-lg flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:rotate-6"
                    style={{ backgroundColor: service.bgColor || '#ffffff' }}
                  >
                    {service.logoImage ? (
                      <img
                        src={service.logoImage}
                        alt={`${service.title} logo`}
                        className="w-full h-full object-contain p-2 brightness-110 contrast-105"
                      />
                    ) : (
                      <service.icon className="w-10 h-10 text-white" />
                    )}
                  </div>
                </div>

                <div className="flex-grow p-8 pt-4 text-center">
                  <CardTitle className="text-2xl font-bold mb-4">{service.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 text-left max-w-[240px] mx-auto">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured 'Read More' Footer */}
                <div className="bg-[#F6A113] hover:bg-[#E59102] transition-colors py-4 px-8 flex items-center justify-center text-white font-bold gap-3 group/btn cursor-pointer">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </div>
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
