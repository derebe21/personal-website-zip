'use client';

import { Hero } from '@/components/sections/Hero';
import { ServiceFocus } from '@/components/sections/ServiceFocus';
import { Services } from '@/components/sections/Services';
import { EnterpriseSoftware } from '@/components/sections/EnterpriseSoftware';
import { EnterpriseNetworking } from '@/components/sections/EnterpriseNetworking';
import { CloudVirtualization } from '@/components/sections/CloudVirtualization';
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
      <ServiceFocus />
      <Services />
      <EnterpriseSoftware />
      <EnterpriseNetworking />
      <CloudVirtualization />
      <Products />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
