import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact ITSEC Technology PLC — reach us by phone (+251 911 407 439), WhatsApp, or email. Visit us at Kirkos Church, Addis Ababa, Ethiopia.',
    alternates: { canonical: 'https://itsectechnology.com/contact' },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
