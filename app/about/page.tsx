import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-amber-400 to-blue-300 overflow-hidden">
 
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 opacity-30 rounded-full blur-[120px] animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-[150px] animate-pulse"></div>
      </div>

   
      <div className="container mx-auto px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold mb-8 text-center leading-tight tracking-tight drop-shadow-lg">
          About Our Blog
        </h1>
        <p className="text-lg mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          Welcome to our blog! We&#39;re committed to sharing knowledge, insights, and inspiration 
          to empower a community of learners and thinkers.
        </p>

 
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-base leading-relaxed">
              To educate, inspire, and empower our readers by delivering high-quality, engaging 
              content that sparks curiosity and fosters growth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Cutting-edge technology and innovation</li>
              <li>Programming tutorials and resources</li>
              <li>Personal development and productivity tips</li>
              <li>Web development trends and best practices</li>
              <li>Deep dives into artificial intelligence</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-base leading-relaxed">
              A passionate team of writers, developers, and creators who believe in the 
              transformative power of sharing knowledge and building a curious, collaborative 
              community.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-base leading-relaxed">
              Be part of our growing community. Share your thoughts, engage in discussions, 
              and connect with us through our blog or social platforms. Together, we can grow 
              and learn.
            </p>
          </div>
        </div>

     
        <div className="mt-14 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-base leading-relaxed">
            Have questions, feedback, or just want to say hi? Email us at{' '}
            <a
              href="mailto:contact@ourblog.com"
              className="underline decoration-dotted text-yellow-300 hover:text-yellow-400 transition"
            >
              contact@ourblog.com
            </a>
          </p>
        </div>
      </div>

    
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-[150px] animate-spin-slow"></div>
    </div>
  );
}
