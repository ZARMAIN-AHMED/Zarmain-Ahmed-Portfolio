"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-200 text-white dark:text-black py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Name & Title */}
        <h2 className="text-2xl font-bold mb-2">
          Zarmain Ahmed 
        </h2>
        <p className="text-lg mb-6 font-mono">
            Agentic AI Developer & Full Stack Developer
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mb-4">
          <Link
            href="https://github.com/ZARMAIN-AHMED"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition duration-200"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/shereen-ahmed-9241482b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition duration-200"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://www.facebook.com/zarmain.ahmed.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition duration-200"
          >
            <FaFacebook />
          </Link>

          <Link
            href="https://x.com/ZarmainA3947"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition duration-200"
          >
            <FaXTwitter />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 dark:text-black">
          © {new Date().getFullYear()} Built by  Zarmain Ahmed❤️
        </p>
      </div>
    </footer>
  );
}
