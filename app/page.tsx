'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { StructuredCabling } from '@/components/sections/StructuredCabling';
import { Products } from '@/components/sections/Products';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <StructuredCabling />
      <Products />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
