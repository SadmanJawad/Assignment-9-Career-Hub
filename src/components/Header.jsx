import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-around">
        <Link
          to="/"
          aria-label="ProCareer"
          title="ProCareer"
          className="inline-flex items-center"
        >
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 ">
            ProCareer
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex  text-gray-500 font-semibold">
          <li>
            <NavLink to="/" aria-label="Home" title="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              aria-label="Statistics"
              title="Statistics"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied"
              aria-label="Applied-Jobs"
              title="Applied-Jobs"
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" aria-label="Blog" title="Blog">
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full ">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between flex-col ml-40 mb-4">
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav className="mr-56">
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/statistics"
                          aria-label="Statistics"
                          title="Statistics"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Statistics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/applied"
                          aria-label="Applied-Jobs"
                          title="Applied-Jobs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button className="bg-purple-600 w-44 md:w-48 h-16  md:block text-white text-sm md:text-xl font-semibold rounded-lg ml-10">
                  Start Applying
                </button>
              </div>
            </div>
          )}
        </div>
        <button className="bg-purple-600 w-16 md:w-48 h-16 hidden md:block text-white text-sm md:text-xl font-semibold rounded-lg">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
