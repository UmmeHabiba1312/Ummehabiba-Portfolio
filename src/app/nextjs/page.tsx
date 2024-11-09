import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import ProjectsHeader from '@/components/projectsheader'



const Nextjs = () => {
  return (
    <main className='h-auto w-[100vw]'>
         <div>
        <span className='flex justify-center text-2xl font-semibold text-black mt-4 '>Nextjs</span>
        <div className='o1 mt-8 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center '>
          <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-800 text-3xl md:text-4xl  font-bold'>01</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/service-1.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4'><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px] lg:text-[25px]   '>Ecommerce Shopping Website</h3> <p className= ' text-gray-400 font-medium text-[14px] sm:text-[16px]'>Built with Next.js and Tailwind CSS, our e-commerce site offers a fast, responsive, and seamless shopping experience.</p></div>
          <div className=' text-pink-800 text-4xl font-extrabold md:mr-8 hover:text-gray-500 mr-3'><Link href="https://ecommerce-shopping-web.vercel.app/" target="_blank" rel="noopener noreferrer"  ><BsArrowUpRightCircle /></Link></div>
        </div>
        <div className='mt-5 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center '>
        <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-800 text-3xl md:text-4xl  font-bold'>02</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/service-2.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4'><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px]  lg:text-[25px]'>Travelling Website</h3> <p className= ' text-gray-400 text-[14px] sm:text-[16px]'>Our travel site, built with Next.js and Tailwind CSS, provides a sleek, responsive experience for exploring and booking trips.</p></div>
          <div className=' text-pink-800 text-4xl font-extrabold md:mr-8 hover:text-gray-500 mr-3'><Link href="https://travelling-website-design-by-figma.vercel.app/" target="_blank" rel="noopener noreferrer" ><BsArrowUpRightCircle /></Link></div>
        </div>
        <div className='mt-5 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center'>
        <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-800 text-3xl md:text-4xl  font-bold'>03</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/port.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4'><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px] lg:text-[25px]'>Personal Portfolio</h3> <p className= ' text-gray-400 text-[14px] sm:text-[16px]'>I built a personal portfolio to showcase my skills in Next.js, TypeScript, and Tailwind CSS, highlighting my commitment to clean design and seamless user experiences</p></div>
          <div className=' text-pink-800 text-4xl font-extrabold md:mr-8 mr-3 hover:text-gray-500'><Link href="https://ummehabiba-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"><BsArrowUpRightCircle /></Link></div>
        </div>
        <div className='mt-5 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center'>
        <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-800 text-3xl md:text-4xl  font-bold'>04</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/service13.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4 '><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px]  lg:text-[25px]'>Bread Bakery</h3> <p className= ' text-gray-400 text-[14px] sm:text-[16px]'>Built a delightful bread bakery website, capturing the essence of freshly baked goods,a seamless, user-friendly experience </p></div>
          <div className=' text-pink-800 text-4xl font-extrabold md:mr-8 mr-3 hover:text-gray-500'><Link href="https://bakery-website-by-habiba.vercel.app/"  target="_blank" rel="noopener noreferrer"><BsArrowUpRightCircle /></Link></div>
        </div>
      </div>
    </main>
  )
}

export default Nextjs