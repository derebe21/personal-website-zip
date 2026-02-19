'use client';

import { servicesData } from '@/lib/services-data';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { useState, useEffect, useRef } from 'react';

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalServices = servicesData.length;
  // Duplicate services to ensure a long enough ribbon for the interval effect
  const multipliedServices = [...servicesData, ...servicesData, ...servicesData, ...servicesData];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % (totalServices * 2));
    }, 4000); // 4s total: 3s stop + 1s transition

    return () => clearInterval(interval);
  }, [isPaused, totalServices]);

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-[100vw]">
        <div className="text-center space-y-4 mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
            Our Services
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Infinite 3D Auto-Slider Ribbon with Stepping Motion */}
        <div
          className="relative mt-20 flex overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Gradient Overlays for smooth entry/exit */}
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
            {multipliedServices.map((service, index) => (
              <div key={index} className="w-[380px] md:w-[480px] flex-shrink-0">
                <Link href={`/services/${service.slug}`} className="block group h-full">
                  <Card
                    className={`h-full overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-1000 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex flex-col group-hover:rotate-y-0 group-hover:scale-[1.05] group-hover:shadow-primary/20 ${activeIndex % totalServices === index % totalServices ? 'animate-none scale-105 rotate-y-0 shadow-primary/10' : 'animate-orbital-3d'
                      }`}
                  >
                    {/* Banner Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={service.bannerImage || '/images/header-bg.jpg'}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                    </div>


                    <div className="flex-grow p-12 pt-8 text-center">
                      <CardTitle className="text-3xl font-black mb-6 tracking-tight">{service.title}</CardTitle>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium line-clamp-2">
                        {service.description}
                      </p>

                      <ul className="space-y-5 mb-6 text-left max-w-[280px] mx-auto">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-slate-500 dark:text-slate-400 group/item"
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover/item:bg-primary transition-colors">
                              <ArrowRight className="w-3.5 h-3.5 text-primary group-hover/item:text-white transition-colors" />
                            </div>
                            <span className="font-bold line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Featured 'Read More' Footer with Shimmer */}
                    <div className="relative overflow-hidden bg-[#F6A113] hover:bg-[#E59102] transition-colors py-7 px-10 flex items-center justify-center text-white font-black uppercase tracking-[0.2em] gap-4 group/btn cursor-pointer mt-auto">
                      <div className="absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
                      <span className="relative z-10 text-base">Explores Domain</span>
                      <ArrowRight className="w-7 h-7 relative z-10 transition-transform group-hover/btn:translate-x-3" />
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-24">
          <Link href="/#contact">
            <Button size="lg" className="h-18 px-14 rounded-full font-black text-xl shadow-2xl shadow-primary/30 hover:scale-105 transition-transform bg-primary text-white">
              Partner with Us
              <ArrowRight className="ml-4 w-7 h-7" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

