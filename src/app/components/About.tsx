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
          <FaLightbulb className="inline-block mr-2 text-yellow-500 transition-colors duration-300" />I’m Zarmain Ahmed, an Agentic AI Engineer, Full-Stack Developer, and Student Leader at GIAIC, currently pursuing Agentic AI Software Engineering. I specialize in building intelligent, responsive, and scalable web applications using Python, TypeScript, Java, Next.js, Tailwind CSS, HTML, and CSS.

As a creative UI/UX Designer, I focus on delivering clean, intuitive, and user-friendly interfaces that enhance digital experiences. My journey started with full-stack development and has now evolved toward Agentic AI systems — smart, context-aware, and autonomous applications.

I’m passionate about continuous learning and real-world application of skills. I’ve participated in a hackathon, gaining valuable experience in collaboration and problem-solving.

Currently, I’m working on bridging design, development, and AI to create innovative, human-aligned digital solutions. 

. <span className="text-blue-500 hover:text-purple-500 transition-colors duration-300">🚀</span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
} 