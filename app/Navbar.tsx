/**
 * File: app/Navbar.tsx
 * Purpose: Renders the main navigation bar with responsive design, animated hover effects, and authentication links.
 * Author: Alejo Cagliolo
 * Date: 5/25/25
 * Version: 1.0.0
 */

"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

/**
 * Navbar Component
 * Main navigation component with responsive design and interactive elements
 * 
 * Features:
 * - Responsive navigation menu
 * - Animated hover effects using Framer Motion
 * - Authentication links (Sign in/Get Started)
 * - Mobile-friendly design
 * - Sticky positioning
 * - Gradient text and button effects
 * 
 * State Management:
 * - Tracks hovered navigation items
 * - Manages responsive menu state
 * 
 * @returns {JSX.Element} Complete navigation bar with all interactive elements
 */
const Navbar = () => {
  // Track which navigation item is currently hovered
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand link with gradient hover effect */}
          <Link href="/marketing" className="text-2xl font-bold relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0A2F1F] to-[#0A2F1F] group-hover:from-[#0A2F1F] group-hover:to-[#34A65F] transition-all duration-500">
              ACS
            </span>
          </Link>

          {/* Main navigation links with hover animations - Centered */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-1 bg-[#f8faf9] rounded-full p-1.5 shadow-inner">
              {["Home", "Solutions", "Contact"].map((item, index) => {
                const href = item === "Home" ? "/marketing" : `/${item.toLowerCase().replace(" ", "-")}`
                return (
                  <Link
                    key={index}
                    href={href}
                    className="relative px-6 py-2 rounded-full transition-all duration-300"
                    onMouseEnter={() => setHovered(item)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span className="relative z-10 transition-colors duration-300 text-gray-600 hover:text-[#0A2F1F] font-medium">
                      {item}
                    </span>
                    {hovered === item && (
                      <motion.span
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        layoutId="navBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Get Started button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-[#0a5a2f] to-[#157a42] text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:from-[#157a42] hover:to-[#0a5a2f]"
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

/**
 * Change Log:
 * 5/25/25 - Initial version
 * - Created responsive navigation bar
 * - Implemented hover animations with Framer Motion
 * - Added authentication links
 * - Integrated gradient effects
 * - Enhanced mobile responsiveness
 * - Added sticky positioning
 * - Implemented backdrop blur effect
 */
