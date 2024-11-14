import React from 'react'
import Image from 'next/image'
import Link from 'next/link';




const Services = () => {
  return (
    <>
    <main className='bg-pink-50  max-w-screen-2xl mx-auto h-auto  animate-fadeIn w-full overflow-hidden'>
        <div className=' text-center pt-10 h-auto'>
            <h2 className='text-3xl sm:text-3xl font-bold text-gray-900'>See My <span className='text-pink-800 text-3xl sm:text-3xl font-bold '>Projects</span></h2>
            <p className='text-gray-500 font-sans mt-5 text-[18px] font-semibold'>I specialize in web development, creating responsive websites and apps with Next.js, TypeScript, <br /> and Tailwind CSS for clean code and great user experiences.</p>

            <div className='grid lg:grid-cols-2 grid-cols-1 xl:mx-36 lg:mx-40 md:mx-[260px] mx-11 sm:mx-32  gap-10 mt-12 '>
              {/* one */}
                <div className='hover:animate-shadow-pulse flex px-[1rem] xl:py-[1rem]   justify-center items-center  bg-slate-200  h-auto rounded-md   shadow-md shadow-slate-400'>
                <div className=' justify-center items-center '>
                  <Image
                className=""
                height={500}
                width={500}
                src="/service-1.PNG"
                alt="Img"/>
                <Image
                className=""
                height={500}
                width={500}
                src="/service-4.PNG"
                alt="Img"/>
                <Image
                className=""
                height={500}
                width={500}
                src="/service-5.PNG"
                alt="Img"/>

                </div>
                </div>
                {/* two */}
                <div className='hover:animate-shadow-pulse flex px-[1rem] xl:py-[1rem]   justify-center items-center  bg-slate-200  h-auto rounded-md   shadow-md shadow-slate-400'>
                <div className='justify-center items-center '>
                  <Image
                className=""
                height={500}
                width={500}
                src="/service-11.PNG"
                alt="Img"/>
                <Image
                className=""
                height={500}
                width={500}
                src="/service-8.PNG"
                alt="Img"/>
                <Image
                className=""
                height={500}
                width={500}
                src="/service-10.PNG"
                alt="Img"/>
                
                </div>
                </div>
                {/* three */}
                <div className='hover:animate-shadow-pulse flex px-[1rem] xl:py-[1rem]   justify-center items-center  bg-slate-200  h-auto rounded-md   shadow-md shadow-slate-400'>
                <div className='justify-center items-center'>
                  <Image
                className=""
                height={500}
                width={500}
                src="/service-3.PNG"
                alt="Img"/>
                <Image
                className=""
                height={500}
                width={500}
                src="/service-12.PNG"
                alt="Img"/>
                </div>
                </div>
                {/* four */}
                <div className='hover:animate-shadow-pulse flex px-[1rem] xl:py-[1rem]   justify-center items-center  bg-slate-200  h-auto rounded-md   shadow-md shadow-slate-400'>
                <div className='justify-center items-center '>
                  <Image
                className=""
                height={500}
                width={500}
                src="/service13.PNG"
                alt="Img"/>
                <Image
                className=""
                height={500}
                width={500}
                src="/service14.PNG"
                alt="Img"/>
                </div>
                </div>
            </div>
            <div className='flex justify-center'>
               <Link href='/projects' className=''>
          <button className='bg-pink-800 border-2 border-pink-900 rounded-3xl py-2 px-6 text-slate-100 font-bold hover:bg-gray-900 hover:border-gray-500 mt-14 mb-10 '>
            View More!
          </button>
        </Link>
               </div>
        </div>
        
    </main>
    </>
  )
}

export default Services
