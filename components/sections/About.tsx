'use client';

import { Award, Target, Rocket, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1.5 bg-primary rounded-full" />
              <span className="text-sm font-black text-primary uppercase tracking-[0.3em]">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
              Innovation & <span className="text-primary italic">Excellence</span>
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                ITSEC Technology PLC delivers secure, scalable, and innovative digital solutions that empower enterprises worldwide.
              </p>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 mt-6 md:text-lg">
                <p>
                  We help organizations optimize operations, strengthen digital trust, and achieve sustainable growth in the global digital economy.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                <Rocket className="w-6 h-6 text-primary" />
                <span className="font-bold">Scalable Solutions</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span className="font-bold">Expert Innovation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/header-bg.jpg"
                alt="About ITSEC"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
