"use client"
import React from 'react'
import { LevAdv, LeverageLinks } from '../contsant/constant'
import LeverageCard from './LeverageCard'
import FlipCard from './FlipCard'
import Marquee from './Marquee'
import MagicBento from './MagicBento'


const LeveragePage = () => {
  return (
    <div className='w-full mt-[70]'>
     <main className="max-h-[920px] overflow-hidden bg-current text-black">
      <Marquee />
    </main>
        <div className='text-5xl capitalize p-8 font-extrabold'>why choose <span className='text-blue-900'>flyhigh</span></div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-blue-100 py-15'>
  {LeverageLinks.map((item, index) => (
    <LeverageCard
      key={index}
      title={item.text}
      subtitle=''
      icon={item.image}
      number={item.number} // 👈 pass number here
    />
  ))}
</div>

        <div className=' mt-10 mb-5'>
            <div className='text-7xl mx-[200] capitalize p-8 font-extrabold'>advantages of <span className='text-blue-900'>flyhigh</span></div>
        <div className='w-3/4 m-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 '>
      {/* {LevAdv.map((item, index) => ( */}
        <div className=''>
<MagicBento
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={400}
  particleCount={12}
  glowColor="132, 0, 255"
/></div>
      {/* ))} */}
    
    </div>
        </div>
    </div>
  )
}

export default LeveragePage
