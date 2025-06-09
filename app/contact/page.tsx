"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative group">
        <input
          className={`w-full rounded-lg border px-4 py-3 text-sm text-gray-900 transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:outline-none hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(10, 90, 47, 0.2)",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#0a5a2f"
            e.target.style.background = "rgba(255, 255, 255, 0.95)"
            e.target.style.boxShadow = "0 4px 12px rgba(10, 90, 47, 0.1)"
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(10, 90, 47, 0.2)"
            e.target.style.background = "rgba(255, 255, 255, 0.9)"
            e.target.style.boxShadow = "none"
          }}
          ref={ref}
          {...props}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-xs text-red-500 font-medium"
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  },
)
Input.displayName = "Input"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }
>(({ className, error, ...props }, ref) => {
  return (
    <div className="relative group">
      <textarea
        className={`w-full rounded-lg border px-4 py-3 text-sm text-gray-900 transition-all duration-300 placeholder:text-gray-400 focus:outline-none hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          borderColor: "rgba(10, 90, 47, 0.2)",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#0a5a2f"
          e.target.style.background = "rgba(255, 255, 255, 0.95)"
          e.target.style.boxShadow = "0 4px 12px rgba(10, 90, 47, 0.1)"
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(10, 90, 47, 0.2)"
          e.target.style.background = "rgba(255, 255, 255, 0.9)"
          e.target.style.boxShadow = "none"
        }}
        ref={ref}
        {...props}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs text-red-500 font-medium"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
})
Textarea.displayName = "Textarea"

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline"
    size?: "default" | "sm" | "lg"
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-[1.02] active:scale-[0.98]"

  const variants = {
    default: "text-white shadow-lg",
    outline:
      "border-2 border-slate-600 bg-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-700 shadow-sm hover:shadow-md",
  }

  const sizes = {
    default: "h-12 py-3 px-6 text-sm",
    sm: "h-10 px-4 text-xs",
    lg: "h-14 px-8 text-base",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={
        variant === "default"
          ? {
              background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
              boxShadow: "0 4px 15px rgba(10, 90, 47, 0.4)",
            }
          : {}
      }
      onMouseEnter={
        variant === "default"
          ? (e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #157a42 0%, #22c55e 100%)"
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(10, 90, 47, 0.6)"
            }
          : undefined
      }
      onMouseLeave={
        variant === "default"
          ? (e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)"
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(10, 90, 47, 0.4)"
            }
          : undefined
      }
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

