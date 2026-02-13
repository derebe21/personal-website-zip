'use client';

import Image from 'next/image';

export function SecurityPartners() {
    const partners = [
        {
            name: 'Fortinet',
            logo: '/images/partners/fortinet-logo.svg',
            tag: 'SECURITY FABRIC',
            description: 'High performance integrated security fabric for cloud and enterprise environments.',
            width: 130,
        },
        {
            name: 'Check Point',
            logo: '/images/partners/checkpoint-logo.svg',
            tag: 'INFINITY PLATFORM',
            description: 'Unified security architecture offering preventative protection against Gen V cyber attacks.',
            width: 150,
        },
        {
            name: 'Cisco',
            logo: null,
            tag: 'ZERO TRUST',
            description: 'Secure everything to make anything possible with industry-leading network security solutions.',
            width: 120,
        },
        {
            name: 'Palo Alto Networks',
            logo: null,
            tag: 'STRATA',
            description: 'Next-generation firewalls and cloud-native security for modern enterprise defense.',
            width: 140,
        },
        {
            name: 'Sophos',
            logo: '/images/partners/sophos-logo.png',
            tag: 'SYNCHRONIZED',
            description: 'Cybersecurity evolved. Advanced threat protection for networks and endpoints.',
            width: 140,
        },
        {
            name: 'CrowdStrike',
            logo: '/images/partners/crowdstrike-logo.png',
            tag: 'FALCON',
            description: 'Cloud-native endpoint protection platform built to stop breaches.',
            width: 160,
        },
        {
            name: 'Darktrace',
            logo: '/images/partners/darktrace-logo.png',
            tag: 'SELF-LEARNING',
            description: 'Autonomous cyber AI that detects and fights back against emerging threats.',
            width: 150,
        },
        {
            name: 'Trend Micro',
            logo: null,
            tag: 'VISION ONE',
            description: 'A unified cybersecurity platform delivering extended detection and response (XDR).',
            width: 140,
        },
    ];

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Trusted Security Partners
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Collaborating with world-leading technology providers to deliver
                        robust and secure solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:-translate-y-1"
                        >
                            {/* Tag Pill */}
                            <div className="absolute top-0 right-0 mt-4 mr-4">
                                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded-full">
                                    {partner.tag}
                                </span>
                            </div>

                            <div className="flex flex-col items-center text-center mt-4">
                                {/* Logo / Name */}
                                <div className="h-20 w-full flex items-center justify-center mb-6">
                                    {partner.logo ? (
                                        <div className="relative w-full h-full max-w-[140px]">
                                            <Image
                                                src={partner.logo}
                                                alt={`${partner.name} logo`}
                                                fill
                                                className="object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-xl font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                                            {partner.name}
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-3">
                                    {partner.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
