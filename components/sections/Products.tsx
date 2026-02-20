'use client';

import { useState, useEffect } from 'react';
import { Globe, Cloud, Server, Terminal, Video, Zap, ArrowRight, ShieldCheck, Monitor, Database } from 'lucide-react';
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

    const cloudVirtualizationPartners = [
        { name: 'VMware', logo: '/images/partners/vmware-logo.svg', url: 'https://www.vmware.com/products.html' },
        { name: 'Proxmox', logo: 'proxmox', url: 'https://www.proxmox.com/en/proxmox-ve' },
        { name: 'Microsoft Hyper-V', logo: '/images/partners/hyperv-logo.svg', url: 'https://virtualization/hyper-v-on-windows/' },
        { name: 'Oracle Cloud', logo: '/images/partners/oracle-logo.svg', url: 'https://www.oracle.com/cloud/products.html' },
        { name: 'IBM Cloud', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
        { name: 'Red Hat Virtualization', logo: '/images/partners/redhat-logo.svg', url: 'https://all-products' },
        { name: 'Server Virtualization', icon: Server, isService: true, url: '/services' },
        { name: 'Desktop Virtualization (VDI)', icon: Monitor, isService: true, url: '/services' },
        { name: 'Cloud Virtualization', icon: Cloud, isService: true, url: '/services' },
        { name: 'Backup & Disaster Recovery', icon: Database, isService: true, url: '/services' }
    ];

    const serversDataCenterPartners = [
        { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/servers/index.htm' },
        { name: 'HPE', logo: '/images/partners/hpe-new.png', url: 'https://www.hpe.com/us/en/servers.html' },
        { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/us/en/servers-storage/' },
        { name: 'Huawei', logo: '/images/partners/huawei-servers.png', url: 'https://e.huawei.com/en/products/compute' },
        { name: 'IBM', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
        { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/data-storage/' },
        { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/en-us/products' },
        { name: 'Supermicro', logo: 'supermicro', url: 'https://www.supermicro.com/en/products' }
    ];

    const smartSecurityPartners = [
        { name: 'Hikvision', logo: '/images/partners/hikvision.png', url: 'https://www.hikvision.com/en/products/' },
        { name: 'Dahua', logo: '/images/partners/dahua.png', url: 'https://www. dahuasecurity.com/products' },
        { name: 'Bosch', logo: 'bosch', url: 'https://www.boschsecurity.com/xc/en/products/' },
        { name: 'Axis', logo: '/images/partners/axis.png', url: 'https://www.axis.com/products-and-solutions' },
        { name: 'Honeywell', logo: '/images/partners/honeywell.png', url: 'https://buildings.honeywell.com/us/en/products/security' },
        { name: 'Suprema', logo: '/images/partners/suprema.png', url: 'https://www.supremainc.com/en/hardware/product-list.asp' },
        { name: 'ZKTeco', logo: '/images/partners/zkteco.png', url: 'https://www.zkteco.com/en/product_list/' }
    ];


    return (
        <section
            id="technology"
            className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
        >
            {/* Premium Nexus Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/technology-nexus-final.png"
                    alt="Technology Network Background"
                    className="w-full h-full object-cover opacity-40 dark:opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/95" />
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

                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* User-Provided Nexus Background Identity */}
                    <div className="absolute inset-0 z-0 bg-blue-900/10">
                        <img
                            src="/images/cyber-shield-bg.jpg"
                            alt="Cyber Security Background"
                            className="w-full h-full object-cover opacity-85 dark:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-50/30 dark:from-slate-950/70 dark:via-slate-950/50 dark:to-blue-950/60" />
                    </div>

                    <div className="relative z-10">
                        {/* Big Colorful Shield Logo Header */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            {/* Giant Shield SVG Logo */}
                            <div className="relative flex-shrink-0 w-36 h-40 md:w-44 md:h-48 drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]">
                                <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#1D4ED8" />
                                            <stop offset="50%" stopColor="#3B82F6" />
                                            <stop offset="100%" stopColor="#06B6D4" />
                                        </linearGradient>
                                        <linearGradient id="shieldInner" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.1" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="blur" />
                                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                        </filter>
                                    </defs>
                                    {/* Outer glow shield */}
                                    <path d="M50 3 L95 22 L95 58 C95 82 72 102 50 112 C28 102 5 82 5 58 L5 22 Z" fill="url(#shieldGrad)" filter="url(#glow)" opacity="0.3" />
                                    {/* Main shield */}
                                    <path d="M50 6 L92 24 L92 58 C92 80 70 99 50 109 C30 99 8 80 8 58 L8 24 Z" fill="url(#shieldGrad)" />
                                    {/* Inner shine */}
                                    <path d="M50 6 L92 24 L92 58 C92 80 70 99 50 109 C30 99 8 80 8 58 L8 24 Z" fill="url(#shieldInner)" />
                                    {/* Shield border highlight */}
                                    <path d="M50 6 L92 24 L92 58 C92 80 70 99 50 109 C30 99 8 80 8 58 L8 24 Z" fill="none" stroke="rgba(147,210,255,0.6)" strokeWidth="1.5" />
                                    {/* Lock body */}
                                    <rect x="36" y="54" width="28" height="22" rx="4" fill="white" opacity="0.95" />
                                    {/* Lock shackle */}
                                    <path d="M42 54 L42 46 C42 40 58 40 58 46 L58 54" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.95" />
                                    {/* Keyhole */}
                                    <circle cx="50" cy="63" r="4" fill="#1D4ED8" />
                                    <rect x="48" y="63" width="4" height="6" rx="1" fill="#1D4ED8" />
                                    {/* Circuit dots */}
                                    <circle cx="20" cy="40" r="2" fill="white" opacity="0.4" />
                                    <circle cx="80" cy="40" r="2" fill="white" opacity="0.4" />
                                    <circle cx="15" cy="60" r="1.5" fill="cyan" opacity="0.5" />
                                    <circle cx="85" cy="60" r="1.5" fill="cyan" opacity="0.5" />
                                    <line x1="20" y1="40" x2="20" y2="50" stroke="white" strokeWidth="0.8" opacity="0.3" />
                                    <line x1="80" y1="40" x2="80" y2="50" stroke="white" strokeWidth="0.8" opacity="0.3" />
                                </svg>
                            </div>
                            {/* Title block */}
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-10 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />
                                    <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-blue-300 dark:via-blue-400 dark:to-cyan-300 uppercase tracking-tight leading-none">
                                        Cyber Security<br />& IT Security
                                    </h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg ml-5">Advanced protection for your digital assets</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {cyberSecurityPartners.map((partner: any, index: number) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-2 animate-fade-up min-h-[300px] text-center"
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
                                            src={(partner as any).logo && ((partner as any).logo.startsWith('/') || (partner as any).logo.startsWith('http'))
                                                ? (partner as any).logo
                                                : `https://cdn.simpleicons.org/${(partner as any).logo || ''}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${(partner as any).logo && (partner as any).logo.startsWith('/') && partner.name !== 'Cisco' ? '' : 'dark:invert'}`}
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
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* High-Visibility Blue Nexus Identity */}
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/technology-nexus-final.png"
                            alt="Networking Background"
                            className="w-full h-full object-cover opacity-40 dark:opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-blue-50/90 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-blue-950/95" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Globe className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                Enterprise Networking
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {enterpriseNetworkingPartners.map((partner: any, index: number) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-2 animate-fade-up min-h-[300px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-20 p-4 h-20 flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800">
                                        <img
                                            src={(partner as any).logo && ((partner as any).logo.startsWith('/') || (partner as any).logo.startsWith('http'))
                                                ? (partner as any).logo
                                                : `https://cdn.simpleicons.org/${(partner as any).logo || ''}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${(partner as any).name === 'Cisco' ? '' : 'dark:invert'}`}
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

                {/* FEATURED CLOUD & VIRTUALIZATION SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* High-Visibility Blue Nexus Identity */}
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/technology-nexus-final.png"
                            alt="Cloud Background"
                            className="w-full h-full object-cover opacity-40 dark:opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-blue-50/90 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-blue-950/95" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Cloud className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                Cloud & Virtualization
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {cloudVirtualizationPartners.map((partner: any, index: number) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-2 animate-fade-up min-h-[300px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-20 p-4 h-20 flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800">
                                        {partner.isService && partner.icon ? (
                                            <div className="w-10 h-10 text-blue-500">
                                                {(() => {
                                                    const IconComp = partner.icon;
                                                    return <IconComp className="w-full h-full" />;
                                                })()}
                                            </div>
                                        ) : (
                                            <img
                                                src={partner.logo && (partner.logo.startsWith('/') || partner.logo.startsWith('http'))
                                                    ? partner.logo
                                                    : `https://cdn.simpleicons.org/${partner.logo || ''}/4755E9`}
                                                alt={partner.name}
                                                className={`w-full h-full object-contain ${partner.logo && partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
                                            />
                                        )}
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

                {/* FEATURED SERVERS & DATA CENTER SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* High-Visibility Blue Nexus Identity */}
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/technology-nexus-final.png"
                            alt="Servers Background"
                            className="w-full h-full object-cover opacity-40 dark:opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-blue-50/90 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-blue-950/95" />
                    </div>
                    {/* Background Subtle Gradient Overlay */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />

                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Server className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                Servers & Data Center
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                            {serversDataCenterPartners.map((partner: any, index: number) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-2 animate-fade-up min-h-[300px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-20 p-4 h-20 flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800">
                                        <img
                                            src={partner.logo && (partner.logo.startsWith('/') || partner.logo.startsWith('http'))
                                                ? partner.logo
                                                : `https://cdn.simpleicons.org/${partner.logo || ''}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${partner.logo && partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
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

                {/* FEATURED SMART & PHYSICAL SECURITY SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* High-Visibility Blue Nexus Identity */}
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/technology-nexus-final.png"
                            alt="Physical Security Background"
                            className="w-full h-full object-cover opacity-40 dark:opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-blue-50/90 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-blue-950/95" />
                    </div>
                    {/* Background Subtle Gradient Overlay */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />

                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Video className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                Smart & Physical Security
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                            {smartSecurityPartners.map((partner: any, index: number) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-2 animate-fade-up min-h-[300px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-20 p-4 h-20 flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800">
                                        <img
                                            src={partner.logo && (partner.logo.startsWith('/') || partner.logo.startsWith('http'))
                                                ? partner.logo
                                                : `https://cdn.simpleicons.org/${partner.logo || ''}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${partner.logo && partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
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

            </div>
        </section>
    );
}
