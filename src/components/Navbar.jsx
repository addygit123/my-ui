import { NavLink } from "react-router-dom";
import research from "/src/assets/Research.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-999 text-slate">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center w-40">
            <img
              onClick={() => window.location.href = '/'}
              className="px-2 ml-4 py-2 w-40 sm:w-20 cursor-pointer"
              src={research}
              alt="Name of the website"
            />
          </div>

          {/* Hamburger Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-white hover:bg-purple-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4 ml-[12vw] flex-grow">
            <div>
            <NavLink to="/projects" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">PROJECTS</NavLink>
            <NavLink to="/talk" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">TALK</NavLink>
            <NavLink to="/about" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">ABOUT</NavLink>
            <NavLink to="/getinvolved" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">GET INVOLVED</NavLink>
            <NavLink to="/build" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">BUILD A PROJECT</NavLink>
            <NavLink to="/news" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">NEWS</NavLink>
            </div>
            <div className="flex absolute right-0">
            <a href="#" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">SIGN IN</a>
            <a href="#" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-semibold">REGISTER</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/projects" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">PROJECTS</NavLink>
          <NavLink to="/talk" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">TALK</NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">ABOUT</NavLink>
          <NavLink to="/getinvolved" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">GET INVOLVED</NavLink>
          <NavLink to="/build" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">BUILD A PROJECT</NavLink>
          <NavLink to="/news" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">NEWS</NavLink>
          <a href="#" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">SIGN IN</a>
          <a href="#" className="text-gray-300 hover:text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-semibold">REGISTER</a>
        </div>
      </div>
    </nav>
  );
}
