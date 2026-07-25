import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Brian Philip | Aspiring Software Engineer",
  description:
    "Aspiring software engineer passionate about building modern web applications with React, Node.js, and TypeScript.",
  openGraph: {
    title: "Brian Philip | Aspiring Software Engineer",
    description:
      "Aspiring software engineer building modern, responsive web applications.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Philip | Aspiring Software Engineer",
    description:
      "Aspiring software engineer building modern, responsive web applications.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-alabaster font-sans text-fg antialiased">
        <Nav />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
