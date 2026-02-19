'use client';

import { useState, useEffect } from 'react';
import { Globe, Cloud, Server, Terminal, Video, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function Products() {
    const cyberSecurityPartners = [
        {
            name: 'Cisco',
            logo: '/images/partners/cisco-final.png',
            url: 'https://www.cisco.com/c/en/us/products/security/index.html',
            tag: '',
            brief: ''
        },
        {
            name: 'Palo Alto',
            logo: 'paloaltonetworks',
            url: 'https://www.paloaltonetworks.com/network-security/next-generation-firewall',
            tag: '',
            brief: ''
        },
        {
            name: 'Fortinet',
            logo: 'fortinet',
            url: 'https://www.fortinet.com/products/next-generation-firewall',
            tag: '',
            brief: ''
        },
        {
            name: 'Check Point',
            logo: '/images/partners/checkpoint-logo.svg',
            url: 'https://www.checkpoint.com/products-solutions/next-generation-firewall/',
            tag: '',
            brief: ''
        },
        {
            name: 'Sophos',
            logo: '/images/partners/sophos-shield.jpg',
            url: 'https://www.sophos.com/en-us/products/next-gen-firewall',
            tag: '',
            brief: ''
        },
        {
            name: 'Trend Micro',
            logo: 'trendmicro',
            url: 'https://www.trendmicro.com/en_us/business/products/network.html',
            tag: '',
            brief: ''
        },
        {
            name: 'CrowdStrike',
            logo: '/images/partners/crowdstrike-falcon.png',
            url: 'https://www.crowdstrike.com/falcon-platform/',
            tag: '',
            brief: ''
        },
        {
            name: 'Darktrace',
            logo: '/images/partners/darktrace-red.png',
            url: 'https://www.darktrace.com/en/products/',
            tag: '',
            brief: ''
        }
    ];

    const enterpriseNetworkingPartners = [
        { name: 'Cisco', logo: '/images/partners/cisco-final.png', url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/index.html' },
        { name: 'Huawei', logo: '/images/partners/huawei-ent.png', url: 'https://e.huawei.com/en/products/enterprise-networking' },
        { name: 'HPE Aruba', logo: '/images/partners/hpe-logo.svg', url: 'https://www.arubanetworks.com/products/' },
        { name: 'Juniper Networks', logo: '/images/partners/juniper-logo.svg', url: 'https://www.juniper.net/us/en/products.html' }
    ];

    const otherCategories = [
        {
            icon: Cloud,
            title: 'Cloud & Virtualization',
            color: 'cyan',
            partners: [
                { name: 'VMware', logo: '/images/partners/vmware-logo.svg', url: 'https://www.vmware.com/products.html' },
                { name: 'Proxmox', logo: 'proxmox', url: 'https://www.proxmox.com/en/proxmox-ve' },
                { name: 'Microsoft Hyper-V', logo: '/images/partners/hyperv-logo.svg', url: 'https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/' },
                { name: 'Oracle Cloud', logo: '/images/partners/oracle-logo.svg', url: 'https://www.oracle.com/cloud/products.html' },
                { name: 'IBM Cloud', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
                { name: 'Red Hat Virtualization', logo: '/images/partners/redhat-logo.svg', url: 'https://www.redhat.com/en/technologies/all-products' }
            ],
            services: ["Server Virtualization", "Desktop Virtualization (VDI)", "Cloud Virtualization", "Backup & Disaster Recovery"]
        },
        {
            icon: Server,
            title: 'Servers & Data Center',
            color: 'indigo',
            partners: [
                { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/servers/index.htm' },
                { name: 'HPE', logo: '/images/partners/hpe-new.png', url: 'https://www.hpe.com/us/en/servers.html' },
                { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/us/en/servers-storage/' },
                { name: 'Huawei', logo: '/images/partners/huawei-servers.png', url: 'https://e.huawei.com/en/products/compute' },
                { name: 'IBM', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
                { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/data-storage/' },
                { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/en-us/products' },
                { name: 'Supermicro', logo: 'supermicro', url: 'https://www.supermicro.com/en/products' }
            ]
        },
        {
            icon: Video,
            title: 'Smart & Physical Security',
            color: 'emerald',
            partners: [
                { name: 'Hikvision', logo: '/images/partners/hikvision.png', url: 'https://www.hikvision.com/en/products/' },
                { name: 'Dahua', logo: '/images/partners/dahua.png', url: 'https://www.dahuasecurity.com/products' },
                { name: 'Bosch', logo: 'bosch', url: 'https://www.boschsecurity.com/xc/en/products/' },
                { name: 'Axis', logo: '/images/partners/axis.png', url: 'https://www.axis.com/products-and-solutions' },
                { name: 'Honeywell', logo: '/images/partners/honeywell.png', url: 'https://buildings.honeywell.com/us/en/products/security' },
                { name: 'Suprema', logo: '/images/partners/suprema.png', url: 'https://www.supremainc.com/en/hardware/product-list.asp' },
                { name: 'ZKTeco', logo: '/images/partners/zkteco.png', url: 'https://www.zkteco.com/en/product_list/' }
            ]
        }
    ];

    return (
        <section
            id="technology"
            className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
        >
            {/* Moving Nexus Background Synergy */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20">
                <img
                    src="/images/cyber-nexus.png"
                    alt=""
                    className="w-full h-full object-cover animate-subtle-zoom"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center justify-center gap-6 mb-20 animate-fade-up">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                            OUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                TECHNOLOGY
                            </span>
                        </h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-8" />
                    </div>
                </div>

                {/* FEATURED CYBERSECURITY SECTION - STAGGERED ANIMATION */}
                <div className="mb-24 relative p-12 rounded-[3.5rem] overflow-hidden border-2 border-primary/20 shadow-2xl">
                    {/* Dedicated Section Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/cyber-shield-bg.jpg"
                            alt=""
                            className="w-full h-full object-cover opacity-60 dark:opacity-80 animate-pulse-slow"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/80" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="p-3 bg-red-500/10 rounded-2xl">
                                <ShieldCheck className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                Cyber Security and IT Security
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {cyberSecurityPartners.map((partner, index) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-red-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(239,68,68,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(239,68,68,0.4)] hover:-translate-y-2 animate-fade-up min-h-[300px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="absolute top-6 right-6">
                                        {partner.tag && (
                                            <div className="flex items-center space-x-2 text-primary/80 mb-4 scale-95 origin-left">
                                                <div className="w-8 h-0.5 bg-primary/30 rounded-full" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{partner.tag}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`${partner.name === 'Darktrace' ? 'w-48 px-2' : 'w-20 p-4'} h-20 flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800`}>
                                        <img
                                            src={partner.logo.startsWith('/') || partner.logo.startsWith('http')
                                                ? partner.logo
                                                : `https://cdn.simpleicons.org/${partner.logo}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${partner.logo.startsWith('/') && partner.name !== 'Cisco' ? '' : 'dark:invert'}`}
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight text-xl md:text-2xl">{partner.name}</h4>
                                    <div className="absolute bottom-6 opacity-100 transition-all transform translate-y-0">
                                        <ArrowRight className="w-6 h-6 text-primary" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FEATURED ENTERPRISE NETWORKING SECTION */}
                <div className="mb-24 relative p-12 rounded-[3.5rem] overflow-hidden border-2 border-blue-500/20 shadow-2xl">
                    {/* Dedicated Section Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/digital-infrastructure-bg.jpg"
                            alt=""
                            className="w-full h-full object-cover opacity-60 dark:opacity-80 animate-pulse-slow"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/80" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Globe className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                Enterprise Networking
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {enterpriseNetworkingPartners.map((partner, index) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-2 animate-fade-up min-h-[300px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-20 p-4 h-20 flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800">
                                        <img
                                            src={partner.logo.startsWith('/') || partner.logo.startsWith('http')
                                                ? partner.logo
                                                : `https://cdn.simpleicons.org/${partner.logo}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${partner.name === 'Cisco' ? '' : 'dark:invert'}`}
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight text-xl md:text-2xl">{partner.name}</h4>
                                    <div className="absolute bottom-6 opacity-100 transition-all transform translate-y-0">
                                        <ArrowRight className="w-6 h-6 text-primary" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* OTHER CATEGORIES - GRID LAYOUT MATCHING CYBER SECURITY */}
                <div className="space-y-16">
                    {otherCategories.map((category, catIndex) => (
                        <div key={category.title} className="mb-24">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className={`p-3 bg-${category.color}-500/10 rounded-2xl`}>
                                    <category.icon className={`w-8 h-8 text-${category.color}-500`} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            {/* SERVICES PILLS */}
                            {'services' in category && category.services && (
                                <div className="flex flex-wrap gap-3 mb-10 pl-16">
                                    {category.services.map((service, sIndex) => (
                                        <span
                                            key={sIndex}
                                            className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border backdrop-blur-sm
                                                ${category.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' : ''}
                                            `}
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {category.partners.map((partner, pIndex) => (
                                    <Link
                                        key={partner.name}
                                        href={partner.url}
                                        target="_blank"
                                        className={`group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-700 shadow-xl hover:-translate-y-2 animate-fade-up min-h-[300px] text-center
                                            ${category.color === 'blue' ? 'hover:border-blue-500/50 shadow-blue-500/10 hover:shadow-blue-500/30' : ''}
                                            ${category.color === 'cyan' ? 'hover:border-cyan-500/50 shadow-cyan-500/10 hover:shadow-cyan-500/30' : ''}
                                            ${category.color === 'indigo' ? 'hover:border-indigo-500/50 shadow-indigo-500/10 hover:shadow-indigo-500/30' : ''}
                                            ${category.color === 'emerald' ? 'hover:border-emerald-500/50 shadow-emerald-500/10 hover:shadow-emerald-500/30' : ''}
                                        `}
                                        style={{ animationDelay: `${(catIndex * 200) + (pIndex * 150)}ms` }}
                                    >
                                        {/* LOGO CONTAINER - Matching Cyber Security style */}
                                        <div className="w-20 p-4 h-20 flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800">
                                            <img
                                                src={partner.logo.startsWith('/') || partner.logo.startsWith('http')
                                                    ? partner.logo
                                                    : `https://cdn.simpleicons.org/${partner.logo}/4755E9`}
                                                alt={partner.name}
                                                className={`w-full h-full object-contain ${partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
                                            />
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight text-xl md:text-2xl">{partner.name}</h4>
                                        <div className="absolute bottom-6 opacity-100 transition-all transform translate-y-0">
                                            <ArrowRight className="w-6 h-6 text-primary" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
