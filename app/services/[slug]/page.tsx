import { servicesData } from '@/lib/services-data';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = servicesData.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="relative min-h-screen bg-background text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            {/* Signature Nexus Background Overlay */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
                <img
                    src="/images/technology-nexus-final.png"
                    alt="Nexus Texture"
                    className="w-full h-full object-cover"
                />
            </div>

            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 dark:text-white font-semibold">{service.title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left Column: Content */}
                        <div className="lg:col-span-2 space-y-10">
                            {service.slug === 'smart-connected-systems' ? (
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                                            {service.title}
                                        </h1>
                                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                            Empowering your enterprise with intelligent, interconnected solutions.
                                        </p>
                                    </div>

                                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                                        <img
                                            src={service.bannerImage}
                                            alt="Smart Systems Visualization"
                                            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                    </div>

                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Smart Solutions</h2>
                                        <Accordion type="single" collapsible className="w-full space-y-4">
                                            {service.features.map((feature, i) => (
                                                <AccordionItem
                                                    key={i}
                                                    value={`item-${i}`}
                                                    className="border rounded-2xl px-6 bg-white dark:bg-slate-900 shadow-sm border-slate-200 dark:border-slate-800"
                                                >
                                                    <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                                                        {feature}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-slate-600 dark:text-slate-400 pb-6">
                                                        Advanced, scalable {feature.toLowerCase()} tailored for your specific business requirements and operational excellence.
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>

                                </div>
                            ) : (
                                <>
                                    <div className="space-y-6">
                                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                                            {service.title}
                                        </h1>
                                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light italic">
                                            "{service.description}"
                                        </p>
                                    </div>

                                    <div className="prose prose-slate dark:prose-invert max-w-none">
                                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                            {service.longDescription}
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <Card className="bg-slate-50 dark:bg-slate-900/50 border-none shadow-none p-6">
                                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                                <CheckCircle2 className="w-6 h-6 text-primary mr-2" />
                                                Key Features
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                                                        <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>

                                        <Card className="bg-blue-500/5 border border-blue-500/10 p-6">
                                            <h3 className="text-xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                                                <CheckCircle2 className="w-6 h-6 mr-2" />
                                                Core Benefits
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 font-medium">
                                                        <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Right Column: CTA & Sidebar */}
                        <div className="space-y-8">
                            <Card className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-900 overflow-hidden">
                                <div className="space-y-6 text-center lg:text-left">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Ready to secure your business?</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                                        Our experts are ready to help you implement {service.title} tailored to your organization’s needs.
                                    </p>
                                    <Link href="/contact" className="block">
                                        <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                                            Get a Free Quote
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </Card>

                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 space-y-6">
                                <h4 className="text-lg font-bold">Other Services</h4>
                                <div className="space-y-3">
                                    {servicesData
                                        .filter((s) => s.slug !== service.slug)
                                        .slice(0, 4)
                                        .map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/services/${s.slug}`}
                                                className="flex items-center p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all group"
                                            >
                                                <span className="text-sm font-medium">{s.title}</span>
                                            </Link>
                                        ))}
                                </div>
                                <Link href="/services" className="block text-center text-sm font-bold text-primary hover:underline">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
