import React from 'react'
import service from '../assets/images/images11.jpg'
import ser1 from "../assets/images/ser1.webp"







function Service() {
    
    return (
        <div  class="relative isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols drop-out  lg:px-6 sm:py-32" id='services'>
            <div className=' '>
               <h1 className='text-3xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-6xl'>Our Services </h1>
                
            </div>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
               
                 
                  <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                   <img src={ser1} alt="" />
                </div>
                    
                
               
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'> Extensive Course Catalog</h3>
                    <p className='font-Poppins text-sm '>Learn from the best in the industry. Our courses are taught by experienced instructors who are passionate about sharing their expertise and knowledge. They bring real-world experience and insights to the virtual classroom, ensuring that you receive top-quality education.</p >
                </div>
               
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'> Expert Instructors</h3>
                    <p className='font-Poppins text-sm '>Discover a vast and diverse catalog of courses that span a multitude of subjects and industries. Our courses are meticulously curated to provide you with the knowledge and skills you need to excel in your chosen field. Whether you're a novice or an expert, there's something here for everyone.</p >
                </div>
            </div>
            
           
        </div>
    
    )
}

export default Service