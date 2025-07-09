"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa"
import { sendEmail } from "@/app/actions/sendEmail"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)
    setStatus(result.success ? "success" : "error")
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 animated-bg text-white flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white neon-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 neon-text">Contact Information</h3>
              <div className="space-y-4">
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <FaEnvelope className="mr-3 text-purple-400 icon-glow" size={20} />
                  <span>mnisarahmed937@gmail.com</span>
                </motion.div>
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <FaMapMarkerAlt className="mr-3 text-purple-400 icon-glow" size={20} />
                  <span>United States of America</span>
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-6 neon-text">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/mdnisar-ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-purple-400 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors neon-border"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/nisarahmedm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-purple-400 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors neon-border"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-purple-400 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors neon-border"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <FaTwitter size={24} />
                </motion.a>
              </div>

              {/* Animated illustration */}
              <motion.div
                className="mt-10 hidden md:block"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-full blur-xl pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaPaperPlane size={64} className="text-purple-400 rotate-slow" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-900 rounded-lg p-8 shadow-lg neon-border">
                <h3 className="text-2xl font-bold mb-6 text-white neon-text">Send Me a Message</h3>
                <form action={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                      <FaUser className="mr-2 text-purple-400" /> Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                      <FaEnvelope className="mr-2 text-purple-400" /> Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                      <FaComment className="mr-2 text-purple-400" /> Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="mt-6">
                    <motion.button
                      type="submit"
                      className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 neon-border"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(191, 90, 242, 0.8)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-center">
                        <FaPaperPlane className="mr-2" />
                        <span>Send Message</span>
                      </div>
                    </motion.button>
                  </div>
                  {status === "success" && (
                    <motion.div
                      className="mt-4 p-3 bg-green-900 text-green-200 rounded-md border border-green-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      className="mt-4 p-3 bg-red-900 text-red-200 rounded-md border border-red-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Failed to send message. Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
