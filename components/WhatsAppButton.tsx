'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/251911407439?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20ITSEC%20Technology%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        >
            {/* Tooltip */}
            <span
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white text-sm font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap translate-x-2 group-hover:translate-x-0"
            >
                Chat on WhatsApp
            </span>

            {/* Button */}
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 hover:shadow-[0_8px_36px_rgba(37,211,102,0.6)]">
                {/* Pulse rings */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-20" />

                {/* WhatsApp SVG Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-white relative z-10"
                >
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.826.737 5.48 2.027 7.793L0 32l8.455-2.012A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.788-1.857l-.486-.29-5.017 1.194 1.218-4.887-.316-.502A13.29 13.29 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.293-9.926c-.4-.2-2.368-1.168-2.735-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.267 1.568-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.214-1.982-1.188-1.059-1.99-2.368-2.223-2.768-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.168-1.233-2.968-.325-.78-.655-.674-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.335 0 1.967 1.433 3.868 1.633 4.135.2.267 2.822 4.308 6.836 6.038.955.412 1.7.657 2.28.842.958.305 1.83.262 2.52.159.769-.115 2.368-.968 2.702-1.902.333-.933.333-1.733.233-1.902-.1-.167-.367-.267-.767-.467z" />
                </svg>
            </div>
        </a>
    );
}
