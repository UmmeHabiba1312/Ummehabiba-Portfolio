import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Footer from '@/components/footer';


const About = () => {
  return (
    <>
  <main className='max-w-screen-2xl mx-auto bg-gradient-to-r from-pink-300 to-black h-auto min-h-[100vh]  flex flex-col md:flex-row font-sans pt-6'>
    {/* left div */}
    <div className='w-full md:w-[40%] pt-12 flex justify-center'>
      <div className='h-[450px] rounded-full bg-gradient-to-tr from-gray-800 to-pink-300 w-[350px] md:w-[450px] flex justify-center'>
        <Image
          className='h-[450px] w-[350px] rounded-full'
          height={500}
          width={500}
          src="/about.png"
          alt=""
        />
      </div>
    </div>
    {/* right div */}
    <div className='w-full md:w-[60%] pt-8 pl-6 md:pl-10'>
      <p className='font-bold text-black text-[20px] md:text-[22px] mt-2 md:mt-3 lg:mt-4'>ABOUT ME</p>
      <h1 className='lg:text-[43px] font-bold sm:mt-6 mt-3 text-2xl'>Top Rated <span className='text-pink-800'>Full-Stack Developer</span></h1>
      <p className='text-gray-400 font-semibold sm:mt-12 mt-6 text-[16px] md:text-[18px]'>I am Umm e Habiba, a Full-Stack Developer with expertise in Next.js, TypeScript, and <br /> Tailwind CSS. I create dynamic web applications that deliver seamless user experiences, <br /> driven by a passion for problem-solving and continuous learning.</p>
      {/* icon dives */}
      <div className='mt-10'>        
        <div className='flex flex-col md:flex-row md:gap-10 gap-6'>
          <div className='flex gap-2'>
            <div className='text-pink-800 text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-400'>Full-Stack Expertise</p>
          </div>
          <div className="flex gap-2">
            <div className='text-pink-800 text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-400'>Next.js, TypeScript, Tailwind CSS</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:gap-10 mt-6'>
          <div className="flex gap-2">
            <div className='text-pink-800 text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-400'>Dynamic & Responsive Apps</p>
          </div>
          <div className="flex gap-2">
            <div className='text-pink-800 text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-400'>Innovation & Learning Focused</p>
          </div>
        </div>
      </div>
      <Button className='bg-pink-800 mt-8 text-gray-300 font-bold sm:text-[18px] rounded-3xl py-6 hover:bg-pink-400 hover:border-pink-600 hover:border-2 w-full md:w-auto'>
        Explore More About
      </Button>
    </div>
  </main>
  <Footer />
</>

  )
}

export default About