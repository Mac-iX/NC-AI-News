import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NC AI News - North Carolina's AI Frontier",
  description: "The latest news, analysis, and insights on artificial intelligence in North Carolina.",
  keywords: "AI, artificial intelligence, North Carolina, research, startups, technology, news",
  authors: [{ name: "Mac Carter" }],
  creator: "Quality Creative Consulting, LLC",
  publisher: "NC AI News",
  metadataBase: new URL("https://ncainews.com"),
  openGraph: {
    title: "NC AI News - North Carolina's AI Frontier",
    description: "The latest news, analysis, and insights on artificial intelligence in North Carolina.",
    url: "https://ncainews.com",
    siteName: "NC AI News",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NC AI News - North Carolina's AI Frontier",
    description: "The latest news, analysis, and insights on artificial intelligence in North Carolina.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-navy text-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
