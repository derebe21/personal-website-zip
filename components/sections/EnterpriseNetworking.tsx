import Image from 'next/image';

export function EnterpriseNetworking() {
    const partners = [
        {
            name: 'Cisco',
            logo: '/images/partners/cisco-logo.svg',
            tag: 'CORE SYSTEMS',
            description: 'High-performance routing, switching, and data center networking solutions.',
        },
        {
            name: 'Huawei',
            logo: '/images/partners/huawei-logo.svg',
            tag: 'INFRASTRUCTURE',
            description: 'Scalable networking solutions with robust enterprise performance.',
        },
        {
            name: 'HPE Aruba',
            logo: '/images/partners/hpe-logo.svg',
            tag: 'WIRELESS & EDGE',
            description: 'Reliable wired and wireless networking for modern enterprise environments.',
        },
        {
            name: 'Juniper Networks',
            logo: '/images/partners/juniper-logo.svg',
            tag: 'AI NETWORKING',
            description: 'Secure, high-speed networking infrastructure for enterprises and data centers.',
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Technology Enterprise Networking
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Technology Enterprise Networking
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-50 dark:border-slate-800/50 hover:-translate-y-2 flex flex-col items-center"
                        >
                            <div className="absolute top-6 right-8">
                                <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded-full shadow-sm">
                                    {partner.tag}
                                </span>
                            </div>

                            <div className="relative mb-10 group-hover:scale-110 transition-transform duration-500">
                                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex items-center justify-center p-5 border border-slate-50 dark:border-slate-700">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            fill
                                            className="object-contain transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">
                                {partner.name}
                            </h3>

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
