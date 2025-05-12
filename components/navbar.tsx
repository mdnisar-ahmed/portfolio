"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Home, User, BookOpen, Briefcase, Mail } from "lucide-react"
import { motion } from "framer-motion"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { id: "intro", label: "Intro", icon: Home },
    { id: "about", label: "About", icon: User },
    // Removed Projects section
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-purple-900/50 dark:bg-black/80 light:bg-white/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#intro" onClick={() => scrollToSection("intro")} className="flex items-center space-x-2">
              <motion.span
                className="font-bold text-xl text-white dark:text-white light:text-black neon-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Nisar Ahmed
              </motion.span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-black"
                  }`}
                >
                  <item.icon className={`h-4 w-4 ${activeSection === item.id ? "text-purple-400" : "text-gray-400"}`} />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {mounted && (
              <div className="flex items-center">
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  )}
                </button>
              </div>
            )}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 dark:bg-black/90 light:bg-white/90">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.id
                  ? "text-purple-400 bg-gray-900"
                  : "text-gray-300 hover:text-white hover:bg-gray-800 dark:text-gray-300 light:text-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
