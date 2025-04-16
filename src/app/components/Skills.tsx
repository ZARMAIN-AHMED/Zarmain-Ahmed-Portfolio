"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaFigma,
  FaMobile,
  FaCode
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3
} from "react-icons/si";

const skills = [
  { name: "HTML5", level: "95%", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: "95%", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", level: "95%", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", level: "90%", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", level: "95%", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", level: "100%", icon: <SiNextdotjs className="text-black dark:text-black" /> },
  { name: "Tailwind CSS", level: "100%", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "UI/UX Design", level: "95%", icon: <FaFigma className="text-purple-500" /> },
  { name: "Frontend Development", level: "100%", icon: <FaCode className="text-green-500" /> },
  { name: "Responsive Design", level: "95%", icon: <FaMobile className="text-pink-500" /> }
];

export default function Skills() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="mt-10 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="border border-gray-700 dark:border-gray-300 rounded-xl py-4 px-6 bg-gray-800 dark:bg-white shadow-lg hover:border-blue-500 dark:hover:border-blue-500"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-2xl font-semibold mb-6 font-mono flex items-center"
        >
          <span className="mr-2">💻</span> Technical Skills <span className="ml-2">🚀</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
              className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700 dark:bg-gray-100 border border-transparent hover:border-blue-500 dark:hover:border-blue-500 shadow-md hover:shadow-blue-500/30 transition duration-300"
            >
              <div className="text-2xl">
                {skill.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium font-sans">{skill.name}</span>
                  <span className="text-sm text-gray-300 dark:text-gray-600">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-600 dark:bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
