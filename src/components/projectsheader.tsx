import React from 'react'


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from 'next/link'

const ProjectsHeader = () => {
  return (
    <div className=''>
      <h1 className=' justify-center gap-3 flex font-extrabold text-3xl font-sans text-black pt-12'>My Awesome <span className='text-pink-700'> Projects</span></h1>

      {/* projects selection */}
      <div className='flex justify-center mt-5'>
      <Select>
      <SelectTrigger className="w-[180px] bg-gray-800 text-gray-200 font-bold  rounded-[6px]">
        <SelectValue placeholder="All Projects"/>
      </SelectTrigger>
      <SelectContent className=' text-gray-200 text-center  bg-gray-900'>
        <SelectGroup className=''>
        <Link href="/projects" className='hover:text-gray-400 hover:border-b-2 hover:border-gray-400'>All</Link><br />
          <Link href="/htmlcss" className='hover:text-gray-400 hover:border-gray-400 hover:border-b-2'>Html/Css/JavaScript</Link><br />
          <Link href="/typescript" className='hover:text-gray-400 hover:border-gray-400 hover:border-b-2'>TypeScript</Link><br />
          <Link href="/nextjs" className='hover:text-gray-400 hover:border-gray-400 hover:border-b-2'>Nextjs</Link>
        </SelectGroup>
      </SelectContent>
    </Select>
  
      </div>
      <p className='text-gray-500  font-medium lg:font-semibold text-serif  text-center  lg:mx-[13rem] md:mx-[8rem]  sm:mx-[6rem] mx-[4rem] mt-6'>I build modern, responsive websites with Next.js, TypeScript, and Tailwind CSS, delivering clean code and seamless user experiences.</p>
      </div>
  )
}

export default ProjectsHeader