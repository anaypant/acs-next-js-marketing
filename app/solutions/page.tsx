"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquareText,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Linkedin,
  Twitter,
  Briefcase,
} from "lucide-react"
import Footer from "../Footer"
import Navbar from "../Navbar"

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
    },
  },
}

export default function SolutionsPage() {
  const [currentConversation, setCurrentConversation] = useState(0)

  const features = [
    {
      id: "conversation",
      title: "Conversation Management",
      icon: <MessageSquareText className="w-8 h-8 text-white" />,
      description:
        "Automatically engage leads, handle routine questions, and intelligently escalate to a realtor when the time is right.",
      demoImage: "/solution-conversation-management.png",
    },
    {
      id: "marketing",
      title: "Marketing Optimization",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      description:
        "Leverage AI to optimize marketing campaigns, target the right audience, and maximize your property listings' visibility.",
      demoImage: "/solution-marketing-optimization.png",
    },
    {
      id: "scoring",
      title: "Automated Lead Scoring",
      icon: <Users className="w-8 h-8 text-white" />,
      description:
        "Our AI system automatically evaluates and ranks leads based on their likelihood to convert, helping you focus on promising opportunities.",
      demoImage: "/solution-lead-scoring.png",
    },
  ]

  const conversations = [
    {
      lead: "John Doe",
      date: "Mar 15, 2023",
      stage: "AI Engaged",
      stageColor: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
      message: "Looking for a 3-bedroom house in the downtown area...",
    },
    {
      lead: "Jane Smith",
      date: "Mar 14, 2023",
      stage: "Agent Hand-Off",
      stageColor: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
      message: "Need more details about financing options...",
    },
    {
      lead: "Robert Brown",
      date: "Mar 13, 2023",
      stage: "AI Engaged",
      stageColor: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
      message: "Interested in scheduling a viewing this weekend.",
    },
    {
      lead: "Linda Davis",
      date: "Mar 12, 2023",
      stage: "Closed",
      stageColor: "linear-gradient(135deg, #64748b 0%, #94a3b8 100%)",
      message: "Thanks for your help! We've moved forward.",
    },
  ]

  const conversationFeatures = [
    "AI-Powered Engagement",
    "Real-Time Handoffs",
    "Unified Conversation View",
    "Intelligent Insights",
  ]
  const marketingFeatures = [
    "Multi-Channel Campaign Management",
    "Audience Targeting & Segmentation",
    "Performance Analytics & Optimization",
    "Automated Content Generation",
  ]
  const leadScoringFeatures = [
    "Behavioral Analysis",
    "Engagement Tracking",
    "Conversion Probability Scoring",
    "Priority-Based Lead Routing",
  ]

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)",
      }}
    >
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="relative px-6 py-20 md:py-32 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(241,245,249,0.6) 50%, rgba(226,232,240,0.4) 100%)",
          }}
        >
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl mx-auto">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
              style={{
                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI-Powered{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #157a42 0%, #22c55e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Solutions
              </span>{" "}
              for Realtors
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how our suite of AI tools can transform every aspect of your real estate business, from lead
              generation to closing deals.
            </motion.p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-xl shadow-lg p-6 flex flex-col text-center transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl group"
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
                    className="p-4 rounded-full mb-5 inline-block self-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className="font-semibold text-xl mb-2"
                    style={{
                      background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{feature.description}</p>
                  <Link
                    href={`#${feature.id}`}
                    className="mt-6 inline-flex items-center justify-center text-sm font-semibold text-slate-700 hover:text-slate-900 group transition-all duration-300"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-16 md:space-y-24 pb-16 md:pb-24">
          {/* Conversation Management */}
          <section id="conversation" className="max-w-6xl mx-auto px-6 scroll-mt-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  variants={fadeInUp}
                  className="rounded-xl shadow-xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                    border: "1px solid rgba(10, 90, 47, 0.15)",
                  }}
                >
                  <div
                    className="border-b p-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(241,245,249,0.8) 100%)",
                      borderColor: "rgba(10, 90, 47, 0.15)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">Recent Conversations</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {conversations.map((convo, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg text-sm transition-all duration-300 ${
                          index === currentConversation ? "shadow-md transform scale-105" : "hover:shadow-sm"
                        }`}
                        style={{
                          background:
                            index === currentConversation
                              ? "linear-gradient(135deg, rgba(241,245,249,0.8) 0%, rgba(226,232,240,0.8) 100%)"
                              : "rgba(255,255,255,0.8)",
                        }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-800">{convo.lead}</span>
                          <span
                            className="text-white px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{ background: convo.stageColor }}
                          >
                            {convo.stage}
                          </span>
                        </div>
                        <p className="text-gray-600 truncate">{convo.message}</p>
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex justify-center items-center gap-3 p-4 border-t"
                    style={{
                      background: "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(241,245,249,0.8) 100%)",
                      borderColor: "rgba(10, 90, 47, 0.15)",
                    }}
                  >
                    <button
                      onClick={() =>
                        setCurrentConversation((p) => (p - 1 + conversations.length) % conversations.length)
                      }
                      className="p-1.5 rounded-full transition-all duration-300 hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
                        border: "1px solid rgba(10, 90, 47, 0.2)",
                      }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <div className="text-xs font-medium text-gray-500">
                      {currentConversation + 1} / {conversations.length}
                    </div>
                    <button
                      onClick={() => setCurrentConversation((p) => (p + 1) % conversations.length)}
                      className="p-1.5 rounded-full transition-all duration-300 hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
                        border: "1px solid rgba(10, 90, 47, 0.2)",
                      }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Conversation Management</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Engage leads 24/7, handle routine questions, and intelligently escalate to a realtor when the time is
                  right—all powered by AI.
                </p>
                <ul className="space-y-3 mb-8">
                  {conversationFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="text-slate-600 w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </section>

          {/* Marketing Optimization */}
          <section id="marketing" className="max-w-6xl mx-auto px-6 scroll-mt-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Marketing Optimization</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Provide minimal inputs—like location and budget—and let our AI create, deploy, and continuously
                  optimize a full marketing campaign.
                </p>
                <ul className="space-y-3 mb-8">
                  {marketingFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="text-slate-600 w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="rounded-xl shadow-xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  border: "1px solid rgba(10, 90, 47, 0.15)",
                }}
              >
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">Lead Generation Workflow</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}
                    >
                      <Facebook size={28} className="text-blue-600" />
                    </div>
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)" }}
                    >
                      <Briefcase size={28} className="text-red-600" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-px bg-gray-200 h-24"></div>
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg text-center font-semibold text-sm leading-tight text-white transition-transform duration-300 hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                    }}
                  >
                    <p>
                      AI
                      <br />
                      Engine
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-px bg-gray-200 h-24"></div>
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)" }}
                    >
                      <Twitter size={28} className="text-sky-600" />
                    </div>
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)" }}
                    >
                      <Linkedin size={28} className="text-blue-800" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Lead Scoring */}
          <section id="scoring" className="max-w-6xl mx-auto px-6 scroll-mt-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  variants={fadeInUp}
                  className="rounded-xl shadow-xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                    border: "1px solid rgba(10, 90, 47, 0.15)",
                  }}
                >
                  <div
                    className="border-b p-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(241,245,249,0.8) 100%)",
                      borderColor: "rgba(10, 90, 47, 0.15)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">Lead Scoring Dashboard</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div
                        className="p-4 rounded-lg text-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(241,245,249,0.8) 0%, rgba(226,232,240,0.8) 100%)",
                        }}
                      >
                        <div
                          className="font-bold text-3xl mb-1"
                          style={{
                            background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          87
                        </div>
                        <div className="text-sm text-slate-700 font-medium">High-Value Leads</div>
                      </div>
                      <div
                        className="p-4 rounded-lg text-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(241,245,249,0.8) 0%, rgba(226,232,240,0.8) 100%)",
                        }}
                      >
                        <div
                          className="font-bold text-3xl mb-1"
                          style={{
                            background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          64%
                        </div>
                        <div className="text-sm text-slate-700 font-medium">Conversion Rate</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "John Smith", score: 92 },
                        { name: "Maria Garcia", score: 87 },
                        { name: "David Lee", score: 78 },
                      ].map((lead, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{lead.name}</span>
                            <span
                              className="text-sm font-semibold"
                              style={{
                                color: lead.score >= 85 ? "#0a5a2f" : "#f59e0b",
                              }}
                            >
                              {lead.score}/100
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                background:
                                  lead.score >= 85
                                    ? "linear-gradient(90deg, #0a5a2f 0%, #157a42 100%)"
                                    : "linear-gradient(90deg, #fbbf24 0%, #fcd34d 100%)",
                                width: `${lead.score}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Automated Lead Scoring</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Our AI automatically evaluates and ranks leads on their likelihood to convert, helping you focus on
                  the most promising opportunities.
                </p>
                <ul className="space-y-3 mb-8">
                  {leadScoringFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="text-slate-600 w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </section>
        </div>

        {/* CTA Section */}
        <section
          className="py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-green-100 mb-8 text-lg leading-relaxed">
              Join thousands of real estate professionals leveraging our AI tools to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-green-800 font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-green-50 hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border-2 border-green-200 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:shadow-lg transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
