"use client"

import { motion } from "framer-motion"
import { FaHeart, FaReact, FaCloud } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-purple-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 flex items-center flex-wrap justify-center">
            <span className="mx-1">Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="mx-1 text-purple-500"
            >
              <FaHeart className="inline" />
            </motion.span>
            <span className="mx-1">by Nisar Ahmed.</span>
            <span className="mx-1">Powered by</span>
            <span className="mx-1 text-purple-400 flex items-center">
              <FaReact className="inline mr-1" /> React.js
            </span>
            <span className="mx-1">&</span>
            <span className="mx-1 text-purple-400">Tailwind CSS.</span>
            <span className="mx-1">Deployed on</span>
            <span className="mx-1 text-purple-400 flex items-center">
              <FaCloud className="inline mr-1" /> Vercel
            </span>
          </p>
          <p className="text-gray-600 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}
