'use client';

import { useState, useEffect } from 'react';
import { Globe, Cloud, Server, Terminal, Video, Zap, ArrowRight, ShieldCheck, Monitor, Database } from 'lucide-react';
import Link from 'next/link';

export function Products() {
    const cyberSecurityPartners = [
        {
            name: 'Cisco',
            logo: '/images/partners/cisco-logo.svg',
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
            logo: '/images/partners/sophos-logo.svg',
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
            logo: '/images/partners/crowdstrike-logo.svg',
            url: 'https://www.crowdstrike.com/falcon-platform/',
            tag: '',
            brief: ''
        },
        {
            name: 'Darktrace',
            logo: '/images/partners/darktrace-logo.svg',
            url: 'https://www.darktrace.com/en/products/',
            tag: '',
            brief: ''
        },
        {
            name: 'Imperva',
            logo: 'imperva',
            url: 'https://www.imperva.com/products/',
            tag: '',
            brief: ''
        }
    ];

    const digitalInfrastructurePartners = [
        { name: 'Cisco', logo: '/images/partners/cisco-logo.svg', url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/index.html' },
        { name: 'Huawei', logo: '/images/partners/huawei-logo.svg', url: 'https://e.huawei.com/en/products/enterprise-networking' },
        { name: 'HPE Aruba', logo: '/images/partners/hpe-logo.svg', url: 'https://www.arubanetworks.com/products/' },
        { name: 'Juniper Networks', logo: '/images/partners/juniper-logo.svg', url: 'https://www.juniper.net/us/en/products.html' },
        { name: 'Ericsson', logo: 'ericsson', url: 'https://www.ericsson.com/en/portfolio' },
        { name: 'F5 Networks', logo: 'f5', url: 'https://www.f5.com/products' }
    ];

    const cloudVirtualizationPartners = [
        { name: 'VMware', logo: '/images/partners/vmware-logo.svg', url: 'https://www.vmware.com/products.html' },
        { name: 'Proxmox', logo: 'proxmox', url: 'https://www.proxmox.com/en/proxmox-ve' },
        { name: 'Microsoft Hyper-V', logo: '/images/partners/hyperv-logo.svg', url: 'https://virtualization/hyper-v-on-windows/' },
        { name: 'Oracle Cloud', logo: '/images/partners/oracle-logo.svg', url: 'https://www.oracle.com/cloud/products.html' },
        { name: 'IBM Cloud', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
        { name: 'Red Hat Virtualization', logo: '/images/partners/redhat-logo.svg', url: 'https://all-products' }
    ];

    const dataCenterPartners = [
        { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/servers/index.htm' },
        { name: 'HPE', logo: '/images/partners/hpe-new.png', url: 'https://www.hpe.com/us/en/servers.html' },
        { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/us/en/servers-storage/' },
        { name: 'Huawei', logo: '/images/partners/huawei-servers.png', url: 'https://e.huawei.com/en/products/compute' },
        { name: 'IBM', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
        { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/data-storage/' },
        { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/en-us/products' },
        { name: 'Supermicro', logo: 'supermicro', url: 'https://www.supermicro.com/en/products' }
    ];

    const unifiedCommunicationsPartners = [
        { name: 'Cisco Webex', logo: '/images/partners/cisco-logo.svg', url: 'https://www.webex.com/' },
        { name: 'Microsoft Teams', logo: 'microsoftteams', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software' },
        { name: 'Zoom', logo: 'zoom', url: 'https://zoom.us/' },
        { name: 'Avaya', logo: 'avaya', url: 'https://www.avaya.com/en/' },
        { name: 'Poly', logo: 'poly', url: 'https://www.poly.com/us/en' },
        { name: 'Yealink', logo: 'yealink', url: 'https://www.yealink.com/en' }
    ];

    const integratedSecurityPartners = [
        { name: 'Hikvision', logo: '/images/partners/hikvision.png', url: 'https://www.hikvision.com/en/products/' },
        { name: 'Dahua', logo: '/images/partners/dahua.png', url: 'https://www. dahuasecurity.com/products' },
        { name: 'Bosch', logo: 'bosch', url: 'https://www.boschsecurity.com/xc/en/products/' },
        { name: 'Axis', logo: '/images/partners/axis.png', url: 'https://www.axis.com/products-and-solutions' },
        { name: 'Honeywell', logo: '/images/partners/honeywell.png', url: 'https://buildings.honeywell.com/us/en/products/security' },
        { name: 'Milestone', logo: 'milestone', url: 'https://www.milestonesys.com/solutions/platform/video-management-software/' },
        { name: 'Genetec', logo: 'genetec', url: 'https://www.genetec.com/solutions/all-products' },
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
                <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/95" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-8">
                        OUR <span className="text-primary">TECHNOLOGY</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full" />
                </div>

                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* User-Provided Nexus Background Identity */}
                    <div className="absolute inset-0 z-0 bg-blue-900/10">
                        <img
                            src="/images/cyber-security-world-bg.jpg"
                            alt="Cyber Security Background"
                            className="w-full h-full object-cover opacity-85 dark:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-50/30 dark:from-slate-950/70 dark:via-slate-950/50 dark:to-blue-950/60" />
                    </div>

                    <div className="relative z-10">
                        {/* Big Colorful Shield Logo Header */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            {/* Giant Shield SVG Logo - matching uploaded reference */}
                            <div className="relative flex-shrink-0 w-44 h-48 md:w-56 md:h-64 drop-shadow-[0_0_50px_rgba(59,130,246,0.9)]">
                                <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <defs>
                                        {/* Outer light blue rim */}
                                        <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#93C5FD" />
                                            <stop offset="100%" stopColor="#3B82F6" />
                                        </linearGradient>
                                        {/* Dark blue inner fill */}
                                        <linearGradient id="innerGrad" x1="10%" y1="0%" x2="90%" y2="100%">
                                            <stop offset="0%" stopColor="#1E3A8A" />
                                            <stop offset="60%" stopColor="#1D4ED8" />
                                            <stop offset="100%" stopColor="#2563EB" />
                                        </linearGradient>
                                        {/* Silver shackle */}
                                        <linearGradient id="shackleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#D1D5DB" />
                                            <stop offset="50%" stopColor="#9CA3AF" />
                                            <stop offset="100%" stopColor="#6B7280" />
                                        </linearGradient>
                                        {/* White lock body */}
                                        <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#FFFFFF" />
                                            <stop offset="100%" stopColor="#E5E7EB" />
                                        </linearGradient>
                                        {/* Glow filter */}
                                        <filter id="outerGlow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="6" result="blur" />
                                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                        </filter>
                                        <filter id="lockShadow" x="-10%" y="-10%" width="120%" height="130%">
                                            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#00000033" />
                                        </filter>
                                    </defs>

                                    {/* Outer light blue shield rim (glow) */}
                                    <path d="M100 8 L185 42 L185 112 C185 162 142 196 100 212 C58 196 15 162 15 112 L15 42 Z"
                                        fill="url(#rimGrad)" filter="url(#outerGlow)" opacity="0.9" />

                                    {/* Inner dark blue shield body */}
                                    <path d="M100 20 L172 50 L172 112 C172 156 134 186 100 200 C66 186 28 156 28 112 L28 50 Z"
                                        fill="url(#innerGrad)" />

                                    {/* Thin light blue inner border line */}
                                    <path d="M100 26 L166 54 L166 112 C166 152 130 181 100 194 C70 181 34 152 34 112 L34 54 Z"
                                        fill="none" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />

                                    {/* Padlock shackle (silver arc) */}
                                    <path d="M78 105 L78 82 C78 62 122 62 122 82 L122 105"
                                        stroke="url(#shackleGrad)" strokeWidth="16" strokeLinecap="round" fill="none" filter="url(#lockShadow)" />

                                    {/* Padlock body (white rounded rect) */}
                                    <rect x="64" y="102" width="72" height="58" rx="10" fill="url(#lockGrad)" filter="url(#lockShadow)" />

                                    {/* Keyhole circle (pink/red) */}
                                    <circle cx="100" cy="125" r="11" fill="#E91E7A" />
                                    {/* Keyhole slot */}
                                    <path d="M95 131 L95 147 L105 147 L105 131" fill="#E91E7A" />

                                    {/* Subtle shine on lock body */}
                                    <rect x="68" y="106" width="28" height="8" rx="4" fill="white" opacity="0.4" />
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
                                    <div className={`${partner.name === 'Darktrace' ? 'w-48 px-2 h-20' :
                                        'w-24 h-24 p-4'
                                        } flex items-center justify-center rounded-3xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-6 bg-slate-50 dark:bg-slate-800`}>
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

                        {/* Security Solutions CTA */}
                        <div className="mt-16 text-center animate-fade-up">
                            <Link
                                href="/services/cyber-risk-protection"
                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105 group"
                            >
                                <span className="text-lg">Click to view our Security Devices and Security Software solutions.</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FEATURED DIGITAL INFRASTRUCTURE SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* Digital Infrastructure Background */}
                    <div className="absolute inset-0 z-0 bg-blue-900/10">
                        <img
                            src="/images/digital-infra-neon-bg.jpg"
                            alt="Digital Infrastructure Background"
                            className="w-full h-full object-cover opacity-75 dark:opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-blue-50/40 dark:from-slate-950/75 dark:via-slate-950/60 dark:to-blue-950/70" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Globe className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                    Digital Infrastructure
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">Robust networking and hardware foundations</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {digitalInfrastructurePartners.map((partner: any, index: number) => (
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

                        {/* Digital Infrastructure CTA */}
                        <div className="mt-16 text-center animate-fade-up">
                            <Link
                                href="/services/digital-infrastructure"
                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105 group"
                            >
                                <span className="text-lg">View our Network and Hardware Infrastructure solutions.</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FEATURED CLOUD & VIRTUALIZATION SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* High-Visibility Blue Nexus Identity */}
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/cloud-virtualization-tech-bg.jpg"
                            alt="Cloud Background"
                            className="w-full h-full object-cover opacity-85 dark:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-50/30 dark:from-slate-950/70 dark:via-slate-950/50 dark:to-blue-950/60" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Cloud className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                    Cloud & Virtualization Services
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">Scalable cloud power and seamless virtualization</p>
                            </div>
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

                        {/* Cloud & Virtualization CTA */}
                        <div className="mt-16 text-center animate-fade-up">
                            <Link
                                href="/services/cloud-virtualization"
                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105 group"
                            >
                                <span className="text-lg">Explore our Cloud and Virtualization services.</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FEATURED SERVERS & DATA CENTER SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* Data Center Plexus Background */}
                    <div className="absolute inset-0 z-0 bg-blue-900/10">
                        <img
                            src="/images/datacenter-server-racks-bg.jpg"
                            alt="Data Center Background"
                            className="w-full h-full object-cover opacity-80 dark:opacity-65"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-white/25 to-blue-50/35 dark:from-slate-950/75 dark:via-slate-950/60 dark:to-blue-950/70" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Server className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                    Data Center Solutions
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">High-performance servers and resilient IT facilities</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                            {dataCenterPartners.map((partner: any, index: number) => (
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

                        {/* Data Center CTA */}
                        <div className="mt-16 text-center animate-fade-up">
                            <Link
                                href="/services/data-center"
                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105 group"
                            >
                                <span className="text-lg">View our Servers and Data Center infrastructure solutions.</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FEATURED UNIFIED COMMUNICATIONS SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/unified-communications-new.png"
                            alt="Unified Communications Background"
                            className="w-full h-full object-cover opacity-85 dark:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-50/30 dark:from-slate-950/70 dark:via-slate-950/50 dark:to-blue-950/60" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Monitor className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                    Unified Communications
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">Voice, video, and collaboration for the modern enterprise</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {unifiedCommunicationsPartners.map((partner: any, index: number) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-2 animate-fade-up min-h-[220px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-16 p-3 h-16 flex items-center justify-center rounded-2xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-4 bg-slate-50 dark:bg-slate-800">
                                        <img
                                            src={partner.logo && (partner.logo.startsWith('/') || partner.logo.startsWith('http'))
                                                ? partner.logo
                                                : `https://cdn.simpleicons.org/${partner.logo || ''}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${partner.logo && partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight text-lg md:text-xl">{partner.name}</h4>
                                </Link>
                            ))}
                        </div>

                        {/* UC CTA */}
                        <div className="mt-16 text-center animate-fade-up">
                            <Link
                                href="/services/unified-communications"
                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105 group"
                            >
                                <span className="text-lg">View our Voice and Collaboration solutions.</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FEATURED UNIFIED COMMUNICATIONS SECTION */}
                <div id="unified-communications-partners" className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/unified-communications-new.png"
                            alt="Unified Communications Background"
                            className="w-full h-full object-cover opacity-85 dark:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-50/30 dark:from-slate-950/70 dark:via-slate-950/50 dark:to-blue-950/60" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Monitor className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                    Unified Communications
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">Voice, video, and collaboration for the modern enterprise</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {unifiedCommunicationsPartners.map((partner: any, index: number) => (
                                <Link
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-2 animate-fade-up min-h-[220px] text-center"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-16 p-3 h-16 flex items-center justify-center rounded-2xl group-hover:shadow-inner transition-all transform group-hover:scale-110 mb-4 bg-slate-50 dark:bg-slate-800">
                                        <img
                                            src={partner.logo && (partner.logo.startsWith('/') || partner.logo.startsWith('http'))
                                                ? partner.logo
                                                : `https://cdn.simpleicons.org/${partner.logo || ''}/4755E9`}
                                            alt={partner.name}
                                            className={`w-full h-full object-contain ${partner.logo && partner.logo.startsWith('/') ? '' : 'dark:invert'}`}
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight text-lg md:text-xl">{partner.name}</h4>
                                </Link>
                            ))}
                        </div>

                        {/* UC CTA */}
                        <div className="mt-16 text-center animate-fade-up">
                            <Link
                                href="/services/unified-communications.html"
                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105 group"
                            >
                                <span className="text-lg">View our Voice and Collaboration solutions.</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FEATURED SMART & PHYSICAL SECURITY SECTION */}
                <div className="mb-24 relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-2xl">
                    {/* Integrated Security Nexus Background */}
                    <div className="absolute inset-0 z-0 bg-blue-900/5">
                        <img
                            src="/images/integrated-security-shield-bg.jpg"
                            alt="Integrated Security Background"
                            className="w-full h-full object-cover opacity-85 dark:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-50/30 dark:from-slate-950/70 dark:via-slate-950/50 dark:to-blue-950/60" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Video className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 uppercase tracking-tight">
                                    Integrated Security Systems
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">Smart surveillance and physical security solutions</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                            {integratedSecurityPartners.map((partner: any, index: number) => (
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

                        {/* Integrated Security CTA */}
                        <div className="mt-16 text-center animate-fade-up">
                            <Link
                                href="/services/integrated-security"
                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold transition-all hover:scale-105 group"
                            >
                                <span className="text-lg">View our Integrated Security and Smart Automation solutions.</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div >
        </section >
    );
}
