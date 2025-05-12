"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaTools, FaLaptopCode } from "react-icons/fa"

const projects = [
  {
    title: "Project 1",
    description:
      "A brief description of project 1 and its key features. This project showcases my skills in React and Node.js.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    features: ["Responsive design", "Real-time data updates", "User authentication"],
  },
  {
    title: "Project 2",
    description:
      "A brief description of project 2 and its key features. This project demonstrates my expertise in .NET Core and SQL Server.",
    image: "/placeholder.svg?height=300&width=500",
    tags: [".NET Core", "SQL Server", "Azure"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    features: ["Microservices architecture", "RESTful API", "CI/CD pipeline"],
  },
  {
    title: "Project 3",
    description:
      "A brief description of project 3 and its key features. This project highlights my abilities in Angular and TypeScript.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Angular", "TypeScript", "Firebase"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    features: ["State management", "Progressive Web App", "Offline functionality"],
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 bg-gray-900 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white neon-text">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`mb-20 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <div className="md:w-1/2 mb-6 md:mb-0">
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg neon-border"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(191, 90, 242, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                        whileHover={{ scale: 1.2, rotate: -10 }}
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Project image with animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                    <FaLaptopCode className="mr-2" /> Key Features
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                    <FaTools className="mr-2" /> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-900 text-purple-200 text-xs font-medium rounded-full border border-purple-700"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 10px rgba(191, 90, 242, 0.5)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaGithub size={16} />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
