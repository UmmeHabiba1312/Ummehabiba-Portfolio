"use client";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import AfterHero from "@/components/afterhero";
import Services from "@/components/myprojects";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AboutMe from "@/components/aboutus";
import Skills from "@/components/myskills";
// import Footer from "@/components/footer";

const Home = () => (
  <>
    <main className="max-w-screen-2xl mx-auto font-sans bg-gradient-to-tr from-pink-200 to-gray-900 h-auto w-full overflow-x-hidden">
      <div className="lg:flex w-full lg:h-[500px] h-auto bg-gradient-to-tr from-pink-200 to-gray-600 lg:to-gray-900  overflow-hidden">
        {/* left div */}
        <div className="flex-1  lg:pt-20  h-auto w-full overflow-hidden pl-4 sm:pl-6 md:pl-20">
          <p className="text-gray-900 text-2xl sm:text-2xl md:text-4xl lg:text-3xl font-bold flex  pt-16">
            Hello I am
          </p>
          <div className="  flex text-pink-800 lg:text-4xl xl:text-5xl md:text-5xl text-3xl font-bold   pt-5">
            <Typewriter
              options={{
                strings: ["Umm e Habiba","Full-Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-gray-800 font-semibold md:font-semibold flex lg:pl-0  lg:text-[18px] md:text-[18px] text-[16px]  pt-5">
            I am Umm e habiba, a full stack developer skilled in Next.js, <br />{" "}
            TypeScript, and Tailwind CSS. I create efficient, seamless <br />{" "}
            web experiences from design to deployment.
          </p>
          {/* button */}
          <div className="flex   pt-6 md:pt-8   items-center ">
            <button className="hover:animate-shadow-pulse mt-5 px-2 flex-row  sm:gap-1 md:gap-2 flex lg:px-2 sm:px-2 md:h-[55px] sm:h-[50px] h-[40px] justify-center items-center hover:border-white hover:border-[2px]  bg-pink-900 hover:bg-gray-900 rounded-[30px] sm:mt-4 ">
              <div className="">
                <svg
                  className="animate-bounce"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 1C9.5 0.446875 9.05313 0 8.5 0C7.94688 0 7.5 0.446875 7.5 1V8.58438L5.20625 6.29063C4.81563 5.9 4.18125 5.9 3.79063 6.29063C3.4 6.68125 3.4 7.31563 3.79063 7.70625L7.79063 11.7063C8.18125 12.0969 8.81563 12.0969 9.20625 11.7063L13.2063 7.70625C13.5969 7.31563 13.5969 6.68125 13.2063 6.29063C12.8156 5.9 12.1812 5.9 11.7906 6.29063L9.5 8.58438V1ZM2.5 11C1.39688 11 0.5 11.8969 0.5 13V14C0.5 15.1031 1.39688 16 2.5 16H14.5C15.6031 16 16.5 15.1031 16.5 14V13C16.5 11.8969 15.6031 11 14.5 11H11.3281L9.9125 12.4156C9.13125 13.1969 7.86562 13.1969 7.08437 12.4156L5.67188 11H2.5ZM14 12.75C14.1989 12.75 14.3897 12.829 14.5303 12.9697C14.671 13.1103 14.75 13.3011 14.75 13.5C14.75 13.6989 14.671 13.8897 14.5303 14.0303C14.3897 14.171 14.1989 14.25 14 14.25C13.8011 14.25 13.6103 14.171 13.4697 14.0303C13.329 13.8897 13.25 13.6989 13.25 13.5C13.25 13.3011 13.329 13.1103 13.4697 12.9697C13.6103 12.829 13.8011 12.75 14 12.75Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </div>
              <p className="lg:font-bold sm:font-semibold  text-white px-2">
              <Link href="/mycv.pdf" target="_blank" rel="noopener noreferrer">DOWNLOAD CV</Link>
              </p>
            </button>
            <div className=" flex pt-6  lg:gap-3 md:gap-2 lg:pl-4 md:pl-4 sm:pl-2 sm:gap-2  justify-center">
              <div className="md:text-[39px] text-[40px] text-black hover:text-blue-400">
                <Link
                  href="https://www.facebook.com/profile.php?id=61561757791609"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="" />
                  </a>
                </Link>
              </div>
              <div className="md:text-[39px] text-[40px] text-black hover:text-gray-700">
                <Link href="https://x.com/UmmeHabiba1312" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                  </a>
                </Link>
              </div>
              <div className="md:text-[39px] text-[40px] text-black hover:text-blue-700">
                <Link
                  href="https://www.linkedin.com/in/umm-e-habiba-86bb722b6/"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </Link>
              </div>
              <div className="md:text-[39px] text-[40px] text-black hover:text-gray-600">
                <Link
                  href="https://github.com/UmmeHabiba1312"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                  <FaSquareGithub />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="flex-1 w-full overflow-hidden flex  lg:pl-12  sm:pl-5 h-auto justify-center pt-3 lg:pt-0">
          <div className="pt-[220px]   ">
            <Image
              className=" h-[60px] w-[65px]  ml-8"
              height={500}
              width={500}
              src="/nextjs.png"
              alt="nextjs"
            />
            <Image
              className="w-[40px] h-[35px]  lg:w-[80px] lg:pr-10 lg:mt-14 mt-14   "
              height={500}
              width={500}
              src="/typescript.png"
              alt="typescript"
            />
            <Image
              className="h-[40px] w-[40px]  lg:mt-[70px]  mt-16 ml-10 "
              height={500}
              width={500}
              src="/html.png"
              alt="css"
            />
          </div>
          <Image
            className=" h-[500px] md:w-[300px]  lg:w-[300px] xl:w-[300px]  sm:w-[290px] w-[270px] justify-center pl-5  text-center"
            height={500}
            width={500}
            src="/heroin.png"
            alt="profile pic"
          />
          
          <div className="  pt-56 ">
            <Image
              className="  h-[45px] w-[50px] rounded-xl"
              height={500}
              width={500}
              src="/tailwindcss.png"
              alt="tailwind"
            />

            <Image
              className="  h-[50px] w-[65px]    mt-10 lg:mt-14    sm:ml-7 ml-6 mr-14 sm:mr-0 lg:mr-4"
              height={500}
              width={500}
              src="/javascript.png"
              alt="javascript"
            />
            <Image
              className="h-[40px] w-[45px] mt-16  mr-8 md:ml-12"
              height={500}
              width={500}
              src="/css1.png"
              alt="html"
            />
          </div>
        </div>
      </div>
      
    </main>
    <AfterHero />
      <AboutMe/>
      <Services />
      <Skills/>
      {/* <Carousels/> */}
  </>
);

export default Home;
