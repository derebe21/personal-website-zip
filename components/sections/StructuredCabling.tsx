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
        <section id="structured-cabling" className="relative py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8 leading-none">
                        Structured <span className="text-primary">Cabling</span>
                    </h2>
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
                                Fiber Optic Cabling (ISP/OSP)
                            </h3>
                        </div>

                        <div className="grid gap-6">
                            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    Inside Plant Fiber (ISP)
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Our highly skilled team designs and installs precision fiber optic solutions for internal building networks.
                                    From MDF to one or multiple IDFs, we deliver seamless, high-performance fiber connectivity using advanced
                                    tools and proven methodologies—at the speed of light.
                                </p>
                            </div>

                            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    Outside Plant Fiber (OSP)
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Building-to-building fiber installations are one of our core competencies. We provide underground and
                                    aerial fiber deployments, ensuring inter-building networks are reliable, scalable, and future-ready,
                                    supported by professional equipment and certified expertise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Cabling (Copper) */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Zap className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                Horizontal Cabling (Copper)
                            </h3>
                        </div>

                        <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all h-full">
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Our horizontal cabling services encompass the design, installation, and certification of high-performance copper network systems.
                                We specialize in Category 6 (Cat6) and Category 6A (Cat6A) solutions to deliver maximum bandwidth and reliable data transmission
                                for workstations, wireless access points, and IoT devices.
                            </p>
                            <ul className="space-y-4">
                                {['Cat6 / Cat6A/cat7', 'Workstation Cabling & Terminations', 'WAP Infrastructure', 'PoE Solutions', 'Certified Performance Testing (Fluke)'].map((item) => (
                                    <li key={item} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300 font-medium">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Industry Applications Grid */}
                <div>
                    <div className="flex items-center space-x-4 mb-10">
                        <div className="p-3 bg-emerald-500/10 rounded-2xl">
                            <Building2 className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Industry Applications
                        </h3>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-3xl">
                        Our fiber optic and structured cabling solutions support mission-critical networks across diverse environments:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="group flex items-center space-x-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl transition-all animate-fade-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="p-3 bg-emerald-500/5 rounded-xl group-hover:bg-emerald-500/10 transition-colors">
                                    <industry.icon className="w-6 h-6 text-emerald-500" />
                                </div>
                                <span className="text-slate-800 dark:text-slate-200 font-bold uppercase tracking-tight">{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
