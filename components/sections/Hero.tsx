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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Trusted Engineering Partner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Reliable Tech & Engineering
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Solutions for Modern Business
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Infrastructure • Security • Electrical Installations • Web Services
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group text-base px-8"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-base px-8"
            >
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border">
              <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold">Infrastructure</h3>
              <p className="text-sm text-muted-foreground text-center">
                Robust IT systems & networks
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground text-center">
                Comprehensive protection systems
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border">
              <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold">Engineering</h3>
              <p className="text-sm text-muted-foreground text-center">
                Professional electrical solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
