import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Tejaswini Nagesh | Design Researcher",
  description: "Portfolio of Tejaswini Nagesh, Design Researcher focused on sustainability and wildlife conservation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(jetbrainsMono.className, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="border-b border-neutral-800">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between py-4">
                  <Link href="/" className="text-2xl font-bold tracking-tighter">
                    TEJASWINI NAGESH
                  </Link>
                  <div className="flex items-center">
                    <ThemeToggle />
                  </div>
                </div>
                <nav className="flex items-center space-x-8 py-4 text-sm uppercase tracking-widest font-medium">
                  <Link href="/" className="hover:text-green-400 transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="hover:text-green-400 transition-colors">
                    About
                  </Link>
                  <Link href="/research" className="hover:text-green-400 transition-colors">
                    Research
                  </Link>
                  <Link href="/contact" className="hover:text-green-400 transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1">
              <Suspense>{children}</Suspense>
            </main>
            <footer className="border-t border-neutral-800 py-8">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Contact</h3>
                    <p className="text-sm text-neutral-400">hello@tejaswininagesh.com</p>
                    <p className="text-sm text-neutral-400">San Francisco, California</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Connect</h3>
                    <div className="space-y-2">
                      <Link href="#" className="block text-sm text-neutral-400 hover:text-green-400 transition-colors">
                        LinkedIn
                      </Link>
                      <Link href="#" className="block text-sm text-neutral-400 hover:text-green-400 transition-colors">
                        Twitter
                      </Link>
                      <Link href="#" className="block text-sm text-neutral-400 hover:text-green-400 transition-colors">
                        Instagram
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Legal</h3>
                    <div className="space-y-2">
                      <Link href="#" className="block text-sm text-neutral-400 hover:text-green-400 transition-colors">
                        Privacy Policy
                      </Link>
                      <Link href="#" className="block text-sm text-neutral-400 hover:text-green-400 transition-colors">
                        Terms of Service
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-neutral-800">
                  <p className="text-sm text-neutral-400">
                    © {new Date().getFullYear()} Tejaswini Nagesh. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
