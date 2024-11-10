import React from 'react'

const AfterHero = () => {
  return (
    <main className='w-[100vw]  h-[70px] bg-black flex text-white justify-evenly items-center '>
        <div className='flex-1 gap-1 md:gap-2 items-center flex justify-center'>
            {/* <p className='text-2xl md:text-3xl font-bold pl-3'>01</p> */}
            <p className=' text-gray-300 md:font-bold '>One Year experience</p>
        </div>
        <div className='flex-1  gap-1 md:gap-2 items-center flex justify-center '>
        {/* <p className='md:text-3xl text-2xl md:font-bold  '>02</p> */}
        <p className=' text-gray-300 md:font-bold '>Projects Completed</p>
        </div>
        <div className='flex-1 gap-1 sm:gap-1 items-center flex justify-center'>
        {/* <p className='md:text-3xl text-2xl md:font-bold  '>03</p> */}
        <p className=' text-gray-300 md:font-bold '>Happy clients</p>
        </div>
        <div className='flex-1 gap-1 sm:gap-1 items-center flex justify-center'>
        {/* <p className='md:text-3xl text-2xl md:font-bold  '>04</p> */}
        <p className=' text-gray-300 md:font-bold '>Best Ratings</p>
        </div>
    </main>
  )
}

export default AfterHero