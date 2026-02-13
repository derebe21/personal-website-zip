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
                            className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-50 dark:border-slate-800/50 hover:-translate-y-2 flex flex-col items-center"
                        >
                            {/* Tag Pill */}
                            <div className="absolute top-6 right-8">
                                <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded-full shadow-sm">
                                    {partner.tag}
                                </span>
                            </div>

                            {/* Overlapping Logo Container */}
                            <div className="relative mb-10 group-hover:scale-110 transition-transform duration-500">
                                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex items-center justify-center p-5 border border-slate-50 dark:border-slate-700">
                                    {partner.logo ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={partner.logo}
                                                alt={`${partner.name} logo`}
                                                fill
                                                className="object-contain transition-all duration-300"
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                            {partner.name[0]}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">
                                {partner.name}
                            </h3>

                            {/* Description */}
                            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed text-center font-medium">
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
