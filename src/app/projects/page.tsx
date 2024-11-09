// "use client"
import React from 'react'
import Footer from '@/components/footer';
import ProjectsHeader from '@/components/projectsheader';
import Nextjs from '../nextjs/page';
import HtmlCss from '../htmlcss/page';






const Projects = () => {
  return (
    <><main className='max-w-screen-2xl mx-auto bg-gray-300 pb-20 w-[100vw] animate-fadeIn'>
     < ProjectsHeader/>
     <HtmlCss/>
     <div className='lg:mt-[450px] mt-[1300px]'></div>
      <Nextjs/>
    </main>
        <Footer/>
    </>
  )
}

export default Projects


