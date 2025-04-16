"use client";

import { motion } from "framer-motion";
import { FaCode, FaPalette, FaMobile, FaRocket, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode className="text-3xl text-blue-500" />,
    title: "Frontend Development",
    description: "Expert in building responsive and interactive web applications using modern technologies",
    emoji: "💻"
  },
  {
    icon: <FaPalette className="text-3xl text-purple-500" />,
    title: "UI/UX Design",
    description: "Creating beautiful and user-friendly interfaces with attention to detail",
    emoji: "🎨"
  },
  {
    icon: <FaMobile className="text-3xl text-green-500" />,
    title: "Responsive Design",
    description: "Building websites that work perfectly on all devices and screen sizes",
    emoji: "📱"
  },
  {
    icon: <FaRocket className="text-3xl text-red-500" />,
    title: "Performance Optimization",
    description: "Ensuring fast loading times and smooth user experience",
    emoji: "⚡"
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-500" />,
    title: "Problem Solving",
    description: "Creative solutions to complex development challenges",
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
