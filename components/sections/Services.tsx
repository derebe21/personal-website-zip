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
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">
          OUR <span className="text-primary">SERVICES</span>
        </h2>
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
            className="flex gap-12 py-12 px-12 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(calc(-${activeIndex * (340 + 48)}px))`,
            }}
          >
            {multipliedServices.map((service, index) => (
              <div key={index} className="w-[340px] flex-shrink-0">
                <Link href={`/services/${service.slug}`} className="block group h-full">
                  <Card
                    className={`h-full overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-700 bg-white dark:bg-slate-900 flex flex-col group-hover:scale-[1.04] group-hover:shadow-primary/20 ${activeIndex % totalServices === index % totalServices
                        ? 'scale-105 shadow-primary/10'
                        : ''
                      }`}
                  >
                    {/* Service Name at Top */}
                    <div className="px-6 pt-6 pb-4 text-center">
                      <CardTitle className="text-xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>

                    {/* Full Image Below Name */}
                    <div className="flex-grow relative overflow-hidden">
                      <img
                        src={service.bannerImage}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ minHeight: '260px', maxHeight: '320px' }}
                      />
                    </div>

                    {/* Explore Footer */}
                    <div className="relative overflow-hidden bg-[#F6A113] hover:bg-[#E59102] transition-colors py-4 px-8 flex items-center justify-center text-white font-black uppercase tracking-[0.2em] gap-3 group/btn cursor-pointer">
                      <div className="absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
                      <span className="relative z-10 text-xs">Explore Domain</span>
                      <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-2" />
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
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
