'use client';

import Image from 'next/image';

export function SecurityPartners() {
    const partners = [
        {
            name: 'Cisco',
            logo: null, // text only as per request/default if no logo
            width: 120,
        },
        {
            name: 'Palo Alto Networks',
            logo: null,
            width: 140,
        },
        {
            name: 'Fortinet',
            logo: '/images/partners/fortinet-logo.svg',
            width: 130,
        },
        {
            name: 'Check Point',
            logo: '/images/partners/checkpoint-logo.svg',
            width: 150,
        },
        {
            name: 'Sophos',
            logo: '/images/partners/sophos-logo.png',
            width: 140,
        },
        {
            name: 'Trend Micro',
            logo: null,
            width: 140,
        },
        {
            name: 'CrowdStrike',
            logo: '/images/partners/crowdstrike-logo.png',
            width: 160,
        },
        {
            name: 'Darktrace',
            logo: '/images/partners/darktrace-logo.png',
            width: 150,
        },
    ];

    return (
        <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Trusted Security Partners
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Collaborating with world-leading technology providers to deliver
                        robust and secure solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center p-4 w-full h-24">
                            {partner.logo ? (
                                <div className="relative w-full h-full max-w-[180px] max-h-[80px]">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <span className="text-xl font-bold text-slate-700 dark:text-slate-300">
                                    {partner.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
