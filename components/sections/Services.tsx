'use client';

import { servicesData } from '@/lib/services-data';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">
            Core Domains
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Delivering end-to-end solutions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="pl-8 basis-full md:basis-1/2 lg:basis-1/3 py-10">
                <Link href={`/services/${service.slug}`} className="block group perspective-1000 h-full">
                  <Card
                    className="h-full overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl flex flex-col rotate-y-12 group-hover:rotate-y-0 group-hover:scale-[1.05] group-hover:shadow-primary/20"
                  >
                    {/* Banner Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.bannerImage || '/images/header-bg.jpg'}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    </div>

                    {/* Overlapping Icon Box */}
                    <div className="relative flex justify-center -mt-12 z-10">
                      <div
                        className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white dark:border-slate-800 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                        style={{ backgroundColor: service.bgColor || '#ffffff' }}
                      >
                        {service.logoImage ? (
                          <img
                            src={service.logoImage}
                            alt={`${service.title} logo`}
                            className="w-full h-full object-contain p-3 brightness-110 contrast-105"
                          />
                        ) : (
                          <service.icon className="w-12 h-12 text-white" />
                        )}
                      </div>
                    </div>

                    <div className="flex-grow p-10 pt-6 text-center">
                      <CardTitle className="text-2xl font-black mb-4 tracking-tight">{service.title}</CardTitle>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                        {service.description}
                      </p>

                      <ul className="space-y-4 mb-4 text-left max-w-[260px] mx-auto">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-slate-500 dark:text-slate-400 group/item"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover/item:bg-primary transition-colors">
                              <ArrowRight className="w-3 h-3 text-primary group-hover/item:text-white transition-colors" />
                            </div>
                            <span className="font-semibold">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Featured 'Read More' Footer with Shimmer */}
                    <div className="relative overflow-hidden bg-[#F6A113] hover:bg-[#E59102] transition-colors py-6 px-10 flex items-center justify-center text-white font-black uppercase tracking-widest gap-4 group/btn cursor-pointer">
                      <div className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                      <span className="relative z-10">Explores Domain</span>
                      <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover/btn:translate-x-2" />
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="relative inset-0 translate-y-0 h-14 w-14 border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-xl" />
            <CarouselNext className="relative inset-0 translate-y-0 h-14 w-14 border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-xl" />
          </div>
        </Carousel>

        <div className="text-center mt-20">
          <Link href="/contact">
            <Button size="lg" className="h-16 px-12 rounded-full font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
              Partner with Us
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

