'use client';

import { ArrowRight, Shield, Server, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax-like effect (simplified) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612833/photo_2025-11-22_14-24-47_p3ao0a.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen pt-20">
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 py-12">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.15em] text-white leading-none uppercase animate-fade-in drop-shadow-2xl">
              ITSEC
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                TECHNOLOGY
              </span>
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide border-y border-white/10 py-4 backdrop-blur-sm">
            Empowering modern businesses with robust infrastructure, elite security,
            and professional electrical engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 w-full max-w-lg mx-auto">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold h-16 px-12 rounded-full shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 text-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById('servicesFocus')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 border font-bold h-16 px-12 rounded-full backdrop-blur-md transition-all hover:scale-105 text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
