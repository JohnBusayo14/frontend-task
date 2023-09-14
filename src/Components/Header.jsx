import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='header'>
     
      <div className='header-content flex items-center justify-center flex-col text-center'>
      
        <h1 className='text-white text-4xl font-bold header-title ls-2'>Welcome to our Course Listing Website</h1>
        <p className='text-uppercase font-medium text-lg text-white my-3 ls-1'>Learn Without Limit</p>
        <div className=' w-[100%] h-20 flex m-auto gap-5 items-center justify-center'>
  <Link to='/about'>
  <button className=' w-24 h-[40px] bg-white rounded-md font-semibold hover:bg-[#4c956c] hover:text-white'>About Us</button>
  </Link>
     <Link to="/team">
     <button className=' w-40 h-[40px] bg-white rounded-md font-semibold hover:bg-[#4c956c] hover:text-white'>Meet our Developer</button>
     </Link>
      </div>
      </div>
      
    </header>
  )
}

export default Header