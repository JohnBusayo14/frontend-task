// // src/components/Navbar.js
// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../assets/images/logo.png"

// const Navbar = () => {

//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//       setMobileMenuOpen(!isMobileMenuOpen);
//     };
//   return (
//     <nav className="bg-[#4c956c] sm:flex sm:flex-row ">
//       <div className="flex items-center justify-between w-full items-center h-20 px-10">
       
        // <Link to="/">
        // <div className="w-10 flex flex-col items-center justify-center rounded-full"><img src={logo} alt="logo image" className=' rounded-full' />
        // </div>
        // </Link>
//         <div className="md:hidden">
//           {/* Mobile menu icon/button */}
//           <button className="text-white">
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <Link to="/">
//           <a href="#" className="text-white">Home</a>
//           </Link>
//           <Link to="/about">
//         <a href="#secondpage" className="text-white">About us</a>
//         </Link>
//         <Link to="/service">
//         <a href="/service" className="text-white">Services</a>
//         </Link>
//         </div>
//       </div>
//       {/* Mobile menu */}
//       <div className="md:hidden">
//         <button className="text-white" onClick={toggleMobileMenu}>
//           <i className="fas fa-bars font-extrabold text-2xl">X</i>
//         </button>
//         {isMobileMenuOpen && (
//           <div className="mt-2">
//               <Link to="/">
//           <a href="#" className="block text-white">Home</a>
//           </Link>
//           <Link to="/about">
//         <a href="#secondpage" className="block text-white">About us</a>
//         </Link>
//         <Link to="/service">
//         <a href="/service"  className="block text-white">Services</a>
//         </Link>
//             {/* <a href="#" className="block text-white">Home</a>
//             <a href="#" className="block text-white">About</a>
//             <a href="#" className="block text-white">Services</a> */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"

const Navbar = () => {
 
 // NavigationMenu.js

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navigation-menu">
      <div className="logo">
      <Link to="/">
        <div className="w-10 flex flex-col items-center justify-center rounded-full"><img src={logo} alt="logo image" className=' rounded-full' />
        </div>
        </Link>
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
           <Link to="/"> <a href="#">Home</a></Link>
            </li>
          <li>
            <Link to="/about"><a href="#">About Us</a></Link>
          </li>
          <li>
            <Link to="/sevices"> <a href="#">Services</a> </Link>
          </li>
      
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </div>
  );
};


export default Navbar