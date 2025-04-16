'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChatMessage } from './chatbotmessage'

type Message = {
  text: string
  sender: 'user' | 'bot'
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! 👋 I'm personal portfolio guide. Ask me about skills, learning, and projects!", sender: 'bot' }
  ])
  const [input, setInput] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()

    // Greeting
    if (
      msg.includes("assalamualaikum") || msg.includes("salam") || msg.includes("hello") || msg.includes("hi") ||
      msg.includes("hlo") || msg.includes("hey")
    ) {
      return "Hye, Wa Alaikum Assalam! How can I assist you today?"
    }

    if (msg.includes("how are you") || msg.includes("how's it going") || msg.includes("how do you do")) {
      return "I'm doing great! Thank you for asking. How about you?"
    }

    if (msg.includes("can you help me") || msg.includes("i need help") || msg.includes("help")) {
      return "Of course! I'm here to help you with information about this portfolio. Ask away!"
    }

    if (msg.includes("can i ask you a question") || msg.includes("may i ask") || msg.includes("question")) {
      return "Yes, feel free to ask any questions about Zarmain's skills, projects, AI journey, or contact info!"
    }

    if (msg.includes("great") || msg.includes("i am good") || msg.includes("i'm fine")) {
      return "Great to hear that! What can I help you with today?"
    }

    // Portfolio
    if (
      msg.includes("what is your name") || msg.includes("who are you") ||
      msg.includes("your name") || msg.includes("zarmain") || msg.includes("who built this site")
    ) {
      return "This portfolio belongs to Zarmain Ahmed — a passionate frontend developer currently studying Artificial Intelligence."
    }

    if (
      msg.includes("what projects have you worked on") ||
      msg.includes("can you tell me about your projects") ||
      msg.includes("project") || msg.includes("your work") || msg.includes("portfolio projects")
    ) {
      return "Zarmain has worked on a Dynamic E-commerce Website, a Food Delivery App, and a Blog CMS using Next.js and Tailwind CSS. Type 'e-commerce' or 'food app' to learn more."
    }

    if (
      msg.includes("tell me about the e-commerce project") ||
      msg.includes("e-commerce") || msg.includes("online store")
    ) {
      return "The E-commerce site is built using Next.js, Tailwind CSS, and Sanity CMS. It features dynamic product pages, category filters, and a responsive cart system."
    }

    if (
      msg.includes("tell me about the food app") ||
      msg.includes("food") || msg.includes("food delivery app") || msg.includes("food project")
    ) {
      return "The Food Delivery App offers a clean and responsive UI with dynamic menus, categories, and a checkout flow. Built with React, Tailwind CSS, and mock APIs."
    }

    if (
      msg.includes("what are your skills") ||
      msg.includes("what technologies do you know") ||
      msg.includes("tech stack") || msg.includes("skills")
    ) {
      return "Zarmain is skilled in HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Sanity CMS, Git, and basic Python."
    }

    if (
      msg.includes("are you learning ai") ||
      msg.includes("do you study artificial intelligence") ||
      msg.includes("ai") || msg.includes("artificial intelligence")
    ) {
      return "Yes! Zarmain is currently studying Artificial Intelligence to explore the world of Machine Learning, Deep Learning, and future technologies."
    }

    if (
      msg.includes("tell me about yourself") || msg.includes("who is zarmain") ||
      msg.includes("about you") || msg.includes("about")
    ) {
      return "Zarmain Ahmed is a frontend developer focused on creating beautiful, functional, and responsive websites. With a love for clean UI and smart UX, she's continuously learning and building."
    }

    if (
      msg.includes("how can i contact you") ||
      msg.includes("contact info") || msg.includes("email") || msg.includes("contact")
    ) {
      return "You can contact Zarmain via email at zarmain@example.com or through the Contact section of this portfolio. 😊"
    }

    if (
      msg.includes("who designed this site") ||
      msg.includes("portfolio") || msg.includes("site") || 
      msg.includes("which language did you use to create the portfolio") ||
      msg.includes("is it responsive")
    ) {
      return "This portfolio was designed and developed by Zarmain Ahmed using Next.js, React, Tailwind CSS, and ShadCN UI. It’s fully responsive and interactive!"
    }

    // Fallback
    return "Sorry, I didn't understand that. You can ask me about Zarmain's skills, projects, AI studies, or how to get in touch!"
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg: Message = { text: input, sender: 'user' }
    const botMsg: Message = { text: getBotResponse(input), sender: 'bot' }
    setMessages(prev => [...prev, userMsg, botMsg])
    setInput("")
  }

  return (
    <>
      <button
        className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg z-50 animate-bounce"
        onClick={() => setIsModalOpen(true)}
      >
        🗨️
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <button
              className="absolute top-2 right-2 text-lg text-gray-500 dark:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              ❌
            </button>
            <div className="h-64 overflow-y-auto pr-2 mb-4">
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} text={msg.text} sender={msg.sender} />
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="dark:bg-gray-700 text-black dark:text-white"
              />
              <Button onClick={handleSend} className="dark:bg-blue-600 dark:text-white">Send</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
