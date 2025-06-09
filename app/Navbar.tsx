"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null)

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

          {/* Main navigation links - Centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-6 py-2.5 rounded-lg transition-all duration-300 ease-in-out group"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background:
                      hovered === item.name ? "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)" : "transparent",
                    color: hovered === item.name ? "#ffffff" : "#374151",
                  }}
                >
                  <span className="relative z-10 font-medium transition-all duration-300">{item.name}</span>
                  {hovered === item.name && (
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "linear-gradient(135deg, rgba(10, 90, 47, 0.1) 0%, rgba(21, 122, 66, 0.1) 100%)",
                      }}
                      layoutId="navHover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Started button */}
          <div className="flex items-center">
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
      </div>
    </nav>
  )
}

export default Navbar
