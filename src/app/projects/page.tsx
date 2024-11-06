import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
const Projects = () => {
  return (
    <><main className='max-w-screen-2xl mx-auto bg-gray-200'>
      <div className=''>
      <h1 className=' justify-center gap-3 flex font-extrabold text-3xl font-sans text-black pt-12'>My Awesome <span className='text-pink-700'> Projects</span></h1>
      <p className='text-gray-500  font-medium lg:font-semibold text-serif  text-center  lg:mx-[13rem] md:mx-[8rem]  sm:mx-[6rem] mx-[4rem] mt-6'>I build modern, responsive websites with Next.js, TypeScript, and Tailwind CSS, delivering clean code and seamless user experiences.</p>
      </div>

      <div>
        <div className='o1 mt-8 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center '>
          <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-600 text-3xl md:text-5xl  font-bold'>01</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/service-1.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4'><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px] lg:text-[25px]   '>Ecommerce Shopping Website</h3> <p className= ' text-gray-400 font-medium text-[14px] sm:text-[16px]'>Built with Next.js and Tailwind CSS, our e-commerce site offers a fast, responsive, and seamless shopping experience.</p></div>
          <div className=' text-pink-600 text-4xl font-extrabold md:mr-8 hover:text-gray-500 mr-3'><Link href="https://ecommerce-shopping-web.vercel.app/" target="_blank" rel="noopener noreferrer"  ><BsArrowUpRightCircle /></Link></div>
        </div>
        <div className='mt-5 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center '>
        <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-600 text-3xl md:text-5xl  font-bold'>02</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/service-2.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4'><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px]  lg:text-[25px]'>Travelling Website</h3> <p className= ' text-gray-400 text-[14px] sm:text-[16px]'>Our travel site, built with Next.js and Tailwind CSS, provides a sleek, responsive experience for exploring and booking trips.</p></div>
          <div className=' text-pink-600 text-4xl font-extrabold md:mr-8 hover:text-gray-500 mr-3'><Link href="https://travelling-website-design-by-figma.vercel.app/" target="_blank" rel="noopener noreferrer" ><BsArrowUpRightCircle /></Link></div>
        </div>
        <div className='mt-5 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center'>
        <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-600 text-3xl md:text-5xl  font-bold'>03</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/service-3.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4'><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px] lg:text-[25px]'>Amazon Clone</h3> <p className= ' text-gray-400 text-[14px] sm:text-[16px]'>An Amazon clone was built with HTML, CSS, and JavaScript, featuring a responsive layout and interactive product pages.</p></div>
          <div className=' text-pink-600 text-4xl font-extrabold md:mr-8 mr-3 hover:text-gray-500'><Link href="http://127.0.0.1:5501/inedx.html" target="_blank" rel="noopener noreferrer"><BsArrowUpRightCircle /></Link></div>
        </div>
        <div className='mt-5 lg:mx-[10rem] rounded-lg bg-black h-[150px] flex items-center'>
        <div className='ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-pink-600 text-3xl md:text-5xl  font-bold'>04</div>
          <div className='ml-3 md:ml-10'>
             <Image
             className='h-[130px] w-[380px] md:w-[300px] rounded-md'
            height={500}
            width={500}
            src="/service13.PNG"
            alt="Image"/></div>
          <div className='md:ml-14 ml-4 '><h3 className='text-gray-100 font-bold text-[16px]  md:text-[20px]  lg:text-[25px]'>Bread Bakery</h3> <p className= ' text-gray-400 text-[14px] sm:text-[16px]'>Built a delightful bread bakery website, capturing the essence of freshly baked goods,a seamless, user-friendly experience </p></div>
          <div className=' text-pink-600 text-4xl font-extrabold md:mr-8 mr-3 hover:text-gray-500'><Link href="https://bakery-website-by-habiba.vercel.app/"  target="_blank" rel="noopener noreferrer"><BsArrowUpRightCircle /></Link></div>
        </div>
      </div>
    </main>
    <div className='bg-gray-200 h-[100px] md:h-[150px] w-full max-w-screen-2xl mx-auto'></div>
    <Footer/>
    </>
  )
}

export default Projects