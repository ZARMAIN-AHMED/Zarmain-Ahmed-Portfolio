"use client";


import Theme from "./theme/page";
import Header from "./components/Header";
import About from "./components/About";
import KeyHighlights from "./components/KeyHighlights";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/footer";
import { Chatbot } from "./components/chatbot";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-800 p-8">
        <div className="flex justify-end md:justify-end">
          <Theme />
        </div>
        <Header />
        <About />
        <KeyHighlights />
        <Skills />
        <Projects />
        <Contact />
        <Chatbot />
      </main>
    </div>
  );
}
