"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MessageSquareText, Target, Users, ShieldCheck, ArrowRight } from "lucide-react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export default function MarketingPage() {
  const features = [
    {
      title: "Lead Conversion Pipeline",
      description:
        "Automate lead engagement and conversion with AI-powered conversation management and intelligent handoffs.",
      icon: <MessageSquareText className="h-7 w-7 text-white" />,
    },
    {
      title: "Lead Generation Workflow",
      description: "Generate and nurture leads through targeted advertising campaigns across multiple platforms.",
      icon: <Target className="h-7 w-7 text-white" />,
    },
    {
      title: "Smart Lead Scoring",
      description:
        "AI-powered system evaluates and ranks leads based on conversion likelihood, helping you focus on promising opportunities.",
      icon: <Users className="h-7 w-7 text-white" />,
    },
    {
      title: "Secure & Reliable",
      description: "Built on AWS Cloud Infrastructure with enterprise-grade security and privacy protection.",
      icon: <ShieldCheck className="h-7 w-7 text-white" />,
    },
  ]

  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)",
      }}
    >
      <Navbar />

      <main>
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative flex flex-col lg:flex-row items-center justify-center px-6 py-20 md:py-28 max-w-7xl mx-auto w-full gap-12 lg:gap-16 min-h-[calc(100vh-4rem)]"
        >
          {/* Background decorative shapes */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div
              className="absolute top-0 -left-1/4 w-full h-full rounded-full blur-3xl opacity-20 animate-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(10, 90, 47, 0.3) 0%, rgba(21, 122, 66, 0.2) 50%, transparent 100%)",
                animationDuration: "8s",
              }}
            ></div>
            <div
              className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 rounded-full blur-3xl opacity-15 animate-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(21, 122, 66, 0.3) 0%, rgba(10, 90, 47, 0.2) 50%, transparent 100%)",
                animationDuration: "10s",
                animationDelay: "2s",
              }}
            ></div>
          </div>

          {/* Left: Headline and CTA */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl text-center lg:text-left z-10">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Platform for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #157a42 0%, #22c55e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Small Business Intelligence
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-medium mb-8"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Lead Generation, Conversion, and Automation
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-700 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              ACS bridges the technology gap for small businesses by delivering high-quality, affordable AI tools that
              streamline operations and save time.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center group px-8 py-4 rounded-full text-white text-base font-semibold shadow-xl transform transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-white"
                style={{
                  background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                  boxShadow: "0 10px 30px rgba(10, 90, 47, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #157a42 0%, #22c55e 100%)"
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(10, 90, 47, 0.6)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(10, 90, 47, 0.4)"
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Product Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "circOut", delay: 0.2 }}
            className="flex-1 flex items-center justify-center w-full max-w-lg mt-12 lg:mt-0 z-10"
          >
            <div
              className="rounded-xl shadow-2xl p-2 sm:p-3 w-full transition-all duration-500 hover:shadow-3xl transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 50%, rgba(241,245,249,0.9) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(10, 90, 47, 0.2)",
              }}
            >
              <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-slate-100">
                <Image
                  src="/aiguywithcomputer.png"
                  alt="Abstract visualization of AI data intelligence"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-gray-600 text-xs sm:text-sm font-medium">
                Unlock the Power of AI for Your Business
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                custom={index}
                className="rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl group"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,0.95) 100%)",
                  border: "1px solid rgba(10, 90, 47, 0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(248,250,252,0.98) 0%, rgba(241,245,249,0.98) 50%, rgba(226,232,240,0.98) 100%)"
                  e.currentTarget.style.borderColor = "rgba(10, 90, 47, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,0.95) 100%)"
                  e.currentTarget.style.borderColor = "rgba(10, 90, 47, 0.15)"
                }}
              >
                <div
                  className="p-4 rounded-full mb-5 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{
                    background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section
          className="w-full py-16 md:py-24"
          style={{
            background:
              "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(241,245,249,0.8) 50%, rgba(226,232,240,0.8) 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto px-6 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About ACS
            </h2>
            <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                ACS is an AI consultancy company focused on providing technical solutions to small businesses. We
                specialize in the real estate and medical/veterinary industries, delivering personalized, hands-on
                service that helps businesses focus on growth while reducing operational expenses.
              </p>
              <p>
                Our platform combines AWS Cloud Infrastructure with cutting-edge AI technology to deliver secure,
                reliable, and easy-to-use solutions for the modern business professional.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
