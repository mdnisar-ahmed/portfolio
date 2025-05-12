"use client"

import React, { useEffect, useState } from "react"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, OrbitControls, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaHtml5,
  FaCss3,
  FaCode,
  FaAws,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa"
import { SiDotnet, SiMongodb, SiFirebase, SiRedux, SiNgrx, SiTailwindcss, SiExpress } from "react-icons/si"

// Skills data with icons and colors
const skillsGroups = [
  [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    { name: "Azure", icon: FaServer, color: "#0078D4" },
  ],
  [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3, color: "#1572B6" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name: "C#", icon: FaCode, color: "#239120" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
  ],
  [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "NgRx", icon: SiNgrx, color: "#BA2BD2" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Express", icon: SiExpress, color: "#000000" },
  ],
]

// Cube component that rotates
function SkillsCube({ skills, position, rotationSpeed = { x: 0.2, y: 0.3 } }) {
  const mesh = useRef<any>()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate the cube
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * rotationSpeed.x
      mesh.current.rotation.y += delta * rotationSpeed.y
    }
  })

  return (
    <Box
      args={[2.5, 2.5, 2.5]}
      ref={mesh}
      scale={active ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={position}
    >
      {/* Front face */}
      <meshStandardMaterial attach="material-0" color={skills[0].color} metalness={0.5} roughness={0.2} />
      <Html position={[0, 0, 1.26]} transform scale={0.4} rotation={[0, 0, 0]} center>
        <div className="flex flex-col items-center justify-center">
          {React.createElement(skills[0].icon, { size: 40, color: skills[0].color })}
          <div className="text-white text-center mt-2 font-bold">{skills[0].name}</div>
        </div>
      </Html>

      {/* Back face */}
      <meshStandardMaterial attach="material-1" color={skills[1].color} metalness={0.5} roughness={0.2} />
      <Html position={[0, 0, -1.26]} transform scale={0.4} rotation={[0, Math.PI, 0]} center>
        <div className="flex flex-col items-center justify-center">
          {React.createElement(skills[1].icon, { size: 40, color: skills[1].color })}
          <div className="text-white text-center mt-2 font-bold">{skills[1].name}</div>
        </div>
      </Html>

      {/* Top face */}
      <meshStandardMaterial attach="material-2" color={skills[2].color} metalness={0.5} roughness={0.2} />
      <Html position={[0, 1.26, 0]} transform scale={0.4} rotation={[-Math.PI / 2, 0, 0]} center>
        <div className="flex flex-col items-center justify-center">
          {React.createElement(skills[2].icon, { size: 40, color: skills[2].color })}
          <div className="text-white text-center mt-2 font-bold">{skills[2].name}</div>
        </div>
      </Html>

      {/* Bottom face */}
      <meshStandardMaterial attach="material-3" color={skills[3].color} metalness={0.5} roughness={0.2} />
      <Html position={[0, -1.26, 0]} transform scale={0.4} rotation={[Math.PI / 2, 0, 0]} center>
        <div className="flex flex-col items-center justify-center">
          {React.createElement(skills[3].icon, { size: 40, color: skills[3].color })}
          <div className="text-white text-center mt-2 font-bold">{skills[3].name}</div>
        </div>
      </Html>

      {/* Right face */}
      <meshStandardMaterial attach="material-4" color={skills[4].color} metalness={0.5} roughness={0.2} />
      <Html position={[1.26, 0, 0]} transform scale={0.4} rotation={[0, Math.PI / 2, 0]} center>
        <div className="flex flex-col items-center justify-center">
          {React.createElement(skills[4].icon, { size: 40, color: skills[4].color })}
          <div className="text-white text-center mt-2 font-bold">{skills[4].name}</div>
        </div>
      </Html>

      {/* Left face */}
      <meshStandardMaterial attach="material-5" color={skills[5].color} metalness={0.5} roughness={0.2} />
      <Html position={[-1.26, 0, 0]} transform scale={0.4} rotation={[0, -Math.PI / 2, 0]} center>
        <div className="flex flex-col items-center justify-center">
          {React.createElement(skills[5].icon, { size: 40, color: skills[5].color })}
          <div className="text-white text-center mt-2 font-bold">{skills[5].name}</div>
        </div>
      </Html>
    </Box>
  )
}

// Main component that renders the canvas with multiple cubes
function SkillsCubeContent() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Multiple cubes with different positions and rotation speeds */}
      <SkillsCube skills={skillsGroups[0]} position={[-4, 0, 0]} rotationSpeed={{ x: 0.2, y: 0.3 }} />
      <SkillsCube skills={skillsGroups[1]} position={[0, 0, 0]} rotationSpeed={{ x: 0.3, y: 0.2 }} />
      <SkillsCube skills={skillsGroups[2]} position={[4, 0, 0]} rotationSpeed={{ x: 0.25, y: 0.25 }} />

      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  )
}

// Main component that renders the canvas
export default function SkillsCubeCanvas() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <motion.div
      className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden neon-border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {isMounted && <SkillsCubeContent />}
    </motion.div>
  )
}
