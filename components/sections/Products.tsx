'use client';

import {
    Shield,
    Globe,
    Cloud,
    Server,
    Terminal,
    Video,
    Zap,
    ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function Products() {
    const technologyCategories = [
        {
            icon: Shield,
            title: 'Cybersecurity',
            brands: 'Cisco • Palo Alto Networks • Fortinet • Check Point • Sophos • Trend Micro • CrowdStrike • Darktrace',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
            description: 'Advanced threat protection and risk management architectures.'
        },
        {
            icon: Globe,
            title: 'Enterprise Networking',
            brands: 'Cisco • HPE Aruba • Juniper • Huawei • Dell • Netgear • Ubiquiti • MikroTik • Arista • Extreme',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
            description: 'High-performance connectivity solutions for the modern enterprise.'
        },
        {
            icon: Cloud,
            title: 'Cloud & Virtualization',
            brands: 'VMware • Microsoft Azure • AWS • Google Cloud • Hyper-V • Nutanix • Citrix',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800', // Replaced with networking style as cloud fallback
            description: 'Scalable cloud infrastructure and seamless virtualization environments.'
        },
        {
            icon: Server,
            title: 'Servers & Data Center',
            brands: 'Dell • HPE • Lenovo • Huawei • IBM • NetApp • Synology • Supermicro',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
            description: 'Powerful computation and storage systems for mission-critical apps.'
        },
        {
            icon: Terminal,
            title: 'Enterprise Software',
            brands: 'Microsoft • SAP • Oracle • Salesforce • Red Hat • Linux Enterprise',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            description: 'Operating systems, ERP, and CRM platforms for optimized growth.'
        },
        {
            icon: Video,
            title: 'Smart & Physical Security',
            brands: 'Hikvision • Dahua • Bosch • Axis • Honeywell • Suprema • ZKTeco',
            image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800',
            description: 'Intelligent surveillance and access control for modern facilities.'
        },
        {
            icon: Zap,
            title: 'Power & Infrastructure',
            brands: 'APC • Vertiv • Eaton • Huawei Digital Power • Delta UPS • Panduit • CommScope',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1b?auto=format&fit=crop&q=80&w=800',
            description: 'Resilient power protection and structure cabling for maximum uptime.'
        },
    ];

    return (
        <section
            id="products"
            className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-6 mb-20 animate-fade-up">
                    <span className="text-sm font-bold text-primary uppercase tracking-[0.3em] inline-block px-4 py-1.5 bg-primary/5 rounded-full">
                        Technology
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
                        Trusted Global Technology Partners
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
                        "At ITSEC Technology, we deliver secure, scalable, and enterprise-grade solutions using leading hardware and software technologies."
                    </p>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {technologyCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="group flex flex-col h-full bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 rounded-3xl"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 p-2 bg-primary/90 backdrop-blur-md rounded-xl text-white shadow-lg">
                                    <category.icon className="w-6 h-6" />
                                </div>
                            </div>

                            <CardHeader className="pb-4">
                                <CardTitle className="text-2xl font-black tracking-tight flex items-center gap-3">
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow space-y-6">
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                                    Strategic Brands
                                </p>
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed min-h-[100px] group-hover:border-primary/20 transition-colors">
                                    {category.brands}
                                </div>

                                <Link
                                    href="/contact"
                                    className="mt-auto inline-flex items-center text-sm font-black text-primary uppercase tracking-widest group/link pt-4"
                                >
                                    Get these products
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Final CTA Card */}
                    <Card className="flex flex-col h-full bg-primary text-white border-none overflow-hidden rounded-3xl shadow-xl shadow-primary/20 p-8 justify-center items-center text-center space-y-6 group">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black italic uppercase leading-tight">
                            Build the Infrastructure of Tomorrow
                        </h3>
                        <p className="opacity-80 font-medium">
                            Ready to implement top-tier technology in your organization?
                        </p>
                        <Link href="/contact" className="w-full">
                            <button className="w-full py-4 bg-white text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-slate-100 transition-colors shadow-lg">
                                Contact Experts
                            </button>
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    );
}
