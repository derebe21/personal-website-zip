import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Services } from '@/components/sections/Services';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Explore ITSEC Technology\'s full range of services: cybersecurity, digital infrastructure, data center solutions, cloud virtualization, integrated security systems, and unified communications.',
    alternates: { canonical: 'https://itsectechnology.com/services' },
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <Services variant="scroll" />
            </main>
            <Footer />
        </div>
    );
}
