'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  image: string;
  title: React.ReactElement;
  description: string;
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides: Slide[] = [
    {
      image: '/images/datacenter-bg.png',
      title: (
        <>
          Data Center
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Facility
          </span>
        </>
      ),
      description:
        'Empowering modern businesses with robust infrastructure, elite security, and professional electrical engineering.',
    },
    {
      image: '/images/cyber-shield-bg.jpg',
      title: (
        <>
          Cyber &
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Risk Protection
          </span>
        </>
      ),
      description:
        "Ready to secure your business? Our experts are ready to help you implement Cyber & Risk Protection tailored to your organization's needs.",
    },
    {
      image: '/images/digital-infrastructure-bg.jpg',
      title: (
        <>
          Digital
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Infrastructure
          </span>
        </>
      ),
      description:
        'Designing and deploying resilient technology foundations. From structural cabling to advanced data center solutions, we build the backbone of your digital operations.',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // Increased to 30deg for more depth
    const y = (clientY / innerHeight - 0.5) * -30;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Slower interval for better readability
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToContact = () => {
    const element = document.getElementById('services'); // Redirect to services for flow
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000 bg-slate-950"
    >
      {/* Cinematic Sliding Backgrounds */}
      <div
        className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full h-full overflow-hidden">
            <img
              src={slide.image}
              alt="Hero Background"
              className="w-full h-full object-cover scale-110"
              style={{
                transform: `rotateY(${mousePosition.x * 0.2}deg) rotateX(${mousePosition.y * 0.2}deg) scale(1.15)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
            {/* Overlay Layer */}
            <div className={`absolute inset-0 bg-slate-950/40 via-transparent to-slate-950/60 ${index !== 1 ? 'backdrop-brightness-[0.6]' : ''}`} />
            {/* Cinematic Noise & Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150 mix-blend-soft-light" />
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
          </div>
        ))}
      </div>

      {/* Main Content Layer */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-[90vh] justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="relative h-[600px] w-full mt-12">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col items-center text-center ${currentSlide === index
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
                }`}
              style={{
                transformStyle: 'preserve-3d',
                zIndex: currentSlide === index ? 20 : 10
              }}
            >
              {/* Title Layer */}
              <div style={{ transform: 'translateZ(80px)' }}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.1em] text-white leading-none uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  {slide.title}
                </h1>
              </div>

              {/* Description Layer */}
              <div
                className="mt-12 max-w-3xl mx-auto"
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="p-1 px-4 border-l-4 border-blue-600 bg-white/5 backdrop-blur-md rounded-r-xl">
                  <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-medium tracking-wide py-4">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons with High Depth */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 w-full max-w-lg mx-auto"
          style={{ transform: 'translateZ(150px)' }}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black h-18 px-14 rounded-full shadow-[0_20px_40px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95 text-xl"
          >
            Get Started
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 border-2 font-black h-18 px-14 rounded-full backdrop-blur-xl transition-all hover:scale-105 text-xl"
          >
            Explore Services
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]' : 'w-2.5 bg-white/30'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
