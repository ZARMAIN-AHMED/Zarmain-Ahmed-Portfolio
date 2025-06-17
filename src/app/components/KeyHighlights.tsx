"use client";

import { motion } from "framer-motion";
import { FaCode, FaBrain, FaPalette, FaLaptopCode, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: <FaBrain className="text-3xl text-yellow-500" />,
    title: "Agentic AI Engineering",
    description: "Designing intelligent, context-aware systems using Python and emerging AI paradigms.",
    emoji: "🧠"
  },
  {
    icon: <FaCode className="text-3xl text-blue-500" />,
    title: "Full-Stack Development",
    description: "Building scalable web applications using modern tech like Next.js, TypeScript & Java.",
    emoji: "🧩"
  },
  {
    icon: <FaPalette className="text-3xl text-purple-500" />,
    title: "UI/UX Design",
    description: "Crafting clean, accessible, and visually appealing user interfaces with purpose.",
    emoji: "🎨"
  },
  {
    icon: <FaLaptopCode className="text-3xl text-green-500" />,
    title: "Responsive Frontends",
    description: "Developing responsive, mobile-friendly UIs using Tailwind CSS and HTML/CSS.",
    emoji: "📱"
  },
  {
    icon: <FaLightbulb className="text-3xl text-red-500" />,
    title: "Creative Problem Solving",
    description: "Bringing innovation to life through real-world hackathons and team collaboration.",
    emoji: "💡"
  }
];

export default function KeyHighlights() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-10 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="border border-gray-700 dark:border-gray-300 rounded-xl py-4 px-6 bg-gray-800 dark:bg-white shadow-lg hover:border-blue-500 dark:hover:border-blue-500"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-2xl font-semibold mb-6 font-mono flex items-center"
        >
          <span className="mr-2">✨</span> Key Highlights <span className="ml-2">🌟</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-gray-700 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 
                         transition-all duration-300 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 
                         hover:bg-gray-600 dark:hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-mono flex items-center">
                    {highlight.title} <span className="ml-2">{highlight.emoji}</span>
                  </h3>
                  <p className="text-gray-300 dark:text-gray-600 mt-1 font-sans">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
