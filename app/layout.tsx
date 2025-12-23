import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Dr. Rohan Yashraj Gupta, FIA, FIAI | Actuary & Data Scientist",
  description:
    "Explore the actuarial journey, projects, and insights of Dr. Rohan Yashraj Gupta, FIA, FIAI. He specializes in Data Science and General Insurance.",
  keywords: [
    "Actuary",
    "Data Scientist",
    "General Insurance",
    "Machine Learning",
    "FIA",
    "FIAI",
    "Rohan Gupta",
    "Dr. Rohan Yashraj Gupta",
    "Actuarial Science",
    "Portfolio",
  ],
  authors: [
    {
      name: "Dr. Rohan Yashraj Gupta, FIA, FIAI",
      url: "https://rohanyashraj.github.io",
    },
  ],
  creator: "Dr. Rohan Yashraj Gupta, FIA, FIAI",
  metadataBase: new URL("https://rohanyashraj.github.io"),
  applicationName: "Dr. Rohan Yashraj Gupta Portfolio",
  referrer: "origin-when-cross-origin",
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rohan Yashraj Gupta, FIA, FIAI | Actuary & Data Scientist",
    description:
      "Explore the actuarial journey, projects, and insights of Dr. Rohan Yashraj Gupta, FIA, FIAI.",
    creator: "@Rohan_Yashraj", // Replace with your actual Twitter handle
    images: ["/profile.jpg"], // Using relative path for better performance
  },
  openGraph: {
    title: "Dr. Rohan Yashraj Gupta, FIA, FIAI | Actuary & Data Scientist",
    description:
      "Explore the actuarial journey, projects, and insights of Dr. Rohan Yashraj Gupta, FIA, FIAI. He specializes in Data Science and General Insurance.",
    url: "https://rohanyashraj.github.io",
    type: "website",
    siteName: "Dr. Rohan Yashraj Gupta, FIA, FIAI | Actuary & Data Scientist",
    images: [
      {
        url: "/profile.jpg", // Using relative path for better performance
        width: 1200,
        height: 1200,
        alt: "Dr. Rohan Yashraj Gupta - Actuary & Data Scientist",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rohanyashraj.github.io",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00ff99" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c22" },
  ],
};

const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dr. Rohan Yashraj Gupta, FIA, FIAI | Actuary & Data Scientist",
    url: "https://rohanyashraj.github.io",
    description:
      "Explore the actuarial journey, projects, and insights of Dr. Rohan Yashraj Gupta, FIA, FIAI. He specializes in Data Science and General Insurance.",
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Rohan Yashraj Gupta, FIA, FIAI",
    alternateName: "Rohan Gupta",
    url: "https://rohanyashraj.github.io",
    jobTitle: "Actuary & Data Scientist", // You might want to make this more specific or add multiple
    worksFor: {
      "@type": "Organization",
      name: "Bajaj Allianz General Insurance", // Replace with actual if applicable, or remove if self-employed/independent
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Sathya Sai Institute of Higher Learning",
    },
    sameAs: [
      // Add links to your professional profiles
      "https://www.linkedin.com/in/dr-rohan-yashraj-gupta/", // Example
      "https://github.com/RohanYashraj", // Example
      "https://twitter.com/Rohan_Yashraj", // Example
      // Add other relevant profiles (e.g., ResearchGate, Google Scholar)
    ],
    image: "https://rohanyashraj.github.io/profile.jpg", // Ensure this image is optimized!
    description:
      "Qualified General Insurance Actuary (FIA, FIAI) and Data Scientist with a PhD, specializing in fraud detection, predictive modeling, and technology transformation in the insurance sector.",
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="cKguk44hgHZadmFF1Lm2h6hmqgvCpfIXs82nYjvNz0E"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${raleway.variable} antialiased bg-bodyColour text-white/80`}
      >
        <PostHogProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
