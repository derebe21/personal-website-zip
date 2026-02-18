import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Products } from '@/components/sections/Products';
import { StructuredCabling } from '@/components/sections/StructuredCabling';
import { FiberOpticSplicing } from '@/components/sections/FiberOpticSplicing';

export default function TechnologyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <Products />
                <StructuredCabling />
                <FiberOpticSplicing />
            </main>
            <Footer />
        </div>
    );
}
