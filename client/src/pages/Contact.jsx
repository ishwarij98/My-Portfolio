import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Me</h2>
      
      {/* Contact Links */}
      <div className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 text-center">
        <a
          href="https://www.linkedin.com/in/ishwarijamodkar08ij/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mb-4 block text-xl"
        >
          LinkedIn Profile
        </a>
        <a
          href="mailto:ishwarijamodkar08@gmail.com"
          className="text-gray-800 dark:text-gray-200 hover:underline block text-xl"
        >
          Email: ishwarijamodkar08@gmail.com
        </a>
      </div>
    </section>
  );
}
