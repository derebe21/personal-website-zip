import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Services } from '@/components/sections/Services';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <Services />
            </main>
            <Footer />
        </div>
    );
}
