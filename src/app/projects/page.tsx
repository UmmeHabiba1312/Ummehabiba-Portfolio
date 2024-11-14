// "use client"
import React from 'react'
import Footer from '@/components/footer';
import ProjectsHeader from '@/components/projectsheader';
import Nextjs from '../nextjs/page';
import HtmlCss from '../htmlcss/page';
import Typescript from '../typescript/page';






const Projects = () => {
  return (
    <><main className='max-w-screen-2xl mx-auto bg-gray-100 pb-20 w-full overflow-hidden animate-fadeIn'>
     < ProjectsHeader/>
     <Nextjs/>
     <HtmlCss/>
    <Typescript/>
      
    </main>
        <Footer/>
    </>
  )
}

export default Projects


