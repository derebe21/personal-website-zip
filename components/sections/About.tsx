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
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-4 pt-[150px]">
          <h2 className="text-[74px] font-[900] tracking-tight text-slate-900 dark:text-white uppercase leading-tight italic">
            ITSEC Technology
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Info Cards Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Who We Are',
              description: 'ITSEC Technology PLC delivers secure, scalable, and innovative digital solutions that empower enterprises worldwide. We help organizations optimize operations, strengthen digital trust, and achieve sustainable growth in the global digital economy.',
              icon: Rocket,
              color: 'blue',
              number: '01'
            },
            {
              title: 'Vision',
              subtitle: '',
              description: 'To be a globally trusted technology partner, enabling secure, innovative, and sustainable digital transformation that drives growth, efficiency, and long-term organizational excellence.',
              icon: Target,
              color: 'cyan',
              number: '02'
            },
            {
              title: 'Mission',
              subtitle: '',
              description: 'To empower organizations worldwide with secure, scalable, and innovative technology solutions that deliver measurable value through technical excellence and international best practices.',
              icon: Award,
              color: 'orange',
              number: '03'
            }
          ].map((item, index) => (
            <div key={index} className="relative group perspective-1000">
              {/* Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color === 'blue' ? 'from-blue-600 to-indigo-500' :
                item.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                  'from-orange-500 to-primary'
                } rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />

              <div className="relative h-full p-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-x-2 group-hover:border-primary/30 flex flex-col">
                {/* Floating Number Indicator */}
                <div className="absolute top-8 right-10 text-6xl font-black text-slate-100 dark:text-slate-800/50 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700">
                  {item.number}
                </div>

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 ${item.color === 'blue' ? 'bg-blue-600 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)]' :
                    item.color === 'cyan' ? 'bg-cyan-500 shadow-[0_10px_30px_-5px_rgba(6,182,212,0.4)]' :
                      'bg-[#F6A113] shadow-[0_10px_30px_-5px_rgba(246,161,19,0.4)]'
                    }`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic leading-none">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mt-2 block">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-grow relative z-10">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className={`h-1.5 w-0 group-hover:w-full transition-all duration-1000 rounded-full mt-10 ${item.color === 'blue' ? 'bg-blue-600' :
                  item.color === 'cyan' ? 'bg-cyan-500' :
                    'bg-primary'
                  }`} />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
