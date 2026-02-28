'use client';

import { servicesData } from '@/lib/services-data';
import { Card, CardTitle } from '@/components/ui/card';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalServices = servicesData.length;
  // Duplicate services for ribbon effect
  const multipliedServices = [...servicesData, ...servicesData, ...servicesData, ...servicesData];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % (totalServices * 4));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalServices]);

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
          className="relative flex overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />

          {/* Manual Navigation Arrows */}
          <div className="absolute inset-y-0 left-8 z-30 flex items-center">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + totalServices * 4) % (totalServices * 4))}
              className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all shadow-xl"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-8 z-30 flex items-center">
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % (totalServices * 4))}
              className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all shadow-xl"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div
            className="flex gap-12 py-24 px-12 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(calc(-${activeIndex * (380 + 48)}px))`,
            }}
          >
            {multipliedServices.map((service, index) => {
              const isCloud = service.slug === 'cloud-virtualization';
              return (
                <div key={index} className="w-[380px] md:w-[480px] flex-shrink-0">
                  <Link href={`/services/${service.slug}.html`} className="block group h-full">
                    <Card
                      className={`h-full overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-1000 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex flex-col group-hover:rotate-y-0 group-hover:scale-[1.05] group-hover:shadow-primary/20 ${activeIndex % totalServices === index % totalServices ? 'animate-none scale-105 rotate-y-0 shadow-primary/10' : 'animate-orbital-3d'
                        }`}
                    >
                      {/* Card Content Area */}
                      <div className="relative flex-grow flex flex-col min-h-[460px]">
                        {service.bannerImage && (
                          <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                              src={service.bannerImage}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Dark overlay with bottom-heavy gradient for text readability below the image center */}
                            <div className="absolute inset-0 bg-slate-950/50 transition-colors duration-700 group-hover:bg-slate-950/30" />
                            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                          </div>
                        )}

                        {/* Title text positioned below the image center */}
                        <div className="relative z-10 flex flex-col h-full items-center justify-end p-8 pb-10 text-center">
                          <CardTitle className="text-3xl md:text-3xl font-black tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)] z-20 leading-tight">
                            {service.title}
                          </CardTitle>
                        </div>
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

        {/* Pagination Bullets */}
        <div className="flex justify-center gap-3 mt-12 pb-8">
          {servicesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${activeIndex % totalServices === idx
                ? 'bg-primary w-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                : 'bg-slate-300 dark:bg-slate-700 hover:bg-primary/50'
                }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
