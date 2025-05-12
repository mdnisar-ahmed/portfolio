"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from "react-icons/fa"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [displayText, setDisplayText] = useState("")
  const fullText = "Nisar Ahmed"
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Terminal typing effect
  useEffect(() => {
    if (isInView && isMounted) {
      let i = 0
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.substring(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
        }
      }, 100)

      // Blinking cursor effect
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev)
      }, 500)

      return () => {
        clearInterval(typingInterval)
        clearInterval(cursorInterval)
      }
    }
  }, [isInView, isMounted, fullText])

  const scrollToNext = () => {
    if (typeof window !== "undefined") {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section id="intro" ref={ref} className="min-h-screen flex items-center justify-center relative animated-bg py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Smaller greeting text */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hey there!, I'm
            </motion.p>

            {/* Terminal-style name */}
            <motion.div
              className="mb-4 bg-gray-900 rounded-md p-3 border border-purple-700 neon-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-2 text-xs text-gray-400">user@portfolio ~ </div>
              </div>
              <div className="font-mono">
                <span className="text-gray-400">$ </span>
                <span className="text-green-400">echo </span>
                <span className="text-4xl md:text-5xl font-bold text-purple-400 neon-text">{displayText}</span>
                {cursorVisible && <span className="text-4xl md:text-5xl text-white animate-pulse">|</span>}
              </div>
            </motion.div>

            {/* Software Engineer title */}
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-2 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Software Engineer
            </motion.h2>

            {/* Updated tagline */}
            <motion.p
              className="text-md md:text-lg mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              A self-taught developer with a passion for Computer Science, constantly exploring how code powers
              real-world solutions.
            </motion.p>

            <motion.div
              className="flex space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/mdnisar-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors icon-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nisarahmedm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors icon-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a
                href=" "
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors icon-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter size={28} />
              </motion.a>
            </motion.div>
            <motion.button
              onClick={() => {
                if (typeof window !== "undefined") {
                  const link = document.createElement("a")
                  link.href = "/NisarAhmed_FullStack_Resume.pdf"
                  link.download = "NisarAhmed_Resume.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }
              }}
              className="bg-purple-600 text-white hover:bg-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg transition-colors neon-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(191, 90, 242, 0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Enhanced profile image container with more animations */}
            <motion.div
              className="rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mx-auto relative neon-border w-64 h-64 md:w-80 md:h-80"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            >
              {/* Multiple glowing effects around the image */}
              <motion.div
                className="absolute inset-0 bg-purple-500 opacity-20 blur-md rounded-full"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-10 blur-md rounded-full"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1.05, 1, 1.05],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Updated to use your new image */}
              <Image
                src="/images/nisar-profile-new.png"
                alt="Nisar Ahmed"
                fill
                className="rounded-full relative z-10 object-cover"
              />

              {/* Multiple rotating circles around the profile image */}
              <motion.div
                className="absolute inset-0 border-4 border-dashed border-purple-500 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-2 border-2 border-dotted border-blue-400 rounded-full z-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-4 border-1 border-dotted border-pink-400 rounded-full z-0 opacity-50"
                animate={{ rotate: 180 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>

            {/* Enhanced animated elements around the profile image */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-md"
              animate={{
                scale: [1, 1.5, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-20 blur-md"
              animate={{
                scale: [1, 1.8, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Additional animated elements */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-12 h-12 bg-pink-500 rounded-full opacity-20 blur-md"
              animate={{
                scale: [1, 1.5, 1],
                x: [0, -15, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-yellow-500 rounded-full opacity-15 blur-md"
              animate={{
                scale: [1, 1.7, 1],
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={scrollToNext}
        whileHover={{ y: 5 }}
      >
        <FaChevronDown size={30} className="text-purple-400 animate-bounce icon-glow" />
      </motion.div>
    </section>
  )
}
