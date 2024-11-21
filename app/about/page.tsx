export default function About() {
    const versionChanges = [
      {
        version: "13.4",
        changes: [
          "Introduction of App Router for improved server and client component integration.",
          "Enhanced support for nested layouts and loading/error states.",
          "Improved performance with the Turbopack build tool.",
        ],
      },
      {
        version: "13.2",
        changes: [
          "Stable release of Turbopack, a faster Webpack replacement.",
          "Better middleware handling for edge runtime.",
          "Introduced experimental React Server Components.",
        ],
      },
      {
        version: "12.0",
        changes: [
          "Added middleware support for edge computing.",
          "Integrated ESLint for code quality.",
          "Prepared for compatibility with React 18.",
        ],
      },
    ];
  
    return (
      <div className="bg-slate-950 min-h-screen">
        {/* Header */}
        <header className="bg-purple-700 text-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">About Next.js</h1>
            <p className="text-xl mt-4">
              Explore the powerful features and evolution of the Next.js framework.
            </p>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="container mx-auto py-10 px-6">
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">What is Next.js?</h2>
            <p className="text-lg text-white leading-relaxed">
              Next.js is a React-based framework for building scalable, high-performance web
              applications. It supports advanced features like Server-Side Rendering (SSR),
              Static Site Generation (SSG), and API routes, offering developers flexibility
              and efficiency in modern web development.
            </p>
          </section>
  
          {/* Version Changes Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">
              What&apos;s New in Next.js Versions?
            </h2>
            {versionChanges.map((version, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-semibold text-purple-700">
                  Version {version.version}
                </h3>
                <ul className="list-disc pl-6 mt-4 text-gray-800">
                  {version.changes.map((change, idx) => (
                    <li key={idx} className="text-lg mb-2">
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
  
          {/* Blogs Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Blogs and Resources</h2>
            <p className="text-lg text-emerald-400 leading-relaxed">
              The Next.js community and official team regularly share valuable insights through
              blogs. Stay updated with:
            </p>
            <ul className="list-disc pl-6 mt-4 text-amber-800 space-y-3">
              <li>
                <strong>Performance Optimization:</strong> Learn techniques to optimize rendering and asset delivery.
              </li>
              <li>
                <strong>Latest Features:</strong> Understand new updates in Next.js versions and how to leverage them.
              </li>
              <li>
                <strong>Case Studies:</strong> Explore how leading companies use Next.js for scalability and performance.
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a
                href="/blog"
                className="inline-block px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition-all"
              >
                Read Our Blogs
              </a>
            </div>
          </section>
        </main>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} My Next.js Blog | All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
  