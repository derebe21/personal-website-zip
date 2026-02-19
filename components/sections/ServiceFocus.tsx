'use client';

import Link from 'next/link';
import { Rocket, Target, Award } from 'lucide-react';

export function ServiceFocus() {
    return (
        <section id="servicesFocus" className="relative py-12 lg:py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* About Us Card */}
                    <div className="group flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                            <Rocket className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-center">
                            <Link href="/about" className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase italic">About Us</h3>
                            </Link>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Delivers secure, scalable, and innovative digital solutions that empower enterprises worldwide. We help organizations optimize operations, strengthen digital trust, and achieve sustainable growth in the global digital economy.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="group flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 rounded-3xl bg-sky-400 flex items-center justify-center shadow-lg shadow-sky-400/30 group-hover:scale-110 transition-transform duration-300">
                            <Target className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-center">
                            <Link href="/about" className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase italic">Vision</h3>
                            </Link>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                To be a globally trusted technology partner, enabling secure, innovative, and sustainable digital transformation that drives growth, efficiency, and long-term organizational excellence.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 rounded-3xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/30 group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-center">
                            <Link href="/about" className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase italic">Mission</h3>
                            </Link>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                To empower organizations worldwide with secure, scalable, and innovative technology solutions that deliver measurable value through technical excellence and international best practices.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
