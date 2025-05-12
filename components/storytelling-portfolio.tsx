"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Navbar from "@/components/navbar"
import IntroSection from "@/components/sections/intro-section"
import AboutSection from "@/components/sections/about-section"
import EducationSection from "@/components/sections/education-section"
import ExperienceSection from "@/components/sections/experience-section"
// import ProjectsSection from "@/components/sections/projects-section" // Commented out as requested
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/sections/footer"

export default function StorytellingPortfolio() {
  const [activeSection, setActiveSection] = useState("intro")
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Progress indicator
  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  // State for particles
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([])

  // Check which section is active based on scroll position
  useEffect(() => {
    const sections = ["intro", "about", "experience", "education", "contact"] // Removed "projects"

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate particles only on the client side
  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
      size: Math.random() * 10 + 5,
    }))

    setParticles(newParticles)
  }, [])

  return (
    <div ref={containerRef} className="relative bg-black text-white">
      <Navbar activeSection={activeSection} />

      {/* Progress indicator */}
      <motion.div className="fixed left-0 top-0 bottom-0 w-1 bg-purple-600 z-50" style={{ height: progressHeight }} />

      {/* Animated particles background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500"
              style={{
                width: particle.size,
                height: particle.size,
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                x: [particle.x, particle.x + (Math.random() * 200 - 100), particle.x],
                y: [particle.y, particle.y + (Math.random() * 200 - 100), particle.y],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-10 right-10 z-50 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <motion.div
          className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center neon-border"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <motion.div
            className="w-1 h-2 bg-purple-500 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>

      <div className="storytelling-container">
        <IntroSection />
        <AboutSection />
        {/* <ProjectsSection /> */} 
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
