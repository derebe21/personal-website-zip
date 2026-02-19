'use client';

import { Hero } from '@/components/sections/Hero';
import { ServiceFocus } from '@/components/sections/ServiceFocus';
import { Services } from '@/components/sections/Services';
import { StructuredCabling } from '@/components/sections/StructuredCabling';
import { FiberOpticSplicing } from '@/components/sections/FiberOpticSplicing';
import { Products } from '@/components/sections/Products';
import { About } from '@/components/sections/About';
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
      <ServiceFocus />
      <Services />
      <StructuredCabling />
      <FiberOpticSplicing />
      <Products />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
