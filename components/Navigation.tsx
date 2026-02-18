'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Technology', href: '/technology' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-blue-600 backdrop-blur-sm border-b border-blue-500 shadow-lg'
        : 'bg-blue-600/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 md:space-x-3 group"
          >
            <img
              src="https://res.cloudinary.com/dlc8bgysp/image/upload/e_make_transparent/v1767612094/logo_fn47rb.png"
              alt="ITSEC TECHNOLOGY Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform brightness-0 invert"
            />
            <span className="font-black text-sm md:text-xl text-white tracking-widest whitespace-nowrap">
              ITSEC TECHNOLOGY
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isActive(link.href)
                  ? 'text-white font-bold'
                  : 'text-blue-100 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            ))}

          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Backdrop */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-600 border-t border-blue-500 shadow-2xl animate-fade-down">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 text-lg font-black uppercase tracking-widest rounded-xl transition-all ${isActive(link.href)
                  ? 'text-blue-600 bg-white shadow-xl'
                  : 'text-blue-50 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}
