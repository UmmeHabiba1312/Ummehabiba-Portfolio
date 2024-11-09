import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const HtmlCss = () => {
  return (
   <main className="animate-fadeIn h-auto w-[100vw]">
    <div className='h-auto'>
      <h1 className='text-center font-bold mt-5 text-2xl'>Html/ Css/ JavaScript</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:mx-60 mx-20 sm:mx-44 md:mx-60 gap-10 h-[400px] mt-10'>

        <div className="one text-center bg-gray-800 rounded-xl">
          <div className='flex justify-center'>
          <Image
          className='h-[300px] w-[250px] rounded-xl text-center  mt-4 border-4 border-white '
          height={500}
          width={500}
          src="/rock.PNG"
          alt='rock'/>
          </div>
          <div className='mt-5 mb-5 flex gap-3 justify-center'>
            <div>            
              <Link href="https://github.com/UmmeHabiba1312/Rock-Paper-Scissors" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200 hover:transition duration-700 ease-in-out py-2 px-4 rounded-xl'>Code </Link>
            </div>           
            <div className='hover:transition duration-700 ease-in-out'>
            <Link href="https://rock-paper-scissors-zeta-orpin.vercel.app/" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200  py-2 px-4 rounded-xl'>Demo</Link>
            </div>
          </div>
        </div>
        <div className="one text-center bg-gray-800 rounded-xl">
          <div className='flex justify-center'>
          <Image
          className='h-[300px] w-[250px] rounded-xl text-center  mt-4 border-4 border-gray-700'
          height={500}
          width={500}
          src="/tictac.PNG"
          alt='tictactoe'/>
          </div>
          <div className='mt-5 mb-5 flex gap-3 justify-center'>
            <div>            
              <Link href="https://github.com/UmmeHabiba1312/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200 hover:transition duration-700 ease-in-out py-2 px-4 rounded-xl'>Code </Link>
            </div>           
            <div className='hover:transition duration-700 ease-in-out'>
            <Link href="https://tic-tac-toe-teal-zeta-39.vercel.app/" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200  py-2 px-4 rounded-xl'>Demo</Link>
            </div>
          </div>
        </div>
        <div className="one text-center bg-gray-800 rounded-xl ">
          <div className='flex justify-center '>
          <Image
          className='h-[300px] w-[250px] rounded-xl text-center mt-4 border-4 border-white'
          height={500}
          width={500}
          src="/service-3.PNG"
          alt='amazone'/>
          </div>
          <div className='mt-5 mb-5 flex gap-3 justify-center'>
            <div>            
              <Link href="https://github.com/UmmeHabiba1312/Amazon-Clone" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200 hover:transition duration-700 ease-in-out py-2 px-4 rounded-xl'>Code </Link>
            </div>           
            <div className='hover:transition duration-700 ease-in-out'>
            <Link href="/" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200  py-2 px-4 rounded-xl'>Demo</Link>
            </div>
          </div>
        </div>
        <div className="one text-center bg-gray-800 rounded-xl">
          <div className='flex justify-center'>
          <Image
          className='h-[300px] w-[250px] rounded-xl text-center mt-4 border-4 border-gray-700'
          height={500}
          width={500}
          src="/resum.PNG"
          alt='resum'/>
          </div>
          <div className='mt-5 mb-5 flex gap-3 justify-center'>
            <div>            
              <Link href="https://github.com/UmmeHabiba1312/Milestone2-ResumeByUmmeHabiba" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200 hover:transition duration-700 ease-in-out py-2 px-4 rounded-xl'>Code </Link>
            </div>           
            <div className='hover:transition duration-700 ease-in-out'>
            <Link href="https://milestone1-2-ruby-two.vercel.app/" target="_blank" rel="noopener noreferrer" className='bg-pink-800 hover:bg-pink-600 text-gray-200  py-2 px-4 rounded-xl'>Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </main>
  )
}

export default HtmlCss