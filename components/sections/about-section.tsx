"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaTools,
  FaBrain,
  FaAws,
  FaGitAlt,
  FaBootstrap,
  FaSass,
  FaJsSquare,
  FaBitbucket,
} from "react-icons/fa"
import {
  SiDotnet,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiNgrx,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiMysql,
} from "react-icons/si"
import dynamic from "next/dynamic"

// Dynamically import the 3D cube component with no SSR to avoid hydration issues
const SkillsCubeCanvas = dynamic(() => import("../3d/skills-cube"), { ssr: false })

const technologies = [
  { icon: FaReact, name: "React", proficiency: 90 },
  { icon: FaAngular, name: "Angular", proficiency: 85 },
  { icon: SiDotnet, name: ".NET", proficiency: 95 },
  { icon: FaCode, name: "C#", proficiency: 95 },
  { icon: FaHtml5, name: "HTML5", proficiency: 100 },
  { icon: FaCss3, name: "CSS3", proficiency: 90 },
  { icon: FaNodeJs, name: "Node.js", proficiency: 80 },
  { icon: FaServer, name: "Azure", proficiency: 85 },
  { icon: FaDatabase, name: "SQL Server", proficiency: 90 },
  { icon: FaAws, name: "AWS", proficiency: 85 },
  { icon: SiMongodb, name: "MongoDB", proficiency: 80 },
  { icon: FaGitAlt, name: "Git", proficiency: 90 },
  { icon: SiFirebase, name: "Firebase", proficiency: 75 },
  { icon: FaBootstrap, name: "Bootstrap", proficiency: 85 },
  { icon: SiRedux, name: "Redux", proficiency: 85 },
  { icon: SiNgrx, name: "NgRx", proficiency: 80 },
  { icon: FaSass, name: "Sass", proficiency: 80 },
  { icon: FaJsSquare, name: "JavaScript", proficiency: 95 },
  { icon: SiTailwindcss, name: "Tailwind CSS", proficiency: 90 },
  { icon: SiExpress, name: "Express", proficiency: 80 },
  { icon: SiPostman, name: "Postman", proficiency: 85 },
  { icon: SiMysql, name: "MySQL", proficiency: 85 },
  { icon: FaBitbucket, name: "Bitbucket", proficiency: 80 },
]

const specialties = [
  { icon: FaLaptopCode, title: "Web Development", description: "Creating responsive and dynamic web applications" },
  { icon: FaMobileAlt, title: "Mobile Apps", description: "Building cross-platform mobile experiences" },
  { icon: FaCloud, title: "Cloud Solutions", description: "Deploying and managing cloud infrastructure" },
  { icon: FaTools, title: "DevOps", description: "Streamlining development and deployment processes" },
  { icon: FaBrain, title: "AI Integration", description: "Incorporating AI capabilities into applications" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about" ref={ref} className="min-h-screen py-16 bg-black flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4 text-white neon-text">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-lg mb-10 text-center text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate full-stack developer with expertise in .NET, React, and various other technologies. With a
            strong foundation in both front-end and back-end development, I strive to create efficient, scalable, and
            user-friendly applications that solve real-world problems.
          </motion.p>

          {/* 3D Rotating Skills Cubes */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-white neon-text">Core Skills</h3>
            <SkillsCubeCanvas />
          </motion.div>

          {/* Specialties */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="bg-gray-900 p-4 rounded-lg border border-purple-900 neon-border"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 20px rgba(191, 90, 242, 0.3)",
                }}
              >
                <motion.div className="text-purple-500 mb-3 icon-glow" whileHover={{ rotate: 5, scale: 1.1 }}>
                  <specialty.icon size={32} />
                </motion.div>
                <h3 className="text-lg font-bold mb-1 text-white">{specialty.title}</h3>
                <p className="text-gray-400 text-sm">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Compact Skills Proficiency section with 4 columns */}
          <motion.h3
            className="text-2xl font-semibold mb-6 text-center text-white neon-text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Skills Proficiency
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="mb-1"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-between mb-1 items-center">
                  <div className="flex items-center">
                    <tech.icon className="text-purple-500 mr-1" size={14} />
                    <span className="text-gray-300 text-xs">{tech.name}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <motion.div
                    className="bg-gradient-to-r from-purple-600 to-purple-400 h-1.5 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.proficiency}%` } : { width: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + index * 0.02,
                      ease: "easeOut",
                    }}
                  >
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute right-0 top-0 h-full w-1.5 bg-white rounded-full"
                      animate={{
                        opacity: [0.8, 0.2, 0.8],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
