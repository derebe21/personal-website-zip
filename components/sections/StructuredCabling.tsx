'use client';

import { Building2, Warehouse, Server, Factory, Building } from 'lucide-react';

export function StructuredCabling() {
    const industries = [
        'Manufacturing',
        'Logistics & Warehousing',
        '3PL (Third-Party Logistics)',
        'Cold Storage Facilities',
        'Crypto Mining Operations',
        'Data Centers',
        'Healthcare Facilities',
        'Education Institutions',
        'Enterprise & University Campuses'
    ];

    return (
        <section className="relative py-24 md:py-32 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
                        Structured Cabling
                    </h2>
                </div>

                {/* Fiber Optic Cabling Section */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                        Fiber Optic Cabling
                    </h3>

                    {/* Industry Applications */}
                    <div className="mb-12">
                        <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                            Industry Applications
                        </h4>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                            Our fiber optic cabling solutions support mission-critical networks across diverse environments, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all"
                                >
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ISP and OSP */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Inside Plant Fiber */}
                        <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl border border-blue-200 dark:border-slate-700">
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Inside Plant Fiber (ISP)
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Our highly skilled team designs and installs precision fiber optic solutions for internal building networks.
                                From MDF to one or multiple IDFs, we deliver seamless, high-performance fiber connectivity using advanced tools
                                and proven methodologies—at the speed of light.
                            </p>
                        </div>

                        {/* Outside Plant Fiber */}
                        <div className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl border border-indigo-200 dark:border-slate-700">
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Outside Plant Fiber (OSP)
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Building-to-building fiber installations are one of our core competencies.
                                We provide underground and aerial fiber deployments, ensuring inter-building networks that are reliable,
                                scalable, and future-ready, supported by professional equipment and certified expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
