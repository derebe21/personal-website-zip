'use client';

import {
    Shield,
    Globe,
    Cloud,
    Server,
    Terminal,
    Video,
    Zap,
    ExternalLink,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export function Products() {
    const cybersecurityPartners = [
        {
            name: 'Cisco',
            logo: 'cisco',
            url: 'https://www.cisco.com/c/en/us/products/security/firewalls/index.html',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
            tag: 'Next-Gen Firewall'
        },
        {
            name: 'Palo Alto',
            logo: 'paloaltonetworks',
            url: 'https://www.paloaltonetworks.com/network-security/hardware-firewall-innovations',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400',
            tag: 'Cloud Security',
            brief: 'Industry-leading Hardware Firewall innovations for robust perimeter defense.'
        },
        {
            name: 'Fortinet',
            logo: 'fortinet',
            url: 'https://www.fortinet.com/products/next-generation-firewall',
            image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=400',
            tag: 'Security Fabric'
        },
        {
            name: 'Check Point',
            logo: 'checkpoint',
            url: 'https://www.checkpoint.com/products/next-generation-firewall/',
            image: 'https://images.unsplash.com/photo-1510511459019-5dee995ad33b?auto=format&fit=crop&q=80&w=400',
            tag: 'Quantum Security'
        },
        {
            name: 'Sophos',
            logo: 'sophos',
            url: 'https://www.sophos.com/en-us/products/next-gen-firewall',
            image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=400',
            tag: 'Intercept X'
        },
        {
            name: 'Trend Micro',
            logo: 'trendmicro',
            url: 'https://www.trendmicro.com/en_us/business/products/network.html',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400',
            tag: 'Hybrid Cloud'
        },
        {
            name: 'CrowdStrike',
            logo: 'crowdstrike',
            url: 'https://www.crowdstrike.com/',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
            tag: 'Falcon Platform'
        },
        {
            name: 'Darktrace',
            logo: 'darktrace',
            url: 'https://www.darktrace.com/',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
            tag: 'AI Security'
        }
    ];

    const otherCategories = [
        {
            icon: Globe,
            title: 'Enterprise Networking',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400',
            partners: [
                { name: 'Cisco', logo: 'cisco', url: 'https://www.cisco.com/c/en/us/products/networking/index.html' },
                { name: 'HPE Aruba', logo: 'aruba', url: 'https://www.arubanetworks.com/' },
                { name: 'Juniper', logo: 'junipernetworks', url: 'https://www.juniper.net/' },
                { name: 'Huawei', logo: 'huawei', url: 'https://e.huawei.com/en/products/enterprise-networking' },
                { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/networking/index.htm' },
                { name: 'Ubiquiti', logo: 'ubiquiti', url: 'https://www.ui.com/' },
                { name: 'MikroTik', logo: 'mikrotik', url: 'https://mikrotik.com/' },
                { name: 'Arista', logo: 'arista', url: 'https://www.arista.com/' }
            ]
        },
        {
            icon: Cloud,
            title: 'Cloud & Virtualization',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400',
            partners: [
                { name: 'VMware', logo: 'vmware', url: 'https://www.vmware.com/' },
                { name: 'Azure', logo: 'microsoftazure', url: 'https://azure.microsoft.com/' },
                { name: 'AWS', logo: 'amazonwebservices', url: 'https://aws.amazon.com/' },
                { name: 'Google Cloud', logo: 'googlecloud', url: 'https://cloud.google.com/' },
                { name: 'Nutanix', logo: 'nutanix', url: 'https://www.nutanix.com/' },
                { name: 'Citrix', logo: 'citrix', url: 'https://www.citrix.com/' }
            ]
        },
        {
            icon: Server,
            title: 'Servers & Data Center',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400',
            partners: [
                { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/servers/index.htm' },
                { name: 'HPE', logo: 'hewlettpackardenterprise', url: 'https://www.hpe.com/us/en/servers.html' },
                { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/us/en/servers-storage/' },
                { name: 'Huawei', logo: 'huawei', url: 'https://e.huawei.com/en/products/compute' },
                { name: 'IBM', logo: 'ibm', url: 'https://www.ibm.com/it-infrastructure' },
                { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/' },
                { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/' }
            ]
        },
        {
            icon: Terminal,
            title: 'Enterprise Software',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
            partners: [
                { name: 'Microsoft', logo: 'microsoft', url: 'https://www.microsoft.com/en-us/enterprise' },
                { name: 'SAP', logo: 'sap', url: 'https://www.sap.com/' },
                { name: 'Oracle', logo: 'oracle', url: 'https://www.oracle.com/' },
                { name: 'Salesforce', logo: 'salesforce', url: 'https://www.salesforce.com/' },
                { name: 'Red Hat', logo: 'redhat', url: 'https://www.redhat.com/' },
                { name: 'SUSE', logo: 'suse', url: 'https://www.suse.com/' }
            ]
        },
        {
            icon: Video,
            title: 'Smart & Physical Security',
            image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=400',
            partners: [
                { name: 'Hikvision', logo: 'hikvision', url: 'https://www.hikvision.com/' },
                { name: 'Bosch', logo: 'bosch', url: 'https://www.boschsecurity.com/' },
                { name: 'Axis', logo: 'axiscommunications', url: 'https://www.axis.com/' },
                { name: 'Honeywell', logo: 'honeywell', url: 'https://www.honeywell.com/us/en/it-and-security' }
            ]
        },
        {
            icon: Zap,
            title: 'Power & Infrastructure',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1b?auto=format&fit=crop&q=80&w=400',
            partners: [
                { name: 'APC', logo: 'schneiderelectric', url: 'https://www.apc.com/' },
                { name: 'Vertiv', logo: 'vertiv', url: 'https://www.vertiv.com/' },
                { name: 'Eaton', logo: 'eaton', url: 'https://www.eaton.com/' },
                { name: 'Panduit', logo: 'panduit', url: 'https://www.panduit.com/' },
                { name: 'CommScope', logo: 'commscope', url: 'https://www.commscope.com/' }
            ]
        },
    ];

    return (
        <section
            id="technology"
            className="py-24 md:py-32 bg-white dark:bg-slate-950"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 animate-fade-up">
                    <div className="space-y-4">
                        <span className="text-sm font-bold text-primary uppercase tracking-[0.3em] inline-block">
                            Technology Partners
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                            Trusted Global <br /> Technology Partners
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg font-medium italic border-l-4 border-primary pl-6">
                        "Delivering secure, scalable, and enterprise-grade solutions using leading hardware and software technologies."
                    </p>
                </div>

                {/* FEATURED CYBERSECURITY SECTION */}
                <div className="mb-32 space-y-12">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-primary rounded-2xl shadow-xl shadow-primary/20">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
                            Featured Cybersecurity
                        </h3>
                        <div className="h-px flex-grow bg-slate-100 dark:bg-slate-800" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cybersecurityPartners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative h-80 rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 dark:border-slate-800"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent transition-opacity group-hover:opacity-90" />

                                <div className="absolute inset-x-6 bottom-6 flex flex-col items-center text-center space-y-3">
                                    <div className="w-16 h-16 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        <img
                                            src={`https://cdn.simpleicons.org/${partner.logo}/1e293b`}
                                            alt={partner.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-black text-white uppercase tracking-tight">
                                            {partner.name}
                                        </h4>
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] px-2 py-0.5 bg-white/10 rounded-full">
                                            {partner.tag}
                                        </span>
                                        {'brief' in partner && (
                                            <p className="text-[10px] text-white/70 font-medium mt-2 leading-relaxed max-w-[180px] line-clamp-2">
                                                {String(partner.brief)}
                                            </p>
                                        )}
                                    </div>
                                    <div className="pt-2 flex items-center gap-2 text-white/60 text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Go to Site <ExternalLink className="w-3 h-3" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* OTHER CATEGORIES - COMPACT SECTION */}
                <div className="space-y-16">
                    {otherCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group flex flex-col lg:flex-row gap-8 items-start border-b border-slate-100 dark:border-slate-800 pb-16 last:border-0"
                        >
                            <div className="w-full lg:w-1/4 h-48 lg:h-64 rounded-3xl overflow-hidden shadow-xl relative">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                                <div className="absolute top-6 left-6 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl">
                                    <category.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            <div className="flex-grow space-y-8">
                                <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white flex items-center gap-4">
                                    {category.title}
                                    <div className="h-px flex-grow bg-slate-100 dark:bg-slate-800" />
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6">
                                    {category.partners.map((partner, pIdx) => (
                                        <a
                                            key={pIdx}
                                            href={partner.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/brand flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center grayscale group-hover/brand:grayscale-0 transition-all duration-500 transform group-hover/brand:scale-110">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${partner.logo}/4755E9`}
                                                    alt={partner.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="mt-3 flex items-center gap-1.5 overflow-hidden">
                                                <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 group-hover/brand:text-primary uppercase tracking-wider truncate">
                                                    {partner.name}
                                                </span>
                                                <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover/brand:opacity-100 transition-opacity text-primary" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 rounded-[3.5rem] bg-slate-900 dark:bg-primary text-white flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
                    <div className="space-y-4 relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
                            Elevate Your <br /> Security Posture
                        </h3>
                        <p className="text-xl text-slate-300 dark:text-white/80 font-medium max-w-md">
                            Ready to implement top-tier technology in your organization? Let's build your defense.
                        </p>
                    </div>
                    <Link href="/contact" className="relative z-10 w-full lg:w-auto">
                        <button className="w-full lg:w-auto px-12 py-6 bg-white text-primary font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                            Connect with Experts <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
