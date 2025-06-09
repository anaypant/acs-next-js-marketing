"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)",
        borderColor: "rgba(10, 90, 47, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/marketing"
              className="text-2xl font-bold transition-all duration-300 ease-in-out transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ACS
            </Link>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              AI-powered solutions for real estate professionals. Bridging the technology gap for small businesses.
            </p>
            <div className="mt-6">
              <span className="block text-sm font-medium text-gray-800 mb-2">Connect with us</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/automated-consultancy-services/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, rgba(10, 90, 47, 0.1) 0%, rgba(21, 122, 66, 0.1) 100%)",
                    border: "2px solid rgba(10, 90, 47, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)"
                    e.currentTarget.style.borderColor = "#0a5a2f"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(10, 90, 47, 0.1) 0%, rgba(21, 122, 66, 0.1) 100%)"
                    e.currentTarget.style.borderColor = "rgba(10, 90, 47, 0.3)"
                  }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation section */}
          <div>
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-3"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/marketing" },
                { name: "Solutions", href: "/solutions" },
                { name: "Contact", href: "/contact" },
                { name: "Get Started", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 font-medium transition-all duration-300 ease-in-out hover:text-slate-800 hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions section */}
          <div>
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-3"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Solutions
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Overview", href: "/solutions" },
                { name: "Analytics", href: "/solutions#analytics" },
                { name: "Conversation Management", href: "/solutions#conversation" },
                { name: "Marketing Optimization", href: "/solutions#marketing" },
                { name: "Lead Scoring", href: "/solutions#scoring" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 font-medium transition-all duration-300 ease-in-out hover:text-slate-800 hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info section */}
          <div>
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-3"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Contact Us", href: "/contact" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Cookie Policy", href: "/cookies" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 font-medium transition-all duration-300 ease-in-out hover:text-slate-800 hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 text-center border-t" style={{ borderColor: "rgba(10, 90, 47, 0.15)" }}>
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} ACS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
