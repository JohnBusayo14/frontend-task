// src/components/Navbar.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"

const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <nav className="bg-[#4c956c] ">
      <div className="flex items-center justify-between w-full items-center h-20 px-10">
       
        <Link to="/">
        <div className="w-10 flex flex-col items-center justify-center rounded-full"><img src={logo} alt="logo image" className=' rounded-full' />
        </div>
        </Link>
        <div className="md:hidden">
          {/* Mobile menu icon/button */}
          <button className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/">
          <a href="#" className="text-white">Home</a>
          </Link>
          <Link to="/about">
        <a href="#secondpage" className="text-white">About us</a>
        </Link>
        <Link to="/service">
        <a href="/service" className="text-white">Services</a>
        </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMobileMenu}>
          <i className="fas fa-bars">X</i>
        </button>
        {isMobileMenuOpen && (
          <div className="mt-2">
            <a href="#" className="block text-white">Home</a>
            <a href="#" className="block text-white">About</a>
            <a href="#" className="block text-white">Services</a>
            <a href="#" className="block text-white">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
