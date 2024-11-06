import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (

    <main className=''>
      <div className='max-w-screen-2xl mx-auto h-[300px] w-full bg-gray-700'>
        {/* icons */}
        <div className='flex md:text-4xl text-3xl justify-around xl:px-[35%] md:px-[26%] sm:px-[19%] px-[14%] pt-24'>
          <div className='github p-4 bg-slate-300 hover:bg-slate-200 rounded-full'>
          <Link
                  href="https://github.com/UmmeHabiba1312"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  </a>
                </Link>
          </div>
          <div className='Linkedin p-4 bg-slate-300 hover:bg-slate-100 rounded-full'><Link
                  href="https://www.linkedin.com/in/umm-e-habiba-86bb722b6/"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                  </a>
                </Link></div>
          <div className='facebook p-4 bg-slate-300 hover:bg-slate-100 rounded-full'><Link
                  href="https://www.facebook.com/profile.php?id=61561757791609"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer" >
                  <FaFacebook />
                  </a>
                </Link></div>
          <div className='twiter p-4 bg-slate-300 hover:bg-slate-100 rounded-full'><Link href="https://x.com/UmmeHabiba1312" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter />
                  </a>
                </Link></div>
          <div className='instagram p-4 bg-slate-300 hover:bg-slate-100 rounded-full'><Link
                  href="https://www.instagram.com/umm_e_habiba_official5/"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram />
                  </a>
                </Link></div>
        </div>
        {/* links */}
      <div className="  md:font-medium justify-between md:justify-around xl:px-96 lg:px-72  sm:px-24 px-16  pt-10 flex  lg:text-[16px] lg:font-semibold  ">
          <div className="text-pink-600 hover:border-b-[3px] hover:border-pink-600"><Link href="/">Home</Link></div>
          <div className="text-pink-600 hover:border-b-[3px] hover:border-pink-600"><Link href="/about">About</Link></div>
          <div className="text-pink-600 hover:border-b-[3px] hover:border-pink-600"><Link href="/projects">Projects</Link></div>
          <div className="text-pink-600 hover:border-b-[3px] hover:border-pink-600"><Link href="/skills">Skills</Link></div>
          <div className="text-pink-600 hover:border-b-[3px] hover:border-pink-600"><Link href="/contact">Contact</Link></div>
        </div>
      </div>
        <div className='max-w-screen-2xl mx-auto h-[100px] bg-gray-900 justify-center text-center  lg:text-[16px] lg:font-semibold  text-slate-500 pt-5'>
        <p>Crafted with passion and precision by Umm E Habiba.</p>
          <p>@ All Rights Reserved by Umm e Habiba</p>
        </div>

    </main>
  )
}

export default Footer