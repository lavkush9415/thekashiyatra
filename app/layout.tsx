import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgressBar, WhatsAppButton } from "@/components/ui/ScrollProgressBar";
import { TrustBar } from "@/components/ui/TrustBar";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { GoogleAnalytics } from "@next/third-parties/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thekashiyatra.com"),
  title: {
    default: "TheKashiYatra — Experience the Soul of Kashi | Varanasi Travel & Pilgrimage",
    template: "%s | TheKashiYatra",
  },
  description:
    "Book premium hotels, sacred boat rides, temple tours, and spiritual experiences in Varanasi (Kashi). Your trusted pilgrimage partner for Ganga Aarti, Kashi Vishwanath darshan, and customized tour packages.",
  keywords: [
    "Varanasi travel",
    "Kashi pilgrimage",
    "Ganga Aarti booking",
    "Kashi Vishwanath darshan",
    "Varanasi hotels",
    "boat ride Ganga",
    "Banaras tour package",
    "spiritual tourism India",
    "Sarnath tour",
    "sunrise boat ride Varanasi",
  ],
  authors: [{ name: "TheKashiYatra", url: "https://thekashiyatra.com" }],
  creator: "TheKashiYatra",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thekashiyatra.com",
    siteName: "TheKashiYatra",
    title: "TheKashiYatra — Experience the Soul of Kashi",
    description:
      "Premium travel and pilgrimage booking for Varanasi. Hotels, Boat Rides, Temple Tours, Packages & more.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "TheKashiYatra — Experience the Soul of Kashi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheKashiYatra — Experience the Soul of Kashi",
    description: "Premium Varanasi travel & pilgrimage booking. Hotels, Boats, Tours & Experiences.",
    images: ["/og-image.jpg"],
    creator: "@thekashiyatra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "TheKashiYatra",
  description: "Premium travel and pilgrimage booking service for Varanasi, India.",
  url: "https://thekashiyatra.com",
  telephone: "+91-9838043996",
  email: "info@thekashiyatra.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B3/260 Shivala, Varanasi, Uttar Pradesh 221001",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.3106,
    longitude: 83.0094,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "06:00",
    closes: "22:00",
  },
  sameAs: [
    "https://facebook.com/thekashiyatra",
    "https://instagram.com/thekashiyatra",
    "https://twitter.com/thekashiyatra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  data-scroll-behavior="smooth"
>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || theme === 'light') {
                    document.documentElement.classList.add(theme);
                    document.documentElement.style.colorScheme = theme;
                  } else {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var sys = prefersDark ? 'dark' : 'light';
                    document.documentElement.classList.add(sys);
                    document.documentElement.style.colorScheme = sys;
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ToastProvider>
            <LoadingScreen />
            <ScrollProgressBar />
            <Navbar />
            <main>{children}</main>
            <TrustBar />
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
          </ToastProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-W78FQGESWV" />
    </html>
  );
}
