'use client';

import { useState } from 'react';
import { Building2, Warehouse, Server, Factory, Building, CheckCircle2 } from 'lucide-react';

export function FiberOpticSplicing() {
    const [selectedFacility, setSelectedFacility] = useState<string>('all');

    const facilityTypes = [
        { id: 'office', label: 'Office Building', icon: Building2 },
        { id: 'warehouse', label: 'Warehouse/Distribution Center', icon: Warehouse },
        { id: 'datacenter', label: 'Data Center', icon: Server },
        { id: 'manufacturing', label: 'Manufacturing Facility', icon: Factory },
        { id: 'commercial', label: 'Other Commercial Space', icon: Building }
    ];

    const services = [
        {
            title: 'Single-Mode & Multi-Mode Fusion Splicing',
            description: 'Expert splicing for all fiber types using precision equipment to ensure minimal signal loss and maximum reliability for your critical business operations.'
        },
        {
            title: 'Data Center Fiber Infrastructure',
            description: 'Specialized high-density splicing solutions for data centers requiring ultra-low latency and maximum uptime for mission-critical applications.'
        },
        {
            title: 'Office Building Backbone Connections',
            description: 'Seamless fiber connections between floors, buildings, and network rooms to support your growing bandwidth demands and future expansion.'
        },
        {
            title: 'Warehouse & Industrial Splicing',
            description: 'Rugged, reliable fiber connections designed to withstand harsh industrial environments while maintaining optimal performance.'
        },
        {
            title: 'Emergency Fiber Repair',
            description: 'Rapid response fiber restoration services to get your business back online fast when accidents or damage threaten your connectivity.'
        },
        {
            title: 'Testing & Certification',
            description: 'Comprehensive OTDR and OLTS testing and documentation to verify splice quality and ensure your fiber network meets industry standards.'
        }
    ];

    const processSteps = [
        {
            number: '1',
            title: 'Site Assessment & Planning',
            description: 'We analyze your facility and create a detailed splicing plan that minimizes downtime and maximizes performance.'
        },
        {
            number: '2',
            title: 'Precision Fiber Preparation',
            description: 'Expert cleaning and cleaving of fiber ends using professional-grade tools for optimal splice quality.'
        },
        {
            number: '3',
            title: 'Fusion Splicing & Protection',
            description: 'High-precision fusion splicing with immediate protective sleeve installation to ensure long-term reliability.'
        },
        {
            number: '4',
            title: 'Testing & Documentation',
            description: 'Comprehensive OTDR and OLTS testing with detailed documentation and splice loss reports for your records.'
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
                        Fiber Optic Fusion Splicing
                    </h2>
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        FIBER OPTIC FUSION SPLICING SOLUTIONS MADE SIMPLE
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Tired of fiber connectivity issues slowing down your business? Our expert fusion splicing services deliver
                        rock-solid, high-speed connections for offices, warehouses, and data centers across East Africa.
                    </p>
                </div>

                {/* Problem Statement */}
                <div className="mb-16 p-8 md:p-12 bg-white dark:bg-slate-800 rounded-3xl border-l-8 border-red-500 shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                        Is Your Business Being Held Back by Outdated Network Technology?
                    </h3>
                    <div className="space-y-4 mb-8">
                        <p className="text-xl font-bold text-red-500">
                            Slow internet again? Dropped connections during critical operations?
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            Poor quality fiber splices are often the hidden culprit behind network headaches that cost your business time and money.
                            Don't let outdated connections limit your growth.
                        </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl mb-6">
                        <p className="text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                            At <span className="text-primary">ITSEC Technology</span>, we excel at creating seamless, permanent fiber optic connections that eliminate signal loss
                            and ensure maximum data transmission speeds.
                        </p>
                    </div>
                    <p className="text-primary font-black text-2xl uppercase tracking-tighter animate-pulse text-center">
                        We pride ourselves on building Relationships, not just Networks!
                    </p>
                </div>

                {/* Facility Type Filter */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                        Select Your Facility Type
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setSelectedFacility('all')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedFacility === 'all'
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                }`}
                        >
                            All Facilities
                        </button>
                        {facilityTypes.map((facility) => (
                            <button
                                key={facility.id}
                                onClick={() => setSelectedFacility(facility.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${selectedFacility === facility.id
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                            >
                                <facility.icon className="w-5 h-5" />
                                <span>{facility.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
                        Our Fiber Optic Fusion Splicing Services
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start space-x-3 mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {service.title}
                                    </h4>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Section with Black Background */}
                <div className="bg-slate-950 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-3xl">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            Our Proven Fusion Splicing Process
                        </h3>
                        <p className="text-slate-300 text-center mb-12 max-w-3xl mx-auto">
                            Too many contractors cut corners on fiber splicing. We follow a meticulous process that ensures
                            every splice meets the highest quality standards.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-3">
                                                {step.title}
                                            </h4>
                                            <p className="text-slate-400">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
