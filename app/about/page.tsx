import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { About } from '@/components/sections/About';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
}
