"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-10 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.01 }}
        className="border border-gray-700 dark:border-gray-300 rounded-xl py-4 px-6 bg-gray-800 dark:bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-2xl font-semibold mb-4 font-mono flex items-center transition-colors duration-300"
        >
          <FaUserTie className="mr-2 text-blue-500 hover:text-purple-500 transition-colors duration-300" /> About Me <span className="ml-2 hover:text-purple-500 transition-colors duration-300">👋</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base leading-relaxed font-sanstransition-colors duration-300"
        >
          <FaLightbulb className="inline-block mr-2 text-yellow-500 transition-colors duration-300" />I’m Zarmain Ahmed, a passionate Frontend Developer and Student Leader at GIAIC, currently pursuing (Agentic AI Software Engineering).
I specialize in building modern, responsive web interfaces using HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS.
As a creative UI/UX Designer, I focus on delivering clean, user-friendly designs.
I'm also learning Python to strengthen my backend and AI skills.
I'm committed to continuous learning and creating meaningful digital experiences.I have also participated in a hackathon, honing my skills further. Though my course covers IT, starting with full-stack and later advancing to AI, I am currently focused on mastering frontend technologies,
 preparing for more complex AI topics in the future.

. <span className="text-blue-500 hover:text-purple-500 transition-colors duration-300">🚀</span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
} 