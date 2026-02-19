'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/lib/services-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', 'label': 'Instagram' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      {/* Background Image with optimized visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-bg.png"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="https://res.cloudinary.com/dlc8bgysp/image/upload/e_make_transparent/v1767612094/logo_fn47rb.png"
                alt="TSEC TECHNOLOGY Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="font-bold text-xl text-white">
                TSEC TECHNOLOGY
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md text-slate-400">
              TSEC Technology PLC delivers secure, scalable, and innovative technology solutions that empower enterprises worldwide. We help organizations optimize operations, strengthen technology trust, and achieve sustainable growth.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-3">
              {servicesData.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Location</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              123 Business Park, Tech District<br />
              Addis Ababa, Ethiopia
            </p>
            <p className="text-sm text-slate-400">
              info@tsectechnology.com<br />
              +251 911 407 439 / 095 519 0019
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © {currentYear} TSEC TECHNOLOGY. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-slate-500">
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
