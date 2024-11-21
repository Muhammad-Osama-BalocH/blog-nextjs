import React from "react";

function Blog() {
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
          "New API for edge and serverless functions.",
          "Introduction of performance dashboards in Vercel integration.",
          "Stability improvements for the App Router.",
          "Improved file-based routing performance.",
          "Enhanced developer experience with built-in debugging tools.",
        ],
        description: `Version 14.0 emphasizes stability and performance, introducing new APIs 
        for edge and serverless functions while offering advanced performance dashboards for Vercel users.
        The built-in debugging tools elevate the developer experience.`,
      },
    {
        version: "15.0",
        features: [
          "Native support for AI and machine learning-based optimization.",
          "Enhanced routing performance for larger applications.",
          "Introduction of React Server Actions for improved API handling.",
          "Enhanced error-handling mechanisms for both client and server.",
          "Support for Edge Runtime v3 for faster server-side computation.",
        ],
        description: `Version 15.0 focuses on integrating AI and machine learning optimizations,
        making it a cutting-edge tool for modern web applications. Developers can leverage React Server Actions
        to streamline their API interactions and ensure smooth error handling across client and server operations.`,
      },
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
  
      <header className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-16 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-tight">Next.js Blog Updates</h1>
          <p className="text-2xl mt-6">
            Discover the latest updates and features introduced in each version of Next.js.
          </p>
        </div>
      </header>

      <div className="container mx-auto mt-12 px-6">
    {versions.map((version, index) => (
     <div
            key={index}
            className="bg-green-500 rounded-lg shadow-lg p-8 mb-12 hover:shadow-2xl transition-all"
          >
            <h2 className="text-5xl font-bold text-purple-600 mb-6 text-center">
              Next.js {version.version}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              {version.description}
            </p>
            <ul className="space-y-4 list-disc list-inside">
                
              {version.features.map((feature, idx) => (

                <li key={idx} className="text-lg text-gray-800">
                  {feature}

                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-xl font-light">
            Stay tuned for more updates about Next.js!
          </p>
          <p className="text-sm mt-4">
            
            © {new Date().getFullYear()} Next.js Blog | Designed by YRR
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
