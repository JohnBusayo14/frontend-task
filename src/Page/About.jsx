import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import ser2 from "../assets/images/ser2.webp"

const About = () => {
  return (
    <div  class="relative isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols drop-out  lg:px-6 sm:py-32" id='services'>
        <div className=' '>
           <h1 className='text-3xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-6xl'>About us </h1>
            
        </div>
        <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
            
           
             
              <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
               <img src={ser2} alt="" />
            </div>
                
            
           
            <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                
                <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Who we are</h3>
                <p className='font-Poppins text-sm '>Welcome to our website, your trusted destination for discovering, comparing, and enrolling in a diverse range of courses. We are committed to empower your lifelong learning journey by providing a platform that connects you with educational opportunity tailored to your goals and interests.</p >
            </div>
           

        </div>
        
       
    </div>

)
}

export default About