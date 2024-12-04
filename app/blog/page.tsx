"use client";
import React, { useState } from "react";
import { FaSun, FaMoon,} from "react-icons/fa";

function Blog() {
  const [darkMode, setDarkMode] = useState(false);

  const versions = [
    {
      version: "12.0",
      features: [
        "Middleware support for edge routing.",
        "Built-in ESLint configuration for better code quality.",
        "Initial compatibility with React 18 features.",
        "Improved static generation with ISR (Incremental Static Regeneration).",
        "Automatic image optimization with the next/image component.",
      ],
      description: `Version 12.0 laid the foundation for compatibility with React 18.
      It introduced middleware for edge routing and Incremental Static Regeneration (ISR) to optimize
      performance. Developers also benefited from automatic image optimization and built-in ESLint.`,
    },
    {
      version: "13.0",
      features: [
        "Introduction of the App Router for component-based routing.",
        "Enhanced layout support with nested routing and error boundaries.",
        "Beta release of Turbopack for fast builds.",
        "Improved support for React Server Components.",
        "Streaming and Suspense support for better page performance.",
      ],
      description: `Version 13.0 revolutionized routing in Next.js with the introduction of the App Router.
      This version also brought Turbopack for faster builds and enhanced React Server Component compatibility.
      Streaming and Suspense features improve rendering efficiency for large-scale applications.`,
    },
    {
      version: "14.0",
      features: [
        "Improved streaming for server-side rendering.",
        "Built-in analytics API for performance monitoring.",
        "Optimized caching with server-side data hydration.",
        "Advanced static generation options.",
        "Enhanced error handling for server and client.",
      ],
      description: `Version 14.0 introduced improved server-side rendering with streaming support.
      It also added a built-in analytics API and enhanced caching mechanisms for faster data hydration.`,
    },
    {
      version: "15.0",
      features: [
        "Dynamic static rendering for hybrid apps.",
        "Native WebSocket support for real-time applications.",
        "Enhanced incremental builds for large projects.",
        "Server-side A/B testing tools.",
        "Improved deployment integration with Vercel.",
      ],
      description: `Version 15.0 focused on improving developer efficiency with dynamic static rendering.
      Native WebSocket support and A/B testing tools enable real-time and experimental features for applications.`,
    },
  ];

  const commands = [
    { command: "npx create-next-app", description: "Create a new Next.js project." },
    { command: "next dev", description: "Start the development server." },
    { command: "next build", description: "Build the project for production." },
    { command: "next start", description: "Start the production server." },
    { command: "next export", description: "Export the app as a static site." },
  ];

  return (
    <div className={darkMode ? "dark bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"}>

      <header className="bg-gradient-to-r from-slate-900 to-slate-500 text-white shadow-lg">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold">Next.js Blog</h1>
          <ul className="flex space-x-6">
            <li className="group relative">

              <a href="#" className="hover:text-yellow-300">Versions</a>

              <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded">

                {versions.map((version, index) => (
                  <li key={index}>
                    <a href="#updates" className="block px-4 py-2 hover:bg-gray-200">
                      {version.version}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="hover:text-yellow-300">
              <a href="#commands">Commands</a>
            </li>
            <li className="hover:text-yellow-300">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-yellow-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
  
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white text-xl focus:outline-none hover:text-yellow-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <div className="container mx-auto text-center py-10">
          <h2 className="text-5xl font-extrabold tracking-tight">Discover Next.js Features</h2>
          <p className="text-xl mt-4">
            Stay up-to-date with the latest enhancements and tools for web development.
          </p>
        </div>
      </header>

 
      <section id="updates" className="container mx-auto mt-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Version Updates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {versions.map((version, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                Next.js {version.version}
              </h3>
              <p className="mb-4">{version.description}</p>
              <ul className="list-disc list-inside space-y-2">

                {version.features.map((feature, idx) => (

                  <li key={idx} className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="commands" className="container mx-auto mt-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Common Commands</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">

          <ul className="space-y-6">
            {commands.map((cmd, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <span className="font-bold text-purple-600">{cmd.command}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {cmd.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

 
      <footer
        id="contact"
        className="bg-gray-900 text-white py-10 mt-16 sticky bottom-0"
      >
        <div className="container mx-auto text-center">
          <p className="text-xl font-light">
            Built with Tailwind CSS and Next.js
          </p>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} Designed by Muhammad Osama
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
