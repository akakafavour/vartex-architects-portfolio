import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
    variable: "--font-ibm-plex-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: {
        default: "Vartex Architects | Architecture, Interior Design & 3D Visualization",
        template: "%s | Vartex Architects"
    },
    description: "Vartex Architects is a Lagos and Nigeria-based architecture and interior design studio creating considered residential, commercial, and hospitality spaces from concept through execution.",
    metadataBase: new URL("https://vartexarchitects.com"),
    keywords: ["Vartex Architects", "architecture studio Nigeria", "Lagos architects", "Enugu architects", "residential architecture Nigeria", "interior design Lagos", "commercial architecture Nigeria", "architectural visualization", "sustainable architecture Nigeria"],
    authors: [{ name: "Vartex Studio" }],
    creator: "Vartex Studio",
    publisher: "Vartex Studio",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Vartex Architects | Architecture, Interior Design & 3D Visualization",
        description: "Specialized in premium Architecture, Interior Design, and 3D Visualization. Vartex Architects provides photorealistic rendering and sustainable planning solutions.",
        url: 'https://vartexarchitects.com',
        siteName: 'Vartex Architects',
        locale: 'en_NG',
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vartex Architects architecture and interior design studio",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vartex Architects | Architecture, Interior Design & 3D Visualization",
        description: "Specialized in premium Architecture, Interior Design, and 3D Visualization. Vartex Architects provides photorealistic rendering and sustainable planning solutions.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vartex Architects",
    "url": "https://vartexarchitects.com",
    "logo": "https://vartexarchitects.com/brand-logo-dark.png",
    "sameAs": [
        "https://www.instagram.com/vartex_architects",
        "https://x.com/VartexArchitect",
        "https://www.threads.net/@vartex_architects",
        "https://www.linkedin.com/company/vartexarchitects/",
        "https://www.pinterest.com/vartex_architects",
        "https://www.behance.net/vartex_architects",
        "https://www.facebook.com/vartexarchitects",
        "https://www.youtube.com/@vartex_architects",
        "https://www.tiktok.com/@vartex_architects"
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+2347032697179",
            "contactType": "telephone",
            "email": "info@vartexarchitects.com"
        },
        {
            "@type": "ContactPoint",
            "telephone": "+2347049001510",
            "contactType": "WhatsApp",
            "url": "https://wa.me/message/WCAUBNIBDXOSF1"
        }
    ]
}

const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalBusiness",
    "name": "Vartex Architects",
    "image": "https://vartexarchitects.com/og-image.jpg",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressRegion": "Lagos State",
        "addressCountry": "Nigeria"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.5244,
        "longitude": 3.3792
    },
    "url": "https://vartexarchitects.com",
    "telephone": "+2347032697179",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+2347049001510",
        "contactType": "WhatsApp",
        "url": "https://wa.me/message/WCAUBNIBDXOSF1"
    },
    "areaServed": ["Lagos", "Enugu", "Nigeria"],
    "serviceType": ["Architectural Design", "Interior Design", "3D Visualization"],
    "priceRange": "$$"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
                />
            </head>
            <body className={`${inter.variable} ${ibmPlexMono.variable} antialiased bg-white dark:bg-[#191919] text-[#292929] dark:text-white min-h-screen relative`}>
                {/* Corner Axis Marks */}
                <div className="fixed top-5 left-5 w-5 h-5 border-t border-l border-gray-300 dark:border-gray-700 opacity-40 z-50 pointer-events-none"></div>
                <div className="fixed top-5 right-5 w-5 h-5 border-t border-r border-gray-300 dark:border-gray-700 opacity-40 z-50 pointer-events-none"></div>
                <div className="fixed bottom-5 left-5 w-5 h-5 border-b border-l border-gray-300 dark:border-gray-700 opacity-40 z-50 pointer-events-none"></div>
                <div className="fixed bottom-5 right-5 w-5 h-5 border-b border-r border-gray-300 dark:border-gray-700 opacity-40 z-50 pointer-events-none"></div>


                <SmoothScroll>
                    <ScrollToTop />
                    <div className="flex flex-col min-h-screen">
                        {children}
                    </div>
                </SmoothScroll>

                {/* Google Analytics (GA4) Tracking */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-KGYN2FS582"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-KGYN2FS582');
                    `}
                </Script>
            </body>
        </html>
    );
}
