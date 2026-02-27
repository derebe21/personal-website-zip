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
                  <Link href={`/services/${service.slug}`} className="block group h-full">
                    <Card
                      className={`h-full overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-1000 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex flex-col group-hover:rotate-y-0 group-hover:scale-[1.05] group-hover:shadow-primary/20 ${activeIndex % totalServices === index % totalServices ? 'animate-none scale-105 rotate-y-0 shadow-primary/10' : 'animate-orbital-3d'
                        }`}
                    >
                      {/* Card Content Area */}
                      <div className="relative flex-grow flex flex-col min-h-[500px]">
                        {(isCloud ||
                          service.slug === 'digital-infrastructure' ||
                          service.slug === 'cybersecurity' ||
                          service.slug === 'unified-communications' ||
                          service.slug === 'integrated-security') && (
                            <div className="absolute inset-0 z-0">
                              <img
                                src={service.bannerImage}
                                alt={service.title}
                                className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/90" />
                            </div>
                          )}

                        <div className="relative z-10 flex flex-col h-full p-10 pt-12 text-center">
                          {/* Logo Area */}
                          {service.logoImage && (
                            <div className="mb-8 flex justify-center">
                              <div className={`w-24 h-24 rounded-3xl p-4 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 ${isCloud ? 'bg-white/10' : 'bg-primary/5'}`}>
                                <img
                                  src={service.logoImage}
                                  alt={`${service.title} Logo`}
                                  className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                                />
                              </div>
                            </div>
                          )}

                          <CardTitle className={`text-2xl font-black mb-6 tracking-tight ${(isCloud ||
                            service.slug === 'digital-infrastructure' ||
                            service.slug === 'cybersecurity' ||
                            service.slug === 'unified-communications' ||
                            service.slug === 'integrated-security') ? 'text-white' : ''}`}>
                            {service.title}
                          </CardTitle>

                          {/* Service Description Section */}
                          <div className="flex-grow overflow-y-auto custom-scrollbar max-h-[200px] mb-8 pr-2">
                            <p className={`text-lg transition-colors ${(isCloud ||
                              service.slug === 'digital-infrastructure' ||
                              service.slug === 'cybersecurity' ||
                              service.slug === 'unified-communications' ||
                              service.slug === 'integrated-security') ? 'text-slate-200' : 'text-slate-600 dark:text-slate-400'} font-medium`}>
                              {service.description || service.longDescription?.substring(0, 150) + (service.longDescription?.length > 150 ? '...' : '')}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Featured Footer */}
                      <div className="relative overflow-hidden bg-[#F6A113] hover:bg-[#E59102] transition-colors py-6 px-10 flex items-center justify-center text-white font-black uppercase tracking-[0.2em] gap-4 group/btn cursor-pointer">
                        <div className="absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
                        <ArrowRight className="w-8 h-8 relative z-10 transition-transform group-hover/btn:translate-x-3" />
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
