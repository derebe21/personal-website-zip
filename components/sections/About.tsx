'use client';

import { Award, Target, Rocket, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-[0.3em] inline-block mb-2">
            Best International IT Company
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
            About Us
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mt-4">
            Empowering Global Enterprises
          </h3>
          <p className="text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mt-6">
            ITSEC Technology PLC delivers secure, scalable, and innovative digital solutions that empower enterprises worldwide. We help organizations optimize operations, strengthen digital trust, and achieve sustainable growth in the global digital economy.
          </p>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Vision & Mission Highlight Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative h-full p-8 md:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 dark:text-white uppercase italic">Our Vision</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    To be a globally trusted technology partner, enabling secure, innovative, and sustainable digital transformation that drives growth, efficiency, and long-term organizational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F6A113] to-orange-400 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative h-full p-8 md:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                  <Award className="w-8 h-8 text-[#F6A113]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 dark:text-white uppercase italic">Our Mission</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    To empower organizations worldwide with secure, scalable, and innovative technology solutions that deliver measurable value through technical excellence and international best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed About Content */}
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
              <p className="text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                ITSEC Technology PLC delivers secure, scalable, and innovative technology solutions that empower enterprises worldwide.
              </p>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 mt-6 md:text-lg">
                <p>
                  We help organizations optimize operations, strengthen technology trust, and achieve sustainable growth in the global digital economy.
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
