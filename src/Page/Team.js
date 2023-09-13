import React from 'react';
import team from "../assets/images/team.jpeg"

const Team = () => {
    return (
        <div  class="relative isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols drop-out  lg:px-6 sm:py-32" id='services'>
            <div className=' '>
               <h1 className='text-2xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-4xl'>Meet our developer </h1>
                
            </div>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
               
                 
                  <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                   <img src={team} alt="" />
                </div>
                    
                
               
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Meet John</h3>
                    <p className='font-Poppins text-sm '>John is a passionate and skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, React Native, Nextjs and Three.js. he is a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p >
                </div>
               
    
            </div>
            
           
        </div>
    
    )
}

export default Team