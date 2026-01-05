'use client';

import { Box, ShieldCheck, Cpu, HardDrive } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Products() {
    const products = [
        {
            icon: ShieldCheck,
            title: 'ITSEC Guard',
            description:
                'Our flagship enterprise security suite providing end-to-end encryption and real-time threat detection.',
        },
        {
            icon: Box,
            title: 'SmartRack Solutions',
            description:
                'Next-generation data center rack units with integrated cooling and intelligent power management.',
        },
        {
            icon: Cpu,
            title: 'EdgeLink Sensors',
            description:
                'Advanced IoT sensors for facility monitoring, environmental control, and asset tracking.',
        },
        {
            icon: HardDrive,
            title: 'Vvault Storage',
            description:
                'High-performance redundant storage solutions optimized for surveillance and enterprise data backup.',
        },
    ];

    return (
        <section
            id="products"
            className="py-20 md:py-32 bg-white dark:bg-slate-950"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Our Products
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Premium Technology Hardware & Software
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Proprietary solutions designed and engineered by ITSEC to power the infrastructure of tomorrow.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            className="text-center group hover:shadow-xl transition-all duration-300 hover:border-primary border-slate-100 dark:border-slate-800"
                        >
                            <CardHeader>
                                <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <product.icon className="w-10 h-10 text-primary" />
                                </div>
                                <CardTitle className="text-xl pt-4">{product.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
