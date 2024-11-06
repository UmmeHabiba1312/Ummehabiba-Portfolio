import Footer from '@/components/footer'
import React from 'react'


const Skills = () => {
  return (

<>
<main className='max-w-screen-2xl mx-auto lg:h-[40rem] md:h-[40rem] h-[30rem] bg-gray-200 w-full'>
  <hr />
  <div className='lg:pt-12 md:pt-20 sm:pt-[40px] pt-[30px]'>
    <h3 className='flex justify-center text-4xl sm:text-5xl lg:text-3xl font-extrabold text-gray-900'>
      My <span className='text-pink-800 pl-4'>Skills</span>
    </h3>
    <p className='pt-8 text-gray-500 font-medium flex justify-center mx-4 lg:mx-[14rem] text-[16px] sm:text-[17px]'>
      I am a full stack developer skilled in Next.js, TypeScript, and Tailwind CSS. I build dynamic, 
      <br /> responsive web apps with clean, efficient code, focusing on seamless user experiences.
    </p>
  </div>



  <div className='flex flex-wrap lg:mt-20 md:mt-20 sm:mt-15 mt-6 mx-4 items-center justify-evenly'>
    {['75%', '85%', '80%', '85%', ].map((percentage, index) => (
      <div key={index} className='animate-spin-slow xl:h-[14rem] xl:w-[14rem] lg:h-[12rem] sm:h-[9rem] lg:w-[12rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] h-[6rem] w-[6rem] rounded-full border-gray-950 lg:border-[1rem] sm:border-[0.7rem] border-[0.5rem] border-l-pink-800 flex justify-center items-center font-bold text-3xl'>
        {percentage}
      </div>
    ))}
  </div>
  <div className='flex flex-wrap mx-4 items-center justify-evenly font-semibold md:text-2xl mt-4'>
    <div className='flex-1 text-center'>Next.js</div>
    <div className='flex-1 text-center'>Tailwind CSS/Css</div>
    <div className='flex-1 text-center'>TypeScript</div>
    <div className='flex-1 text-center'>HTML/JavaScript</div>
  </div>
</main>

    <Footer/>
    </>
  )
}

export default Skills