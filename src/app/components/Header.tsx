"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className="border border-gray-700 dark:border-gray-300 rounded-xl py-4 px-6 w-auto shadow-lg max-w-4xl mx-auto bg-gray-800 dark:bg-white transition-all duration-300 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500"
    >
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-extrabold mb-3 font-monotransition-colors duration-300"
          >
            Zarmain Ahmed <span className="text-blue-500 hover:text-purple-500 transition-colors duration-300">👨‍💻</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg mb-4 font-sans transition-colors duration-300"
          >
            <FaLaptopCode className="inline-block mr-2 hover:text-purple-500 transition-colors duration-300" /> Passionate Developer, Designer, Manager <span className="text-pink-500 hover:text-purple-500 transition-colors duration-300">🤍</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-3 mb-4 flex-wrap "
          >
            <Link href="https://www.linkedin.com/in/shereen-ahmed-9241482b5/" target="_blank">
              <div className="w-10 h-10 bg-transparent border-2  dark:border-black dark:bg-[#0A66C2] flex items-center justify-center rounded-lg hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300">
                <FaLinkedin size={20} className="text-white dark:bg-[#0A66C2] dark:border-[#0A66C2] group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
              </div>
            </Link>
            <Link href="https://x.com/ZarmainA3947" target="">
              <div className="w-10 h-10 bg-transparent border-2  dark:border-black dark:bg-[#000000]  flex items-center justify-center rounded-lg hover:bg-[#000000] hover:border-[#000000] transition-all duration-300">
                <FaXTwitter size={20} className="text-white dark:bg-[#000000] group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
              </div>
            </Link>
            <Link href="https://www.facebook.com/zarmain.ahmed.2025" target="_blank">
              <div className="w-10 h-10 bg-transparent border-2  dark:border-black dark:bg-[#1877F2] flex items-center justify-center rounded-lg hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300">
                <FaFacebook size={20} className="text-white dark:bg-[#1877F2]  group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
              </div>
            </Link>
            <Link href="https://instagram.com/zariahmed13" target="_blank">
              <div className="w-10 h-10 bg-transparent border-2 dark:border-black dark:bg-gradient-to-r  flex items-center justify-center rounded-lg hover:bg-gradient-to-r from-[#E4405F] to-[#F58529] hover:border-[#E4405F] transition-all duration-300">
                <FaInstagram size={20} className="text-white dark:bg-gradient-to-r from-[#E4405F] to-[#F58529] group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
              </div>
            </Link>
            <Link href="https://github.com/ZARMAIN-AHMED" target="_blank">
              <div className="w-10 h-10 bg-transparent border-2 dark:border-black dark:bg-[#181717] flex items-center justify-center rounded-lg hover:bg-[#181717] hover:border-[#181717] transition-all duration-300">
                <FaGithub size={20} className="text-white dark:bg-[#181717] group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-48 h-48 relative rounded-xl overflow-hidden border-4 border-white dark:border-gray-500  shadow-lg hover:border-blue-500 transition-all duration-300">
            <Image
              src="/images.jpg"
              alt="Profile"
              fill
              objectFit="cover"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
