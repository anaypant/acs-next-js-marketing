"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/marketing" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 border-b shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,0.95) 100%)",
        backdropFilter: "blur(20px)",
        borderColor: "rgba(10, 90, 47, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand link */}
          <Link href="/marketing" className="text-2xl font-bold relative group flex items-center">
            <span
              className="transition-all duration-500 ease-in-out transform group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ACS
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop navigation links - Hidden on mobile */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-2.5 font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0a5a2f] hover:to-[#157a42] transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Started button - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-white text-white"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                boxShadow: "0 4px 15px rgba(10, 90, 47, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #157a42 0%, #22c55e 100%)"
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(10, 90, 47, 0.6)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)"
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(10, 90, 47, 0.4)"
              }}
            >
              Get a Demo
            </Link>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
