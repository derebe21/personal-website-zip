'use client';

import { servicesData } from '@/lib/services-data';
import { Card, CardTitle } from '@/components/ui/card';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export function Services() {
  // Multiply the array lengths enough to fill the screen width with clones for the infinite loop illusion
  const multipliedServices = [...servicesData, ...servicesData, ...servicesData, ...servicesData];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-8">
          OUR <span className="text-primary">SERVICES</span>
        </h2>
        <div className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full" />
      </div>

      <div className="max-w-[100vw]">
        {/* Infinite 3D Auto-Slider Ribbon */}
        <div
          className="relative flex overflow-hidden group/slider"
        >
          {/* Subtle Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />

          {/* Continuous Scrolling Container */}
          <div
            className="flex gap-12 py-24 px-12 animate-scroll group-hover/slider:[animation-play-state:paused] w-max"
          >
            {multipliedServices.map((service, index) => {
              const isCloud = service.slug === 'cloud-virtualization';
              return (
                <div key={index} className="w-[380px] md:w-[480px] flex-shrink-0">
                  <Link href={`/services/${service.slug}.html`} className="block group h-full">
                    <Card
                      className={`h-full overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex flex-col group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)]`}
                    >
                      {/* Image Area - No text inside image */}
                      {service.bannerImage && (
                        <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                          <img
                            src={service.bannerImage}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          {/* Dark overlay for technology theme aesthetic */}
                          <div className="absolute inset-0 bg-slate-950/30 transition-colors duration-700 group-hover:bg-slate-950/10" />
                        </div>
                      )}

                      {/* Text Content Area - Positioned strictly below the image */}
                      <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-slate-900/90 z-10 min-h-[140px]">
                        <CardTitle className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                          {service.title}
                        </CardTitle>
                      </div>

                      {/* Explore Domain Button */}
                      <div className="relative overflow-hidden bg-primary group-hover:bg-primary/90 transition-all py-6 px-8 flex items-center justify-center text-white font-black uppercase tracking-widest text-[17px] gap-3 group/btn cursor-pointer">
                        <span className="relative z-10">Explore Domain</span>
                        <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover/btn:translate-x-2" />
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Removed redundant pagination bullets for continuous scroll */}
      </div>
    </section>
  );
}
