"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaTasks,
  FaCode,
} from "react-icons/fa";

const experienceData = [
  {
    year: "Present",
    title: "Web Developer",
    subtitle: "Humane Action Pennsylvania",
    description: "Developing modern web applications.",
    skills: [
      ".NET Core",
      "RestFul API's",
      "MySQL",
      "Payment Gateways",
      "SEO ",
      "Wordpress",
      "JavaScript",
    ],
    responsibilities: [
      "Lead front-end development for organization website",
      "Implement responsive designs",
      "Optimize site performance",
    ],
  },
  {
    year: "Jan'24-May'24",
    title: "Full-Stack Developer",
    subtitle: "Nationwide Insurance",
    description: "Building full-stack applications.",
    skills: ["React", ".NET Core", "Postgres SQL", "TypeScript", "AWS"],
    responsibilities: [
      "Built Restful APIs in a microservices setup for modular and independent services",
      "Created interactive UI components",
      "Participated in code reviews",
    ],
  },
  {
    year: "Jan'19-July'22",
    title: "Sr. Software Engineer",
    subtitle: "LTIMindtree",
    description: "Developing enterprise web solutions.",
    skills: [
      "Angular",
      "Blazor",
      ".NET Core",
      "Node.js",
      "SQL Server",
      "Azure",
    ],
    responsibilities: [
      "Designed and developed monolithic architecture applications",
      "Mentored junior developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    year: "Jan'18- Dec'18",
    title: "Software Developer",
    subtitle: "Surya Allied Services",
    description: "Assisting in application development.",
    skills: ["C#", ".NET Core", "Entity Framework", "JavaScript", "SQL", "Git"],
    responsibilities: [
      "Maintained existing applications",
      "Fixed bugs and implemented new features",
      "Wrote unit tests",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 bg-black flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white neon-text">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <motion.div
                    className="bg-purple-900 text-white py-2 px-4 rounded-lg inline-block neon-border"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-purple-400" />
                      <h3 className="text-xl font-bold">{exp.year}</h3>
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-3/4">
                  <motion.div
                    className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 neon-border"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 0 20px rgba(191, 90, 242, 0.3)",
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <FaBriefcase className="text-purple-500 mr-2" />
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <FaBuilding className="text-purple-500 mr-2" />
                      <h4 className="text-lg font-semibold text-purple-400">
                        {exp.subtitle}
                      </h4>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                        <FaTasks className="mr-2" /> Responsibilities
                      </h5>
                      <ul className="list-disc list-inside text-gray-300 mb-4">
                        {exp.responsibilities.map((responsibility, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -10 }
                            }
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                        <FaCode className="mr-2" /> Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-900 text-purple-200 text-xs font-medium rounded-full border border-purple-700"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + index * 0.1 + skillIndex * 0.05,
                            }}
                            whileHover={{
                              scale: 1.1,
                              boxShadow: "0 0 10px rgba(191, 90, 242, 0.5)",
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
