import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/sections/Contact';

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
