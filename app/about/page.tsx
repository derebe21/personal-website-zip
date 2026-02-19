import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { About } from '@/components/sections/About';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 uppercase italic tracking-tight">
                        ITSEC Technology
                    </h1>
                </div>
                <About />
            </main>
            <Footer />
        </div>
    );
}
