"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { MobileMenu } from "@/components/mobile-menu"
import { DotCursor } from "@/components/dot-cursor"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Tejaswini Nagesh | Design Researcher</title>
        <meta
          name="description"
          content="Portfolio of Tejaswini Nagesh, Design Researcher focused on sustainability and wildlife conservation"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <DotCursor />
          <div className="flex flex-col min-h-screen">
            <motion.header
              className="border-b"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="container flex items-center justify-between py-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/images/logo.svg"
                      alt="Tokay Designs Logo"
                      width={120}
                      height={60}
                      className="h-12 w-auto"
                    />
                  </Link>
                </motion.div>
                <div className="flex items-center gap-6">
                  <nav className="hidden md:flex items-center gap-8">
                    <Link
                      href="/"
                      className={`text-sm uppercase tracking-wide font-medium hover:text-green-600 dark:hover:text-green-500 transition-colors relative ${
                        pathname === "/" ? "text-green-600 dark:text-green-500" : ""
                      }`}
                    >
                      Home
                      {pathname === "/" && (
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 dark:bg-green-500"
                          layoutId="underline"
                        />
                      )}
                    </Link>
                    <Link
                      href="/about"
                      className={`text-sm uppercase tracking-wide font-medium hover:text-green-600 dark:hover:text-green-500 transition-colors relative ${
                        pathname === "/about" ? "text-green-600 dark:text-green-500" : ""
                      }`}
                    >
                      About
                      {pathname === "/about" && (
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 dark:bg-green-500"
                          layoutId="underline"
                        />
                      )}
                    </Link>
                    <Link
                      href="/contact"
                      className={`text-sm uppercase tracking-wide font-medium hover:text-green-600 dark:hover:text-green-500 transition-colors relative ${
                        pathname === "/contact" ? "text-green-600 dark:text-green-500" : ""
                      }`}
                    >
                      Contact
                      {pathname === "/contact" && (
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 dark:bg-green-500"
                          layoutId="underline"
                        />
                      )}
                    </Link>
                  </nav>
                  <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </motion.header>
            <main className="flex-1">{children}</main>
            <motion.footer
              className="border-t py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tejaswini Nagesh</div>
                <div className="flex gap-6">
                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
                      LinkedIn
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
                      Twitter
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
                      Instagram
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
