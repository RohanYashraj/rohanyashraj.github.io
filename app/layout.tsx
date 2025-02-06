import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Dr. Rohan Yashraj Gupta, FIA | Actuary & Data Scientist",
  description:
    "Explore the actuarial journey, projects, and insights of Dr. Rohan Gupta, FIA. He specializes in Data Science and General Insurance.",
  keywords: [
    "Actuary",
    "GI",
    "Insurance",
    "Machine Learning",
    "Fraud Detection",
    "Projects",
    "Blog",
    "Rohan Gupta",
    "FIA",
    "Data Scientist",
    "Actuarial Science",
    "Data Analysis",
    "Data Visualization",
    "Python",
    "R",
    "SQL",
    "Power BI",
    "GitHub",
    "Actuarial Insights",
    "Actuarial Projects",
    "Actuarial Portfolio",
  ],
  authors: [
    { name: "Dr. Rohan Yashraj Gupta", url: "https://rohanyashraj.github.io" },
  ],
  creator: "Dr. Rohan Yashraj Gupta, FIA",
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rohan Yashraj Gupta, FIA | Actuary & Data Scientist",
    description:
      "Explore the actuarial journey, projects, and insights of Dr. Rohan Gupta, FIA.",
    creator: "@Rohan_Yashraj", // Replace with your actual Twitter handle
    images: ["https://rohanyashraj.github.io/profile.jpg"], // Relative path for Twitter
  },
  openGraph: {
    title: "Dr. Rohan Yashraj Gupta, FIA | Actuary & Data Scientist",
    description:
      "Explore the actuarial journey, projects, and insights of Dr. Rohan Gupta, FIA. He specializes in Data Science and General Insurance.",
    url: "https://rohanyashraj.github.io",
    type: "website",
    siteName: "Dr. Rohan Yashraj Gupta, FIA | Actuary & Data Scientist",
    images: [
      {
        url: "https://rohanyashraj.github.io/profile.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Portfolio Image",
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
  other: {
    "og:image": "https://rohanyashraj.github.io/profile.jpg", // Relative path for LinkedIn and other OG tags
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:updated_time": "2025-02-06T12:00:00Z", // Update dynamically
  },
};

const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased text-white/80`}>
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
