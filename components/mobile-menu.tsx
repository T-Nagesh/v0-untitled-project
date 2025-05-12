"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  // These are the only links that should appear in the mobile menu
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/experiments", label: "Experiments" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
          >
            <div className="flex flex-col h-full justify-center items-center">
              <motion.button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 focus:outline-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.button>

              <nav className="flex flex-col items-center gap-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-medium ${pathname === link.href ? "text-blue-500" : ""} hover:text-orange-500 transition-colors`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
