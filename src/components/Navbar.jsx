import React, { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  PencilIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <HomeIcon className="h-5 w-5 mr-2" /> },
    { name: "About", icon: <UserIcon className="h-5 w-5 mr-2" /> },
    { name: "Projects", icon: <CodeBracketIcon className="h-5 w-5 mr-2" /> },
    { name: "Skills", icon: <PencilIcon className="h-4 w-5 mr-2" /> },
    { name: "Contact", icon: <EnvelopeIcon className="h-5 w-5 mr-2" /> },
    { name: "Social Media", icon: <ChatBubbleLeftIcon className="h-5 w-5 mr-2" /> },
    { name: "Resume", icon: <DocumentTextIcon className="h-5 w-5 mr-2" /> },
  ];

  return (
    <nav className=" fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      {/* Enhanced Navbar Container with Gradient Background */}
      <div className=" flex items-center justify-between bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-b-full shadow-2xl px-6 py-3 border border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_#3B82F6] hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30">
      
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-1 gap-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`
                flex items-center text-white font-medium px-4 py-3 rounded-xl transition-all duration-300
                border border-white/10 backdrop-blur-sm
                ${activeItem === item.name
                  ? "bg-gradient-to-r from-blue-500/50 to-purple-500/50 shadow-lg scale-105 border-blue-400/50"
                  : "bg-black/20 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105 hover:shadow-lg"}
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center w-fit">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-3 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/20 backdrop-blur-sm hover:from-blue-500/50 hover:to-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      

      {/* Mobile Menu with Enhanced Styling */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl shadow-2xl px-4 py-4 flex flex-col gap-2 border border-white/20">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveItem(item.name);
                setIsOpen(false);
              }}
              className={`
                flex items-center justify-start w-full text-white font-medium px-4 py-3 rounded-xl transition-all duration-300
                border border-white/10 backdrop-blur-sm
                ${activeItem === item.name
                  ? "bg-gradient-to-r from-blue-500/50 to-purple-500/50 shadow-lg scale-105 border-blue-400/50"
                  : "bg-black/20 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105"}
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}