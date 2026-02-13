import Image from 'next/image';

export function CloudVirtualization() {
    const partners = [
        {
            name: 'VMware',
            logo: '/images/partners/vmware-logo.svg',
            tag: 'VIRTUALIZATION',
            description: 'Industry-leading virtualization and cloud infrastructure solutions for the modern enterprise.',
        },
        {
            name: 'Microsoft Hyper-V',
            logo: '/images/partners/hyperv-logo.svg',
            tag: 'HYPERVISOR',
            description: 'Robust virtualization platform integrated with Windows Server for hybrid cloud efficiency.',
        },
        {
            name: 'Oracle Cloud',
            logo: '/images/partners/oracle-logo.svg',
            tag: 'OCI',
            description: 'Comprehensive cloud platform for running databases and enterprise applications with security.',
        },
        {
            name: 'IBM Cloud',
            logo: '/images/partners/ibm-logo.svg',
            tag: 'HYBRID CLOUD',
            description: 'Secure, open-source-based cloud platform for building and managing modern workloads.',
        },
        {
            name: 'Red Hat Virtualization',
            logo: '/images/partners/redhat-logo.svg',
            tag: 'OPEN VIRTUAL',
            description: 'Enterprise-grade open-source virtualization platform built on KVM and RHEL.',
        },
    ];

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Technology Cloud & Virtualization
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Technology Cloud & Virtualization
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4 text-center">
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
