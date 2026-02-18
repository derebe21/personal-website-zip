'use client';

import { Award, Target, Rocket, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.05),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight italic">
            About Us
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Info Cards Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* About Us Card */}
          <div className="relative group lg:col-span-3 xl:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative h-full p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 dark:text-white uppercase italic">ITSEC Technology</h3>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Empowering Global Enterprises</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    ITSEC Technology PLC delivers secure, scalable, and innovative digital solutions that empower enterprises worldwide. We help organizations optimize operations, strengthen digital trust, and achieve sustainable growth in the global digital economy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative h-full p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
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
            <div className="relative h-full p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
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


      </div>
    </section>
  );
}
