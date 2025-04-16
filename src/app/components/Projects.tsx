"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Q-commerce Website",
    description: "A full-stack Q-commerce platform built with Next.js.",
    image: "/websit.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Headless CMS"],
    link: "https://hakathon-03-foodtuck-4xhq.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with animations and dark mode",
    image: "/portfolio.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://portfolio6-again-v2x8.vercel.app/",
  },
  {
    title: "Book Library",
    description: "A digital book library built with Next.js and Tailwind CSS",
    image: "/book.png",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://assign10-api-ngyc.vercel.app/",
  },
  {
    title: "Simple Portfolio",
    description: "A minimalist personal portfolio built with Next.js and Tailwind CSS",
    image: "/simple.png",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://assignment05-simpleportfolio.vercel.app/",
  },
  {
    title: "E-commerce Website",
    description: "An online shopping platform created using Next.js and Tailwind CSS",
    image: "/web.png",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://milestone3project-o1li.vercel.app/",
  },
  {
    title: "Clinic Website",
    description: "A medical clinic website built for appointments and info",
    image: "/clinic.png",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://clinic-website7-uzoj.vercel.app/",
  },
];

export default function Projects() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="mt-10 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="border border-gray-700 dark:border-gray-300 rounded-xl py-6 px-8 bg-gray-800 dark:bg-white shadow-lg hover:border-blue-500 dark:hover:border-blue-500"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="text-2xl font-semibold mb-6 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.link} target="_blank">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="group border border-gray-700 dark:border-gray-300 rounded-lg overflow-hidden bg-gray-800 dark:bg-white shadow-md hover:shadow-blue-500/30 transition duration-300 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                  </motion.div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 dark:text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 dark:bg-gray-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
