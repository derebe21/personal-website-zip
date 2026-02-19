import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { About } from '@/components/sections/About';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 uppercase italic tracking-tight">
                    ITSEC Technology
                </h1>
            </main>
            <Footer />
        </div>
    );
}
