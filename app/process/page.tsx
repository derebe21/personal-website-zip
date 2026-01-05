import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Process } from '@/components/sections/Process';

export default function ProcessPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <Process />
            </main>
            <Footer />
        </div>
    );
}
