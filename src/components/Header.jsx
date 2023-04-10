import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-around'>
      <Link
        to="/"
        aria-label="ProCareer"
        title="ProCareer"
        className="inline-flex items-center"
      >
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
          ProCareer
        </span>
      </Link>
      <ul className='items-center hidden space-x-8 lg:flex'>
        <li>
          <NavLink to="/" aria-label="Home" title="Home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" aria-label="Statistics" title="Statistics">
          Statistics
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" aria-label="Blog" title="Blog">
            Blog
          </NavLink>
        </li>
      </ul>
      <button className="bg-purple-600 w-48 h-16 text-white text-xl font-semibold rounded-lg">Applying Now</button>
    </div>
    </div>
  );
};

export default Header;
