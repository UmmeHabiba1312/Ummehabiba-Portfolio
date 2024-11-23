import Footer from '@/components/footer'
import Link from 'next/link';
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Next.js', percentage: '75%' },
    { name: 'TypeScript', percentage: '80%' },
    { name: 'JavaScript', percentage: '85%' },
    { name: 'Tailwind CSS', percentage: '85%' },
    { name: 'HTML/Css', percentage: '85%' },
  ];

  return (
    <>
      <main className="max-w-screen-2xl mx-auto h-auto bg-slate-100 w-full overflow-x-hidden">
        <hr />
        <div className="lg:pt-10 md:pt-20 sm:pt-[40px] pt-[30px] h-auto">
          <h3 className="flex justify-center text-4xl lg:text-3xl font-extrabold text-gray-900">
            My <span className="text-pink-800 pl-4">Skills</span>
          </h3>
          <p className="pt-8 text-gray-500 font-medium flex justify-center mx-4 lg:mx-[14rem] text-[16px] sm:text-[17px]">
            I am a full stack developer skilled in Next.js, TypeScript, and Tailwind CSS. I build dynamic, 
            <br /> responsive web apps with clean, efficient code, focusing on seamless user experiences.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap lg:mt-16 md:mt-20 sm:mt-15 mt-6 mx-8 items-center justify-evenly">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mb-8">
              <div className="relative xl:h-[12rem] xl:w-[12rem] lg:h-[10rem] sm:h-[9rem] lg:w-[10rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] h-[6rem] w-[6rem] rounded-full border-gray-950 lg:border-[0.8rem] sm:border-[0.7rem] border-[0.5rem] flex justify-center items-center font-bold text-3xl">
                {/* Inner rotating pink border */}
                <div className="absolute inset-0 rounded-full  lg:border-[0.8rem] sm:border-[0.7rem] border-[0.5rem] animate-spin-slow"></div>
                <span className="z-10">{skill.percentage}</span>
              </div>
              <p className="text-center font-semibold md:text-2xl mt-2">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <Link href="/skills" className="flex justify-center items-center">
          <button className="bg-pink-800 border-2 border-pink-900 rounded-3xl py-2 px-6 text-slate-100 font-bold hover:bg-gray-900 hover:border-gray-500 mt-14 mb-10">
            See More!
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Skills;
