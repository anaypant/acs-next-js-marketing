'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Mail,
  Target,
  Users,
  Shield,
  Zap,
  Brain,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function MarketingPage() {
  const features = [
    {
      title: "Lead Conversion Pipeline",
      description: "Automate lead engagement and conversion with AI-powered conversation management and intelligent handoffs.",
      icon: <MessageSquare className="h-8 w-8 text-[#0e6537]" />,
    },
    {
      title: "Lead Generation Workflow",
      description: "Generate and nurture leads through targeted advertising campaigns across multiple platforms.",
      icon: <Target className="h-8 w-8 text-[#0e6537]" />,
    },
    {
      title: "Smart Lead Scoring",
      description: "AI-powered system evaluates and ranks leads based on conversion likelihood, helping you focus on the most promising opportunities.",
      icon: <Users className="h-8 w-8 text-[#0e6537]" />,
    },
    {
      title: "Secure & Reliable",
      description: "Built on AWS Cloud Infrastructure with enterprise-grade security and privacy protection.",
      icon: <Shield className="h-8 w-8 text-[#0e6537]" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f6fbf8] via-[#e6f5ec] to-white">
      <Navbar />
      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24 max-w-7xl mx-auto w-full gap-12">
        {/* Left: Headline and CTA */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            AI platform for
            <span className="block text-[#0e6537]">small business intelligence</span>
            <span className="block text-3xl md:text-4xl font-semibold text-[#3b82f6] mt-2">lead generation, conversion, and automation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            ACS bridges the technology gap for small businesses by delivering high-quality, affordable AI tools that streamline operations and save time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0a5a2f] to-[#157a42] text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:from-[#157a42] hover:to-[#0a5a2f]"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
        {/* Right: Product Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex items-center justify-center w-full max-w-lg"
        >
          <div className="rounded-xl shadow-2xl bg-white border border-gray-100 p-4 w-full max-w-md">
            {/* Placeholder for product screenshot/illustration */}
            <div className="aspect-video bg-gradient-to-br from-[#e6f5ec] to-[#f6fbf8] flex items-center justify-center rounded-lg">
              <Sparkles className="w-16 h-16 text-[#0e6537]" />
            </div>
            <div className="mt-4 text-center text-gray-500 text-sm">AI-powered dashboard preview</div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-3">{feature.icon}</div>
              <div className="font-semibold text-lg text-[#0e6537] mb-1">{feature.title}</div>
              <div className="text-gray-600 text-base">{feature.description}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#f8faf9] rounded-xl shadow p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0e6537] mb-4">About ACS</h2>
          <p className="text-gray-700 text-lg mb-2">
            ACS is an AI consultancy company focused on providing technical solutions to small businesses. We specialize in the real estate and medical/veterinary industries, delivering personalized, hands-on service that helps businesses focus on growth while reducing operational expenses.
          </p>
          <p className="text-gray-500 text-base">
            Our platform combines AWS Cloud Infrastructure with cutting-edge AI technology to deliver secure, reliable, and easy-to-use solutions for the modern business professional.
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
} 