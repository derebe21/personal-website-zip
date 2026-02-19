'use client';

import { Building2, Warehouse, Server, Factory, Building, Network, Zap, ShieldCheck, Globe } from 'lucide-react';

export function StructuredCabling() {
    const industries = [
        { name: 'Manufacturing', icon: Factory },
        { name: 'Logistics & Warehousing', icon: Warehouse },
        { name: '3PL (Third-Party Logistics)', icon: Building2 },
        { name: 'Cold Storage Facilities', icon: Server },
        { name: 'Crypto Mining Operations', icon: Zap },
        { name: 'Data Centers', icon: Server },
        { name: 'Healthcare Facilities', icon: ShieldCheck },
        { name: 'Education Institutions', icon: Building },
        { name: 'Enterprise & University Campuses', icon: Globe }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
                    <div className="inline-flex items-center space-x-2 mb-6">
                        <span className="w-12 h-1 bg-primary rounded-full" />
                        <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Services</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8 leading-none">
                        Structured <span className="text-primary">Cabling</span>
                    </h2>
                    <div className="relative">
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium italic border-y border-slate-200 dark:border-slate-800 py-8 leading-relaxed">
                            "Our structured cabling solutions support mission-critical networks across diverse environments, from MDF to one or multiple IDFs—delivered at the speed of light."
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    {/* Fiber Optic Cabling (ISP/OSP) */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Network className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                Fiber Optic Cabling
                            </h3>
                        </div>

                        <div className="grid gap-6">
                            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    Inside Plant Fiber (ISP)
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Our highly skilled team designs and installs precision fiber optic solutions for internal building networks. From MDF to one or multiple IDFs, we deliver seamless, high-performance fiber connectivity using advanced tools and proven methodologies—at the speed of light.
                                </p>
                            </div>

                            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    Outside Plant Fiber (OSP)
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Building-to-building fiber installations are one of our core competencies. We provide underground and aerial fiber deployments, ensuring inter-building networks that are reliable, scalable, and future-ready, supported by professional equipment and certified expertise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industry Applications Grid */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl">
                                <Building2 className="w-8 h-8 text-emerald-500" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                Industry Applications
                            </h3>
                        </div>
                        <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-medium">
                                Our fiber optic cabling solutions support mission-critical networks across diverse environments, including:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {industries.map((industry, index) => (
                                    <div key={index} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-tight">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        <span>{industry.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
