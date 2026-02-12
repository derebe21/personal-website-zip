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
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400',
            tag: 'Next-Generation Firewall',
            brief: 'Industry-leading security with deep visibility and control across the network.'
        },
        {
            name: 'Palo Alto',
            logo: 'paloaltonetworks',
            url: 'https://www.paloaltonetworks.com/network-security/hardware-firewall-innovations',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400',
            tag: 'Hardware Innovations',
            brief: 'Cutting-edge hardware innovations for robust and scalable perimeter defense.'
        },
        {
            name: 'Fortinet',
            logo: 'fortinet',
            url: 'https://www.fortinet.com/products/next-generation-firewall',
            image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=400',
            tag: 'Security Fabric',
            brief: 'High-performance integrated security fabric for cloud and enterprise environments.'
        },
        {
            name: 'Check Point',
            logo: 'checkpoint',
            url: 'https://www.checkpoint.com/products/next-generation-firewall/',
            image: 'https://images.unsplash.com/photo-1510511459019-5dee995ad33b?auto=format&fit=crop&q=80&w=400',
            tag: 'Quantum Security',
            brief: 'Advanced threat prevention with Quantum security for networks of all sizes.'
        },
        {
            name: 'Sophos',
            logo: 'sophos',
            url: 'https://www.sophos.com/en-us/products/next-gen-firewall',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
            tag: 'Xstream Security',
            brief: 'Next-gen synchronized security with deep learning and endpoint integration.'
        },
        {
            name: 'Trend Micro',
            logo: 'trendmicro',
            url: 'https://www.trendmicro.com/en_us/business/products/network.html',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
            tag: 'Discovery & Protection',
            brief: 'Comprehensive network protection and visibility for hybrid cloud infrastructures.'
        },
        {
            name: 'CrowdStrike',
            logo: 'crowdstrike',
            url: 'https://www.crowdstrike.com/',
            image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=400',
            tag: 'Falcon Platform',
            brief: 'Cloud-native endpoint protection and threat intelligence platform.'
        },
        {
            name: 'Darktrace',
            logo: 'darktrace',
            url: 'https://www.darktrace.com/',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
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
                { name: 'Cisco', logo: 'cisco', url: 'https://www.cisco.com/' },
                { name: 'HPE Aruba', logo: 'hp', url: 'https://www.arubanetworks.com/' },
                { name: 'Juniper', logo: 'junipernetworks', url: 'https://www.juniper.net/' },
                { name: 'Huawei', logo: 'huawei', url: 'https://e.huawei.com/en/products/enterprise-networking' },
                { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/' },
                { name: 'Netgear', logo: 'netgear', url: 'https://www.netgear.com/' },
                { name: 'Ubiquiti', logo: 'ubiquiti', url: 'https://www.ui.com/' },
                { name: 'MikroTik', logo: 'mikrotik', url: 'https://mikrotik.com/' },
                { name: 'Arista', logo: 'arista', url: 'https://www.arista.com/' },
                { name: 'Extreme', logo: 'google-lens', url: 'https://www.extremenetworks.com/' }
            ]
        },
        {
            icon: Cloud,
            title: 'Cloud & Virtualization',
            color: 'cyan',
            partners: [
                { name: 'VMware', logo: 'vmware', url: 'https://www.vmware.com/' },
                { name: 'Azure', logo: 'microsoftazure', url: 'https://azure.microsoft.com/' },
                { name: 'AWS', logo: 'amazonwebservices', url: 'https://aws.amazon.com/' },
                { name: 'Google Cloud', logo: 'googlecloud', url: 'https://cloud.google.com/' },
                { name: 'Hyper-V', logo: 'microsoft', url: 'https://www.microsoft.com/en-us/windows-server/remote-desktop-services/hyper-v-virtualization' },
                { name: 'Nutanix', logo: 'nutanix', url: 'https://www.nutanix.com/' },
                { name: 'Citrix', logo: 'citrix', url: 'https://www.citrix.com/' }
            ]
        },
        {
            icon: Server,
            title: 'Servers & Data Center',
            color: 'indigo',
            partners: [
                { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/' },
                { name: 'HPE', logo: 'hewlettpackardenterprise', url: 'https://www.hpe.com/' },
                { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/' },
                { name: 'Huawei', logo: 'huawei', url: 'https://e.huawei.com/en/products/compute' },
                { name: 'IBM', logo: 'ibm', url: 'https://www.ibm.com/' },
                { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/' },
                { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/' },
                { name: 'Supermicro', logo: 'supermicro', url: 'https://www.supermicro.com/' }
            ]
        },
        {
            icon: Terminal,
            title: 'Enterprise Software',
            color: 'purple',
            partners: [
                { name: 'Microsoft', logo: 'microsoft', url: 'https://www.microsoft.com/' },
                { name: 'SAP', logo: 'sap', url: 'https://www.sap.com/' },
                { name: 'Oracle', logo: 'oracle', url: 'https://www.oracle.com/' },
                { name: 'Salesforce', logo: 'salesforce', url: 'https://www.salesforce.com/' },
                { name: 'Red Hat', logo: 'redhat', url: 'https://www.redhat.com/' },
                { name: 'Linux', logo: 'linux', url: 'https://www.kernel.org/' }
            ]
        },
        {
            icon: Video,
            title: 'Smart & Physical Security',
            color: 'emerald',
            partners: [
                { name: 'Hikvision', logo: 'simpleicons', url: 'https://www.hikvision.com/' },
                { name: 'Dahua', logo: 'shield', url: 'https://www.dahuasecurity.com/' },
                { name: 'Bosch', logo: 'bosch', url: 'https://www.boschsecurity.com/' },
                { name: 'Axis', logo: 'axiscommunications', url: 'https://www.axis.com/' },
                { name: 'Honeywell', logo: 'honeywell', url: 'https://www.honeywell.com/' },
                { name: 'Suprema', logo: 'simpleicons', url: 'https://www.supremainc.com/' },
                { name: 'ZKTeco', logo: 'simpleicons', url: 'https://www.zkteco.com/' }
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
                            Cybersecurity Solutions
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cybersecurityPartners.map((partner, index) => (
                            <Link
                                key={partner.name}
                                href={partner.url}
                                target="_blank"
                                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 animate-fade-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-[10px] font-bold text-white uppercase tracking-widest rounded-full shadow-lg">
                                            {partner.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-16 h-16 flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:shadow-inner transition-all transform group-hover:rotate-3">
                                            <img
                                                src={`https://cdn.simpleicons.org/${partner.logo}/4755E9`}
                                                alt={partner.name}
                                                className="w-full h-full object-contain dark:invert"
                                            />
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-primary transition-all transform group-hover:translate-x-1" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{partner.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                        {partner.brief}
                                    </p>
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
                                    {/* LOGO GRID WITH STAGGERED "ONE BY ONE" FADE-IN SIDEWAYS */}
                                    <div className="flex flex-wrap gap-4">
                                        {category.partners.map((partner, pIndex) => (
                                            <Link
                                                key={partner.name}
                                                href={partner.url}
                                                target="_blank"
                                                className="group/logo relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 animate-fade-left shadow-sm"
                                                style={{ animationDelay: `${(catIndex * 200) + (pIndex * 100)}ms` }}
                                            >
                                                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center grayscale group-hover/logo:grayscale-0 transition-all duration-500 transform group-hover/logo:scale-110">
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${partner.logo}/1D4ED8`}
                                                        alt={partner.name}
                                                        className="w-full h-full object-contain dark:invert"
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
