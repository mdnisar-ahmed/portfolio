"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from "react-icons/fa"

const educationData = [
  {
    year: "2022 - 2024",
    title: "Master's Degree",
    subtitle: "University of Central Missouri",
    description: "Master of Science in Computer Science, focusing on Artificial Intelligence and Machine Learning.",
    achievements: ["Graduated with Honors", "Research Assistant", "Published 2 Papers"],
  },
  {
    year: "2014 - 2018",
    title: "Bachelor's Degree",
    subtitle: "Chaitanya Bharathi Institute of Technology",
    description:
      "Bachelor of Engineering in Computer Science. Laid the foundation for my software development career with courses in programming basics, data structures, and web development.",
    achievements: ["Dean's List", "Hackathon Winner", "Teaching Assistant"],
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="education" ref={ref} className="min-h-screen py-20 bg-gray-900 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white neon-text">Education Journey</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-900"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Glowing effect on the timeline */}
              <div className="absolute inset-0 bg-purple-500 blur-sm opacity-30"></div>
            </motion.div>

            {/* Timeline items */}
            {educationData.map((item, index) => (
              <div key={index} className="mb-16 relative">
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-600 z-10 flex items-center justify-center neon-border"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaGraduationCap className="text-white" />
                </motion.div>

                <motion.div
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                    <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="flex items-center mb-2 justify-end">
                        <FaCalendarAlt className="text-purple-500 mr-2" />
                        <h3 className="text-xl font-bold text-purple-400">{item.year}</h3>
                      </div>
                      <div className="flex items-center mb-2 justify-end">
                        <FaUniversity className="text-purple-500 mr-2" />
                        <h4 className="text-lg text-gray-300">{item.subtitle}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-8">
                    <motion.div
                      className={`bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 ${
                        index % 2 === 0 ? "md:ml-4" : "md:mr-4"
                      } neon-border`}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 0 20px rgba(191, 90, 242, 0.3)",
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>

                      {/* <div className="mt-4">
                        <h5 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                          <FaAward className="mr-2" /> Achievements
                        </h5>
                        <ul className="list-disc list-inside text-gray-300">
                          {item.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                              className="text-sm"
                            >
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div> */}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
