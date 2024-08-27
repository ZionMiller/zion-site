import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-200 w-full z-10 top-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/zion-logo.png"
            alt="Zion Miller Logo"
            className="h-12"
          />
        </a>
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <ul className="flex space-x-4 text-gray-800 text-xl">
            <li>
              <a href="#about" className="py-2 px-3 rounded hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-300" aria-current="page">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="py-2 px-3 rounded hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="py-2 px-3 rounded hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#articles" className="py-2 px-3 rounded hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-300">
                Articles
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:ml-auto">
          <a href="mailto:zionmillerbusiness@gmail.com" className="bg-blue-400 text-white text-xl py-2 px-6 rounded-lg hover:bg-blue-500 hover:text-white focus:ring-2 focus:ring-blue-300">
            Contact
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none ml-auto"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-gray-400 bg-opacity-90 z-20 ${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="navbar-menu"
      >
        <div className="flex flex-col h-full p-4 space-y-4">
          <button
            onClick={toggleMenu}
            className="text-white self-end focus:outline-none"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#about" className="text-white py-2 px-3 rounded hover:bg-blue-400 focus:ring-2 focus:ring-blue-300">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white py-2 px-3 rounded hover:bg-blue-400 focus:ring-2 focus:ring-blue-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white py-2 px-3 rounded hover:bg-blue-400 focus:ring-2 focus:ring-blue-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#blogs" className="text-white py-2 px-3 rounded hover:bg-blue-400 focus:ring-2 focus:ring-blue-300">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
