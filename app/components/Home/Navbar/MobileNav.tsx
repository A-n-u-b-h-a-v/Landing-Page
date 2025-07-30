import { Navlinks } from '@/app/contsant/constant'
import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: ()=> void;
}

const MobileNav = ({closeNav,showNav}:Props) => {


  const navOpen = showNav? 'translate-x-0':'translate-x-[-100%]';
  return (
    <div>
      {/* Navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050]`}>
        {Navlinks.map((link)=>{
          return (
           <Link key={link.id} href={link.url}>
            <p className='text-white w-fit text-xl ml-12 boder-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.lable}</p>
          </Link>
          );
        })}
        {/* Cross Icon for close the navbar */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'></CgClose>
      </div>
    </div>
  )
}

export default MobileNav
