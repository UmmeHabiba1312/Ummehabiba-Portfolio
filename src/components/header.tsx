import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
// import { Menu } from 'lucide-react'


const Header = () => {
  return (
    <><main className='max-w-screen-2xl mx-auto bg-gray-900 h-auto  pt-3 w-[100vw] sticky'>
        <div className='flex justify-around w-full'>
        
          <div className='flex lg:gap-20 '>
          
          {/* logo */}
          <div className=' text-center flex items-center'>  
        <div className="text-2xl font-extrabold  text-gray-300 lg:text-2xl md:text-2xl  md:font-semibold font-serif items-center flex">
          PORTFOLIO
        </div>
        </div>
          </div>

        {/* content div */}
        <div className="hidden  sm:hidden md:hidden  md:font-medium lg:flex items-center   lg:text-[14px] lg:font-semibold lg:gap-1">
          <div className="hover:text-gray-300 hover:border-4 px-4 rounded-xl py-2 hover:border-gray-700 hover:bg-gray-700 text-gray-300"><Link href="/">Home</Link></div>
          <div className="hover:text-gray-300 hover:border-4 px-4 rounded-xl py-2 hover:border-gray-700 hover:bg-gray-700 text-gray-300"><Link href="/about">About</Link></div>
          <div className="hover:text-gray-300 hover:border-4 px-4 rounded-xl py-2 hover:border-gray-700 hover:bg-gray-700 text-gray-300"><Link href="/projects">Projects</Link></div>
          <div className="hover:text-gray-300 hover:border-4 px-4 rounded-xl py-2 hover:border-gray-700 hover:bg-gray-700 text-gray-300"><Link href="/skills">Skills</Link></div>
          <div className="hover:text-gray-300 hover:border-4 px-4 rounded-xl py-2 hover:border-gray-700 hover:bg-gray-700 text-gray-300"><Link href="/contact">Contact</Link></div>
        </div>

        <div className="h-[80px]  hidden lg:block"> 
                 {/* Button for download cv */}
        <button className=" px-2 gap-1 mt-5 sm:gap-1 flex lg:px-1 sm:px-1 h-[50px] justify-center items-center bg-pink-800  hover:border-pink-800 hover:border-2 hover:bg-pink-700 rounded-[30px] sm:mt-3 ">
          <div className="">
             <svg
             className="animate-bounce"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 1C9.5 0.446875 9.05313 0 8.5 0C7.94688 0 7.5 0.446875 7.5 1V8.58438L5.20625 6.29063C4.81563 5.9 4.18125 5.9 3.79063 6.29063C3.4 6.68125 3.4 7.31563 3.79063 7.70625L7.79063 11.7063C8.18125 12.0969 8.81563 12.0969 9.20625 11.7063L13.2063 7.70625C13.5969 7.31563 13.5969 6.68125 13.2063 6.29063C12.8156 5.9 12.1812 5.9 11.7906 6.29063L9.5 8.58438V1ZM2.5 11C1.39688 11 0.5 11.8969 0.5 13V14C0.5 15.1031 1.39688 16 2.5 16H14.5C15.6031 16 16.5 15.1031 16.5 14V13C16.5 11.8969 15.6031 11 14.5 11H11.3281L9.9125 12.4156C9.13125 13.1969 7.86562 13.1969 7.08437 12.4156L5.67188 11H2.5ZM14 12.75C14.1989 12.75 14.3897 12.829 14.5303 12.9697C14.671 13.1103 14.75 13.3011 14.75 13.5C14.75 13.6989 14.671 13.8897 14.5303 14.0303C14.3897 14.171 14.1989 14.25 14 14.25C13.8011 14.25 13.6103 14.171 13.4697 14.0303C13.329 13.8897 13.25 13.6989 13.25 13.5C13.25 13.3011 13.329 13.1103 13.4697 12.9697C13.6103 12.829 13.8011 12.75 14 12.75Z"
                fill="#F8F8F8"
              />
            </svg></div>
          <p className=" sm:font-semibold  text-gray-100 "><Link href="/mycv.pdf" target="_blank" rel="noopener noreferrer">DOWNLOAD CV</Link></p></button></div>
          {/* hamburger */}
      <div className='lg:hidden  '>
      <Sheet >
  <SheetTrigger>
  <GiHamburgerMenu className='text-white text-4xl' />
    </SheetTrigger>
  <SheetContent className='bg-pink-200'>
  <div className="  font-bold  items-center text-gray-900 text-xl">
          <div className="hover:text-green-700 "><Link href="/">Home</Link></div>
          <div className="hover:text-green-700"><Link href="/about">About</Link></div>
          <div className="hover:text-green-700"><Link href="/projects">Projects</Link></div>
          <div className="hover:text-green-700"><Link href="/skills">Skills</Link></div>
          <div className="hover:text-green-700"><Link href="/contact">Contact</Link></div>
        </div>
  </SheetContent>
</Sheet>

      </div>
        
      </div>

    </main>
    
    </>
  )
}

export default Header