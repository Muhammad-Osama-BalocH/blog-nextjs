import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="bg-gray-800 py-6 shadow-lg">
        <div className="container mx-auto flex justify-center items-center space-x-10">
          <Link href="/">
            <span className="text-xl font-extralight hover:text-purple-400 cursor-pointer translate-x-11">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-xl font-bold hover:text-purple-400 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-xl font-bold hover:text-purple-400 cursor-pointer">
              Blog
            </span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto mt-16 text-center px-4">
        <div className="flex justify-center">
          <Image
            src="/image.jpg"
            alt="Next.js Logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

  
        <h1 className="text-5xl font-extrabold mt-10">Welcome to My Next.js Blog</h1>
        <p className="text-lg mt-4 text-gray-400">
          Explore the power of Next.js with our comprehensive guides and blogs.
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-purple-400">What&apos;s New in Next.js?</h2>
          <p className="text-gray-300 mt-4">
            Dive into the latest updates, from version 12 to 15, and learn about the cutting-edge
            features that make Next.js a leader in web development.
          </p>
          <div className="mt-6">
            <Link href="/blog">
              <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-bold text-white">
                Read the Blog
              </button>
            </Link>
          </div>
        </div>
      </div>

   
      <footer className="bg-gray-800 text-gray-400 py-6 mt-16">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} My Next.js Blog | All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
