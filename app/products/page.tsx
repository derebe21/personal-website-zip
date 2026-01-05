import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Products } from '@/components/sections/Products';

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <Products />
            </main>
            <Footer />
        </div>
    );
}
