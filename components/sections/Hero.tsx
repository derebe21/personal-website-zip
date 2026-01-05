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
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 py-12">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 animate-fade-in">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-100 tracking-wider uppercase">Trusted Engineering Partner</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-blue-400 uppercase opacity-90">
              ITSEC TECHNOLOGY
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]">
              Reliable Tech &
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Engineering Solutions
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Empowering modern businesses with robust infrastructure, elite security,
            and professional electrical engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold h-14 px-10 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/20 hover:bg-white/10 text-white font-medium h-14 px-10 rounded-full backdrop-blur-sm transition-all"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Lower Services Section in Hero */}
        <div className="w-full pb-12 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Server className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">Infrastructure</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Robust IT systems & enterprise-grade networks
                </p>
              </div>
            </div>

            <div className="group flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Comprehensive protection & advanced surveillance
                </p>
              </div>
            </div>

            <div className="group flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">Engineering</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Professional electrical installations & site design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
