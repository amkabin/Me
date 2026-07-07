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
  title: "Fancy Nateku Megiri | Software Engineer",
  description:
    "Full-stack developer and software engineering student at Kisii University. Building reliable software for real-world problems.",
  openGraph: {
    title: "Fancy Nateku Megiri | Software Engineer",
    description:
      "Full-stack developer building reliable software for real-world problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fancy Nateku Megiri | Software Engineer",
    description:
      "Full-stack developer building reliable software for real-world problems.",
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
