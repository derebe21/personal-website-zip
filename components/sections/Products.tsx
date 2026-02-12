'use client';

import { useState, useEffect } from 'react';
import { Globe, Cloud, Server, Terminal, Video, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function Products() {
    const cybersecurityPartners = [
        {
            name: 'Cisco',
            logo: 'cisco',
            url: 'https://www.cisco.com/c/en/us/products/security/firewalls/index.html',
            tag: 'Next-Generation Firewall',
            brief: 'Industry-leading security with deep visibility and control across the network.'
        },
        {
            name: 'Palo Alto',
            logo: 'paloaltonetworks',
            url: 'https://www.paloaltonetworks.com/network-security/hardware-firewall-innovations',
            tag: 'Hardware Innovations',
            brief: 'Cutting-edge hardware innovations for robust and scalable perimeter defense.'
        },
        {
            name: 'Fortinet',
            logo: 'fortinet',
            url: 'https://www.fortinet.com/products/next-generation-firewall',
            tag: 'Security Fabric',
            brief: 'High-performance integrated security fabric for cloud and enterprise environments.'
        },
        {
            name: 'Check Point',
            logo: 'https://avatars.githubusercontent.com/u/1023533?s=200&v=4',
            url: 'https://www.checkpoint.com/products/next-generation-firewall/',
            tag: 'Quantum Security',
            brief: 'Advanced threat prevention with Quantum security for networks of all sizes.'
        },
        {
            name: 'Sophos',
            logo: 'https://avatars.githubusercontent.com/u/102047?s=200&v=4',
            url: 'https://www.sophos.com/en-us/products/next-gen-firewall',
            tag: 'Xstream Security',
            brief: 'Next-gen synchronized security with deep learning and endpoint integration.'
        },
        {
            name: 'Trend Micro',
            logo: 'trendmicro',
            url: 'https://www.trendmicro.com/en_us/business/products/network.html',
            tag: 'Discovery & Protection',
            brief: 'Comprehensive network protection and visibility for hybrid cloud infrastructures.'
        },
        {
            name: 'CrowdStrike',
            logo: 'crowdstrike',
            url: 'https://www.crowdstrike.com/products/',
            tag: 'Falcon Platform',
            brief: 'Cloud-native endpoint protection and threat intelligence platform.'
        },
        {
            name: 'Darktrace',
            logo: 'darktrace',
            url: 'https://www.darktrace.com/en/products/',
            tag: 'Self-Learning AI',
            brief: 'Autonomous response and AI-driven security that learns from your network.'
        }
    ];

    const otherCategories = [
        {
            icon: Globe,
            title: 'Enterprise Networking',
            color: 'blue',
            partners: [
                { name: 'Cisco', logo: 'cisco', url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/index.html' },
                { name: 'HPE Aruba', logo: 'hp', url: 'https://www.arubanetworks.com/products/' },
                { name: 'Juniper', logo: 'junipernetworks', url: 'https://www.juniper.net/us/en/products.html' },
                { name: 'Huawei', logo: 'huawei', url: 'https://e.huawei.com/en/products/enterprise-networking' },
                { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/networking/index.htm' },
                { name: 'Netgear', logo: 'netgear', url: 'https://www.netgear.com/business/' },
                { name: 'Ubiquiti', logo: 'ubiquiti', url: 'https://www.ui.com/' },
                { name: 'MikroTik', logo: 'mikrotik', url: 'https://mikrotik.com/products' },
                { name: 'Arista', logo: 'arista', url: 'https://www.arista.com/en/products' },
                { name: 'Extreme', logo: 'extremenetworks', url: 'https://www.extremenetworks.com/products/' }
            ]
        },
        {
            icon: Cloud,
            title: 'Cloud & Virtualization',
            color: 'cyan',
            partners: [
                { name: 'VMware', logo: 'vmware', url: 'https://www.vmware.com/products.html' },
                { name: 'Azure', logo: 'microsoftazure', url: 'https://azure.microsoft.com/en-us/products/' },
                { name: 'AWS', logo: 'amazonwebservices', url: 'https://aws.amazon.com/products/' },
                { name: 'Google Cloud', logo: 'googlecloud', url: 'https://cloud.google.com/products' },
                { name: 'Hyper-V', logo: 'microsoft', url: 'https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/' },
                { name: 'Nutanix', logo: 'nutanix', url: 'https://www.nutanix.com/products' },
                { name: 'Citrix', logo: 'citrix', url: 'https://www.citrix.com/products/' }
            ]
        },
        {
            icon: Server,
            title: 'Servers & Data Center',
            color: 'indigo',
            partners: [
                { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/servers/index.htm' },
                { name: 'HPE', logo: 'hewlettpackardenterprise', url: 'https://www.hpe.com/us/en/servers.html' },
                { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/us/en/servers-storage/' },
                { name: 'Huawei', logo: 'huawei', url: 'https://e.huawei.com/en/products/compute' },
                { name: 'IBM', logo: 'ibm', url: 'https://www.ibm.com/it-infrastructure' },
                { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/data-storage/' },
                { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/en-us/products' },
                { name: 'Supermicro', logo: 'supermicro', url: 'https://www.supermicro.com/en/products' }
            ]
        },
        {
            icon: Terminal,
            title: 'Enterprise Software',
            color: 'purple',
            partners: [
                { name: 'Microsoft', logo: 'microsoft', url: 'https://www.microsoft.com/en-us/software-at-work' },
                { name: 'SAP', logo: 'sap', url: 'https://www.sap.com/products.html' },
                { name: 'Oracle', logo: 'oracle', url: 'https://www.oracle.com/cloud/products.html' },
                { name: 'Salesforce', logo: 'salesforce', url: 'https://www.salesforce.com/products/' },
                { name: 'Red Hat', logo: 'redhat', url: 'https://www.redhat.com/en/technologies/all-products' },
                { name: 'Linux', logo: 'linux', url: 'https://www.kernel.org/' }
            ]
        },
        {
            icon: Video,
            title: 'Smart & Physical Security',
            color: 'emerald',
            partners: [
                { name: 'Hikvision', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Hikvision_logo.svg', url: 'https://www.hikvision.com/en/products/' },
                { name: 'Dahua', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Dahua_Technology_logo.svg', url: 'https://www.dahuasecurity.com/products' },
                { name: 'Bosch', logo: 'bosch', url: 'https://www.boschsecurity.com/xc/en/products/' },
                { name: 'Axis', logo: 'axiscommunications', url: 'https://www.axis.com/products-and-solutions' },
                { name: 'Honeywell', logo: 'honeywell', url: 'https://buildings.honeywell.com/us/en/products/security' },
                { name: 'Suprema', logo: 'https://www.supremainc.com/en/view/common/img/logo.png', url: 'https://www.supremainc.com/en/hardware/product-list.asp' },
                { name: 'ZKTeco', logo: 'https://www.zkteco.com/static/upload/image/20210419/1618821034431526.png', url: 'https://www.zkteco.com/en/product_list/' }
            ]
        }
    ];

    return (
        <section
            id="technology"
            className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-fade-up">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="w-12 h-1 bg-primary rounded-full" />
                            <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">
                                Technology Partners
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                            Trusted Global <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                Technology Partners
                            </span>
                        </h2>
                    </div>
                    <div className="max-w-lg space-y-6">
                        <div className="flex items-center space-x-3 text-primary">
                            <ShieldCheck className="w-6 h-6" />
                            <p className="text-xl font-bold uppercase tracking-widest italic">
                                ITSEC Technology
                            </p>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium italic border-l-4 border-primary pl-6 leading-relaxed bg-white/50 dark:bg-white/5 p-4 rounded-r-lg">
                            "At ITSEC Technology, we deliver secure, scalable, and enterprise-grade solutions using leading hardware and software technologies."
                        </p>
                    </div>
                </div>

                {/* FEATURED CYBERSECURITY SECTION - STAGGERED ANIMATION */}
                <div className="mb-24">
                    <div className="flex items-center space-x-4 mb-10">
                        <div className="p-3 bg-red-500/10 rounded-2xl">
                            <ShieldCheck className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Cyber Security and IT Security
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cybersecurityPartners.map((partner, index) => (
                            <Link
                                key={partner.name}
                                href={partner.url}
                                target="_blank"
                                className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 animate-fade-up min-h-[300px] text-center"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="absolute top-6 right-6">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-widest rounded-full">
                                        {partner.tag}
                                    </span>
                                </div>
                                {/* UNIFORM LOGO CONTAINER */}
                                <div className="w-20 h-20 flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-800 rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6">
                                    <img
                                        src={partner.logo.startsWith('/') || partner.logo.startsWith('http')
                                            ? partner.logo
                                            : `https://cdn.simpleicons.org/${partner.logo}/4755E9`}
                                        alt={partner.name}
                                        className={`w-full h-full object-contain ${partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
                                    />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{partner.name}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                    {partner.brief}
                                </p>
                                <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    <ArrowRight className="w-6 h-6 text-primary" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* OTHER CATEGORIES - ONSIDE SLIDE ANIMATION */}
                <div className="space-y-12">
                    {otherCategories.map((category, catIndex) => (
                        <div
                            key={category.title}
                            className="bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800/50 shadow-sm relative overflow-hidden group/cat"
                        >
                            {/* ONSIDE DECORATION */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover/cat:scale-150" />

                            <div className="flex flex-col lg:flex-row lg:items-center gap-10 relative z-10">
                                <div className="lg:w-1/3 space-y-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-800 group-hover/cat:scale-110 transition-transform duration-500`}>
                                        <category.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                        Partnered with world-class {category.title.toLowerCase()} providers to ensure maximum reliability.
                                    </p>
                                </div>

                                <div className="lg:w-2/3">
                                    <div className="flex flex-wrap gap-4">
                                        {category.partners.map((partner, pIndex) => (
                                            <Link
                                                key={partner.name}
                                                href={partner.url}
                                                target="_blank"
                                                className="group/logo relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 animate-fade-left shadow-sm"
                                                style={{ animationDelay: `${(catIndex * 200) + (pIndex * 100)}ms` }}
                                            >
                                                {/* UNIFORM LOGO CONTAINER FOR SMALLER CARDS */}
                                                <div className="w-14 h-14 flex items-center justify-center grayscale group-hover/logo:grayscale-0 transition-all duration-500 transform group-hover/logo:scale-110">
                                                    <img
                                                        src={partner.logo.startsWith('/') || partner.logo.startsWith('http')
                                                            ? partner.logo
                                                            : `https://cdn.simpleicons.org/${partner.logo}/1D4ED8`}
                                                        alt={partner.name}
                                                        className={`w-full h-full object-contain ${partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
                                                    />
                                                </div>
                                                <span className="mt-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest opacity-0 group-hover/logo:opacity-100 transition-opacity">
                                                    {partner.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
