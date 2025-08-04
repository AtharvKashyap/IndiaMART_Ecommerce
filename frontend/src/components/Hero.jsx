import React from 'react'
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-2 bg-orange-400 border-gray-600 shadow-[0_25px_40px_-5px_rgba(255,115,0,0.3)]'>
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-black'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-black'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-realxed'> Latest Arrivals </h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-black'></p>
                </div>
            </div>
        </div>
        {/* Hero Right Side */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero