import React from 'react'

const AfterHero = () => {
  return (
    <main className='w-full h-[80px] bg-black flex text-white justify-evenly items-center '>
        <div className='flex-1 gap-1 md:gap-2 items-center flex'>
            <p className='text-2xl md:text-3xl font-bold pl-3'>01</p>
            <p className='sm:text-gray-100 text-gray-50'>One Year experience</p>
        </div>
        <div className='flex-1  gap-1 md:gap-2 items-center flex '>
        <p className='md:text-3xl text-2xl font-bold '>02</p>
        <p className='sm:text-gray-100 text-gray-50'>Projects Completed</p>
        </div>
        <div className='flex-1 gap-1 sm:gap-1 items-center flex'>
        <p className='md:text-3xl text-2xl font-bold '>03</p>
        <p className='sm:text-gray-100 text-gray-50'>Happy clients</p>
        </div>
        <div className='flex-1 gap-1 sm:gap-1 items-center flex'>
        <p className='md:text-3xl text-2xl font-bold '>04</p>
        <p className='sm:text-gray-100 text-gray-50 '>Best Ratings</p>
        </div>
    </main>
  )
}

export default AfterHero