const Icons = {
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Send: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  CheckCircle: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Users: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    isDemoRequest: false,
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState("")
  const [apiSuccess, setApiSuccess] = useState(false)
  const [emailDetails, setEmailDetails] = useState<{ messageId?: string; response?: string }>({})

  const validateForm = () => {
    let valid = true
    const errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }

    if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters"
      valid = false
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Please enter a valid email address"
      valid = false
    }

    if (formData.subject.length < 5) {
      errors.subject = "Subject must be at least 5 characters"
      valid = false
    }

    if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters"
      valid = false
    }

    setFormErrors(errors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type } = e.target
    const checked = "checked" in e.target ? e.target.checked : false
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (name === "isDemoRequest" && checked) {
      setFormData((prev) => ({
        ...prev,
        subject: "Demo Request",
        message:
          "Hello, I am interested in a demo of your AI-powered real estate platform. I would like to learn more about how it can help my business. Please provide more information about scheduling a demo session.",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError("")
    setApiSuccess(false)
    setEmailDetails({})
    
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message')
        }

        setIsSubmitted(true)
        setApiSuccess(true)
        setEmailDetails({
          messageId: data.messageId,
          response: data.response
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          isDemoRequest: false,
        })
      } catch (err) {
        setApiError(err instanceof Error ? err.message : "Failed to send message. Please try again later.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const teamMembers = [
    {
      name: "Anay Pant",
      role: "Chief Executive Officer",
      isCoFounder: true,
    },
    {
      name: "Siddarth Nuthi",
      role: "Chief Technology Officer",
      isCoFounder: true,
    },
    {
      name: "Alejo Cagliolo",
      role: "Chief Product Officer",
    },
    {
      name: "Utsav Arora",
      role: "Chief Software Officer",
    },
    {
      name: "Parshawn Haynes",
      role: "Chief Marketing Officer",
    },
  ]

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{
              background: "radial-gradient(circle, rgba(10, 90, 47, 0.4) 0%, transparent 70%)",
              animationDuration: "8s",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{
              background: "radial-gradient(circle, rgba(21, 122, 66, 0.4) 0%, transparent 70%)",
              animationDuration: "10s",
              animationDelay: "2s",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="rounded-2xl p-8 shadow-xl border"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  borderColor: "rgba(10, 90, 47, 0.15)",
                  boxShadow: "0 20px 40px rgba(10, 90, 47, 0.1)",
                }}
              >
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div
                      className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                      }}
                    >
                      <Icons.CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    {emailDetails.messageId && (
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Message ID:</span> {emailDetails.messageId}
                        </p>
                        {emailDetails.response && (
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Server Response:</span> {emailDetails.response}
                          </p>
                        )}
                      </div>
                    )}
                    <Button onClick={() => setIsSubmitted(false)} size="lg">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a message</h2>
                      <p className="text-gray-600">We'd love to hear from you. Fill out the form below.</p>
                    </div>

                    {apiError && (
                      <motion.div
                        className="text-red-600 font-semibold mb-6 p-4 bg-red-50 rounded-lg border border-red-200"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {apiError}
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            error={formErrors.name}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            error={formErrors.email}
                          />
                        </div>
                      </div>

                      {/* Demo Request Checkbox */}
                      <div
                        className="p-6 rounded-xl border-2 border-dashed transition-all duration-300"
                        style={{
                          borderColor: formData.isDemoRequest ? "#0a5a2f" : "rgba(10, 90, 47, 0.2)",
                          background: formData.isDemoRequest
                            ? "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(241,245,249,0.8) 100%)"
                            : "linear-gradient(135deg, rgba(248,250,252,0.4) 0%, rgba(241,245,249,0.4) 100%)",
                        }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 pt-1">
                            <input
                              type="checkbox"
                              id="isDemoRequest"
                              name="isDemoRequest"
                              checked={formData.isDemoRequest}
                              onChange={handleChange}
                              className="w-5 h-5 rounded border-2 border-slate-300 text-slate-600 focus:ring-slate-500 focus:ring-2"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              htmlFor="isDemoRequest"
                              className="block text-lg font-semibold text-gray-800 cursor-pointer"
                            >
                              Request a Live Demo
                            </label>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              Get a personalized demonstration of our AI platform and see how it can transform your
                              business.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={handleChange}
                          error={formErrors.subject}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or ask any questions..."
                          className="min-h-32"
                          value={formData.message}
                          onChange={handleChange}
                          error={formErrors.message}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
                        {isSubmitting ? (
                          <span className="flex items-center gap-3">
                            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-3">
                            Send Message <Icons.Send className="h-5 w-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Team */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {/* Contact Information */}
              <div
                className="rounded-2xl p-8 shadow-xl border"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  borderColor: "rgba(10, 90, 47, 0.15)",
                  boxShadow: "0 20px 40px rgba(10, 90, 47, 0.1)",
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                      }}
                    >
                      <Icons.Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">support@automatedconsultancy.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Follow us</h4>
                  <a
                    href="https://www.linkedin.com/company/automated-consultancy-services/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                    }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Team Section */}
              <div
                className="rounded-2xl p-8 shadow-xl border"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  borderColor: "rgba(10, 90, 47, 0.15)",
                  boxShadow: "0 20px 40px rgba(10, 90, 47, 0.1)",
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Team</h3>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                      style={{
                        background: "linear-gradient(135deg, rgba(248,250,252,0.6) 0%, rgba(241,245,249,0.6) 100%)",
                      }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                        style={{
                          background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                        }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-800">{member.name}</h4>
                          {member.isCoFounder && (
                            <span
                              className="px-2 py-1 text-xs font-semibold rounded-full text-white"
                              style={{
                                background: "linear-gradient(135deg, #0a5a2f 0%, #157a42 100%)",
                              }}
                            >
                              Co-Founder
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
