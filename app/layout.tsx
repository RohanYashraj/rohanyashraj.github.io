import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Dr. Rohan Gupta, FIA",
  description: "Rohan Yashraj Gupta - Portfolio website",
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
