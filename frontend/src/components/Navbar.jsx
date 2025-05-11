import React, { useState, useEffect } from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-10 ${
        sticky
          ? 'sticky-navbar shadow-lg bg-sky-950 duration-300 transition-all ease-in-out'
          : 'bg-base-100'
      }`}
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Book Store</a>
      </div>
      <ul className="hidden md:flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book">Books</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <Category />

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
              className="btn btn-primary"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Enroll Now
            </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        className="btn m-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 hover:to-blue-600 hover:from-blue-700 transition-all duration-300 ease-in-out hover:scale-105"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Login
      </button>
      <Link to="/register">
        <div className="btn bg-white text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:scale-105 transition-all duration-300 ease-in-out">
          register
        </div>
      </Link>
    </div>
  );
};

export default Navbar;