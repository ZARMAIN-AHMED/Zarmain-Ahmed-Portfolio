'use client'
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if darkMode is saved in localStorage
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);

    // Apply the dark mode class if needed
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Store the new theme preference in localStorage
    localStorage.setItem("darkMode", newMode.toString());

    // Apply the dark mode class
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
