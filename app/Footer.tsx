/**
 * File: app/Footer.tsx
 * Purpose: Renders the application footer with navigation links, company information, and legal resources.
 * Author: Alejo Cagliolo
 * Date: 5/25/25
 * Version: 1.0.0
 */

import Link from "next/link"

/**
 * Footer Component
 * Application footer with responsive grid layout and navigation sections
 * 
 * Features:
 * - Responsive grid layout
 * - Company branding
 * - Navigation sections (Solutions, Company, Legal)
 * - Dynamic copyright year
 * - Hover effects on links
 * - Semantic HTML structure
 * 
 * Sections:
 * - Brand section with company description
 * - Solutions links for product features
 * - Company information and resources
 * - Legal documents and policies
 * 
 * @returns {JSX.Element} Complete footer with all navigation sections and copyright
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Main footer content in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section with logo and description */}
          <div>
            <Link href="/marketing" className="text-2xl font-bold text-[#127954]">
              ACS
            </Link>
            <p className="mt-2 text-gray-600 font-semibold">AI-powered solutions for real estate professionals</p>
            {/* Connect with us section */}
            <div className="mt-6">
              <span className="block font-semibold text-gray-800 mb-2">Connect with us</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/automated-consultancy-services/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f5ec] hover:bg-[#127954] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#127954] group-hover:text-white transition-colors">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Main navigation section */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketing" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions section */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Solutions</h3>
            <div className="space-y-2">
              <Link href="/solutions" className="text-gray-600 hover:text-[#0e6537] transition-colors">
                Solutions
              </Link>
              <Link href="/solutions#analytics" className="text-gray-600 hover:text-[#0e6537] transition-colors">
                Analytics
              </Link>
              <Link href="/solutions#conversation" className="text-gray-600 hover:text-[#0e6537] transition-colors">
                Conversation Management
              </Link>
              <Link href="/solutions#marketing" className="text-gray-600 hover:text-[#0e6537] transition-colors">
                Marketing Optimization
              </Link>
              <Link href="/solutions#scoring" className="text-gray-600 hover:text-[#0e6537] transition-colors">
                Lead Scoring
              </Link>
            </div>
          </div>

          {/* Company info section */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-[#127954] font-semibold">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section with dynamic year */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm font-semibold">
          <p>&copy; {new Date().getFullYear()} ACS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

/**
 * Change Log:
 * 5/25/25 - Initial version
 * - Created responsive footer layout
 * - Added navigation sections
 * - Implemented company branding
 * - Added legal resources
 * - Integrated dynamic copyright year
 * - Enhanced link hover effects
 * - Improved semantic structure
 */ 