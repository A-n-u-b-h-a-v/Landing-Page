import React from 'react'
import {testimonials} from '../contsant/constant';
import SuccessCard from './SuccessCard';
const SuccessPage = () => {
  return (
    <div className='px-40'>
      <div className="text-3xl sm:text-4xl md:text-5xl capitalize font-extrabold mt-6 sm:mt-10">
                45000+ to <span className="text-blue-900">Success Stories</span>
            </div>
        <h2 className='capitalize'>from dreamers to achievers</h2>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6'>
        {
            testimonials.map((testimonial, index) => (
                <SuccessCard key={index} {...testimonial} />
            ))
        }
        </div> 
    </div>
  )
}

export default SuccessPage
