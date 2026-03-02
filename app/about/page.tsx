import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { About } from '@/components/sections/About';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about ITSEC Technology PLC — our mission, vision, and commitment to delivering world-class cybersecurity and IT solutions in Ethiopia.',
    alternates: { canonical: 'https://itsectechnology.com/about' },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-20">
                <About />
            </div>
            <Footer />
        </main>
    );
}
