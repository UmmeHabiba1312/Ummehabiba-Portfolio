import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
  return (
    <main className='bg-slate-100 text-center animate-fadeIn w-full overflow-hidden '>
      <div className='pt-20 pb-20'>
        <h2 className='font-bold text-3xl text-pink-800'>About Me</h2>
        <p className='text-gray-600 px-6 md:px-20 lg:px-60 pt-7 text-lg'>
          Hello! I am <span className='text-black font-semibold'>Umm e Habiba</span>, a passionate full stack web developer.
          I thrive on creating dynamic, responsive, and user-centric web applications, blending creativity with technical expertise.
          My journey in development has been fueled by a curiosity for continuous learning and a commitment to solving real-world
          problems through clean, efficient code.
        </p>
        <Link href='/about'>
          <button className='bg-pink-800 border-2 border-pink-900 rounded-3xl py-2 px-6 text-slate-100 font-bold hover:bg-gray-900 hover:border-gray-500 mt-14 inline-block'>
            Explore More!
          </button>
        </Link>
      </div>
    </main>
  );
};

export default AboutMe;

