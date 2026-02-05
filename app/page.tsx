'use client';

import { Hero } from '@/components/sections/Hero';
import { ServiceFocus } from '@/components/sections/ServiceFocus';
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
      <ServiceFocus />
      <About />


      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
